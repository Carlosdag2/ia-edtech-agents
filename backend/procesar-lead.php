<?php
/**
 * IA Power — Oficina Agéntica EdTech
 * /api/procesar-lead.php
 *
 * Intermediario PHP entre el formulario propio de la landing y un Google Form OCULTO.
 * Devuelve siempre JSON. La URL real del Google Form y los entry.xxxxx NO se exponen al navegador.
 */

declare(strict_types=1);

require_once __DIR__ . '/security.php';

$config = require __DIR__ . '/config.php';

// CORS — same-origin por defecto en Dinahosting. Si sirves la API desde otro dominio, ajusta aquí.
header('Vary: Origin');

// Sólo POST
if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'POST') {
    json_response(['ok' => false, 'message' => 'Método no permitido.'], 405);
}

// Rate limit
if (!rate_limit_simple(5, 600)) {
    json_response(['ok' => false, 'message' => 'Has realizado demasiadas solicitudes. Inténtalo más tarde.'], 429);
}

// Honeypot — si está relleno, simulamos éxito silenciosamente (no damos pistas al bot)
if (!check_honeypot('website_url')) {
    json_response(['ok' => true, 'message' => 'Solicitud recibida correctamente'], 200);
}

// Sanitizar entradas
$input = [
    'nombre'            => clean($_POST['nombre']            ?? ''),
    'email'             => clean($_POST['email']             ?? ''),
    'telefono'          => clean($_POST['telefono']          ?? ''),
    'empresa'           => clean($_POST['empresa']           ?? ''),
    'cargo'             => clean($_POST['cargo']             ?? ''),
    'web'               => clean($_POST['web']               ?? ''),
    'tipo_organizacion' => clean($_POST['tipo_organizacion'] ?? ''),
    'tamano_equipo'     => clean($_POST['tamano_equipo']     ?? ''),
    'google_workspace'  => clean($_POST['google_workspace']  ?? ''),
    'area_prioritaria'  => clean($_POST['area_prioritaria']  ?? ''),
    'herramientas'      => clean($_POST['herramientas']      ?? ''),
    'mensaje'           => clean($_POST['mensaje']           ?? ''),
    'rgpd'              => !empty($_POST['rgpd']) ? 'Sí' : '',
    'utm_source'        => clean($_POST['utm_source']        ?? ''),
    'utm_medium'        => clean($_POST['utm_medium']        ?? ''),
    'utm_campaign'      => clean($_POST['utm_campaign']      ?? ''),
    'utm_content'       => clean($_POST['utm_content']       ?? ''),
    'utm_term'          => clean($_POST['utm_term']          ?? ''),
];

// Validación obligatoria
$required = ['nombre', 'email', 'empresa', 'tipo_organizacion', 'tamano_equipo', 'google_workspace', 'area_prioritaria'];
foreach ($required as $key) {
    if ($input[$key] === '') {
        json_response(['ok' => false, 'message' => 'Faltan datos obligatorios.'], 422);
    }
}
if ($input['rgpd'] !== 'Sí') {
    json_response(['ok' => false, 'message' => 'Debes aceptar la política de privacidad.'], 422);
}
if (!is_valid_email($input['email'])) {
    json_response(['ok' => false, 'message' => 'Email no válido.'], 422);
}

// Capturas contextuales
$ip = get_client_ip();
$ua = get_user_agent();

// Lead score
$score = calculate_lead_score($input);
$status = 'Nuevo';

// Construir payload para Google Forms
$entries = $config['entries'];
$payload = [];

