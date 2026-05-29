<?php
/**
 * IA Power — utilidades de seguridad y helpers.
 */

if (!function_exists('json_response')) {
    function json_response(array $data, int $status = 200): void
    {
        http_response_code($status);
        header('Content-Type: application/json; charset=utf-8');
        header('X-Content-Type-Options: nosniff');
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
        exit;
    }
}

if (!function_exists('clean')) {
    function clean($value): string
    {
        if (is_array($value)) {
            $value = implode(', ', array_map('strval', $value));
        }
        $value = (string) $value;
        // Quita NULs y caracteres de control salvo \n \r \t
        $value = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $value) ?? '';
        $value = trim($value);
        // Limita longitud para evitar abusos
        if (function_exists('mb_substr')) {
            $value = mb_substr($value, 0, 5000);
        } else {
            $value = substr($value, 0, 5000);
        }
        return $value;
    }
}

if (!function_exists('is_valid_email')) {
    function is_valid_email(string $email): bool
    {
        $email = trim($email);
        if ($email === '' || strlen($email) > 254) return false;
        return (bool) filter_var($email, FILTER_VALIDATE_EMAIL);
    }
}

if (!function_exists('get_client_ip')) {
    function get_client_ip(): string
    {
        $candidates = [
            $_SERVER['HTTP_CF_CONNECTING_IP'] ?? null,
            $_SERVER['HTTP_X_FORWARDED_FOR'] ?? null,
            $_SERVER['HTTP_CLIENT_IP'] ?? null,
            $_SERVER['REMOTE_ADDR'] ?? null,
        ];
        foreach ($candidates as $c) {
            if (!$c) continue;
            $ip = trim(explode(',', $c)[0]);
            if (filter_var($ip, FILTER_VALIDATE_IP)) return $ip;
        }
        return '0.0.0.0';
    }
}

if (!function_exists('get_user_agent')) {
    function get_user_agent(): string
    {
        $ua = $_SERVER['HTTP_USER_AGENT'] ?? '';
        return substr((string) $ua, 0, 500);
    }
}

if (!function_exists('check_honeypot')) {
    /**
     * Si el campo honeypot (oculto) viene relleno => bot. Devuelve true si todo OK.
     */
    function check_honeypot(string $field = 'website_url'): bool
    {
        $val = $_POST[$field] ?? '';
        return trim((string) $val) === '';
    }
}

if (!function_exists('rate_limit_simple')) {
    /**
     * Rate limit basado en archivo temporal: máx $max envíos por IP cada $windowSeconds.
     * Devuelve true si está dentro del límite.
     */
    function rate_limit_simple(int $max = 5, int $windowSeconds = 600): bool
    {
        $ip = get_client_ip();
        $dir = sys_get_temp_dir() . DIRECTORY_SEPARATOR . 'iapower_ratelimit';
        if (!is_dir($dir)) {
            @mkdir($dir, 0700, true);
        }
        $file = $dir . DIRECTORY_SEPARATOR . md5($ip) . '.json';
        $now = time();
        $entries = [];
        if (is_file($file)) {
            $raw = @file_get_contents($file);
            $decoded = $raw ? json_decode($raw, true) : null;
            if (is_array($decoded)) $entries = $decoded;
        }
        $entries = array_values(array_filter($entries, fn($t) => is_int($t) && $t > $now - $windowSeconds));
        if (count($entries) >= $max) return false;
        $entries[] = $now;
        @file_put_contents($file, json_encode($entries), LOCK_EX);
        return true;
    }
}
