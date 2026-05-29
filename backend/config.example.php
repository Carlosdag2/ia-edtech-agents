<?php
/**
 * IA Power — Oficina Agéntica EdTech
 * Configuración del endpoint /api/procesar-lead.php
 *
 * COPIA este archivo a config.php y rellena con los datos REALES del Google Form.
 * NUNCA subas las claves o IDs reales a un repositorio público.
 *
 * Cómo obtener cada valor: ver /docs/CONFIGURACION-GOOGLE-FORMS.md
 */

return [
    // URL "formResponse" del Google Form (ver docs)
    'google_form_url' => 'https://docs.google.com/forms/d/e/FORM_ID/formResponse',

    // Enlace a tu calendario público para reservar reunión (Google Calendar / Calendly...)
    'calendar_url' => 'https://calendar.google.com/',

    // Si true, devuelve detalles técnicos en la respuesta JSON. Dejar en false en producción.
    'debug' => false,

    // IDs entry.xxxxxxxxxx de cada campo del Google Form.
    // Inspecciona el formulario (botón derecho → ver código fuente) o usa la extensión recomendada.
    'entries' => [
        'nombre'             => 'entry.xxxxxxxxxx',
        'email'              => 'entry.xxxxxxxxxx',
        'telefono'           => 'entry.xxxxxxxxxx',
        'empresa'            => 'entry.xxxxxxxxxx',
        'cargo'              => 'entry.xxxxxxxxxx',
        'web'                => 'entry.xxxxxxxxxx',
        'tipo_organizacion'  => 'entry.xxxxxxxxxx',
        'tamano_equipo'      => 'entry.xxxxxxxxxx',
        'google_workspace'   => 'entry.xxxxxxxxxx',
        'area_prioritaria'   => 'entry.xxxxxxxxxx',
        'herramientas'       => 'entry.xxxxxxxxxx',
        'mensaje'            => 'entry.xxxxxxxxxx',
        'rgpd'               => 'entry.xxxxxxxxxx',
        'utm_source'         => 'entry.xxxxxxxxxx',
        'utm_medium'         => 'entry.xxxxxxxxxx',
        'utm_campaign'       => 'entry.xxxxxxxxxx',
        'utm_content'        => 'entry.xxxxxxxxxx',
        'utm_term'           => 'entry.xxxxxxxxxx',
        'ip'                 => 'entry.xxxxxxxxxx',
        'user_agent'         => 'entry.xxxxxxxxxx',
        'lead_score'         => 'entry.xxxxxxxxxx',
        'lead_status'        => 'entry.xxxxxxxxxx',
    ],
];