$map = [
    'nombre', 'email', 'telefono', 'empresa', 'cargo', 'web',
    'tipo_organizacion', 'tamano_equipo', 'google_workspace',
    'area_prioritaria', 'herramientas', 'mensaje', 'rgpd',
    'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term',
];
foreach ($map as $field) {
    if (!empty($entries[$field]) && $entries[$field] !== 'entry.xxxxxxxxxx') {
        $payload[$entries[$field]] = $input[$field];
    }
}
if (!empty($entries['ip']) && $entries['ip'] !== 'entry.xxxxxxxxxx') {
    $payload[$entries['ip']] = $ip;
}
if (!empty($entries['user_agent']) && $entries['user_agent'] !== 'entry.xxxxxxxxxx') {
    $payload[$entries['user_agent']] = $ua;
}
if (!empty($entries['lead_score']) && $entries['lead_score'] !== 'entry.xxxxxxxxxx') {
    $payload[$entries['lead_score']] = (string) $score;
}
if (!empty($entries['lead_status']) && $entries['lead_status'] !== 'entry.xxxxxxxxxx') {
    $payload[$entries['lead_status']] = $status;
}

$ok = send_to_google_form($config['google_form_url'], $payload);

if (!$ok) {
    $resp = ['ok' => false, 'message' => 'No se pudo enviar la solicitud. Inténtalo de nuevo.'];
    if (!empty($config['debug'])) {
        $resp['debug'] = ['payload_keys' => array_keys($payload)];
    }
    json_response($resp, 502);
}

json_response(['ok' => true, 'message' => 'Solicitud recibida correctamente'], 200);


// ----- Helpers ------------------------------------------------------------

function calculate_lead_score(array $i): int
{
    $score = 0;
    if ($i['empresa'] !== '') $score += 10;
    if ($i['cargo']   !== '') $score += 10;
    if ($i['web']     !== '') $score += 10;

    if ($i['tamano_equipo'] === '51-200') $score += 20;
    if ($i['tamano_equipo'] === '200+')   $score += 30;

    if ($i['google_workspace'] === 'Sí, de forma avanzada')    $score += 20;
    if ($i['google_workspace'] === 'Sí, pero poco aprovechado') $score += 15;

    $hot = ['Captación de alumnos', 'Admisiones / matrícula', 'Retención / abandono', 'Reporting / datos'];
    if (in_array($i['area_prioritaria'], $hot, true)) $score += 15;

    if (mb_strlen($i['mensaje']) > 80) $score += 15;

    $premiumOrg = ['Universidad', 'Escuela de negocio', 'Plataforma EdTech'];
    if (in_array($i['tipo_organizacion'], $premiumOrg, true)) $score += 15;

    return $score;
}

function send_to_google_form(string $url, array $payload): bool
{
    if (!$url || strpos($url, 'FORM_ID') !== false) return false;

    $body = http_build_query($payload);

    // cURL primero
    if (function_exists('curl_init')) {
        $ch = curl_init($url);
        curl_setopt_array($ch, [
            CURLOPT_POST           => true,
            CURLOPT_POSTFIELDS     => $body,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_TIMEOUT        => 12,
            CURLOPT_CONNECTTIMEOUT => 6,
            CURLOPT_SSL_VERIFYPEER => true,
            CURLOPT_USERAGENT      => 'IAPower-OficinaAgenticaEdTech/1.0',
            CURLOPT_HTTPHEADER     => ['Content-Type: application/x-www-form-urlencoded'],
        ]);
        $resp = curl_exec($ch);
        $code = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
        // Google Forms responde 200 con HTML de confirmación
        if ($resp !== false && $code >= 200 && $code < 400) return true;
        // Algunos servidores devuelven 302; lo aceptamos también
        if ($code >= 200 && $code < 400) return true;
    }

    // Fallback: file_get_contents
    $context = stream_context_create([
        'http' => [
            'method'        => 'POST',
            'header'        => "Content-Type: application/x-www-form-urlencoded\r\nUser-Agent: IAPower-OficinaAgenticaEdTech/1.0\r\n",
            'content'       => $body,
            'timeout'       => 12,
            'ignore_errors' => true,
        ],
        'ssl' => ['verify_peer' => true, 'verify_peer_name' => true],
    ]);
    $result = @file_get_contents($url, false, $context);
    if ($result === false) return false;
    // $http_response_header existe tras la llamada
    $statusLine = $http_response_header[0] ?? '';
    if (preg_match('#HTTP/\S+\s+(\d{3})#', $statusLine, $m)) {
        $code = (int) $m[1];
        return $code >= 200 && $code < 400;
    }
    return true;
}
