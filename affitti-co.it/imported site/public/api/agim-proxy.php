<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// --- CONFIGURAZIONE ---
define('AGIM_API_USER',    'rentwork');
define('AGIM_API_PWD',     'SmIZ(J$XX(uGXMRa');
define('AGIM_API_KEY',     '235384103bc8a1653c67f28bf8cb704f');
define('AGIM_API_BASE_URL','https://api.agimonline.com/v1/');

// Configurazione CORS
$allowed_origins = [
    'http://localhost:3000',
    'https://www.affitti-co.it',
    'https://affitti-co.it'
];

$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';

if (in_array($origin, $allowed_origins)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Access-Control-Allow-Credentials: true');
}

// Se è una richiesta OPTIONS (preflight), termina qui
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// --- FUNZIONE PRINCIPALE ---
function agim_request(string $context, string $action, array $params = [], string $method = 'POST'): array {
    $url = rtrim(AGIM_API_BASE_URL, '/') . '/' . trim($context, '/') . '/' . trim($action, '/');
    $headers = [
        'X-Api-User: ' . AGIM_API_USER,
        'X-Api-Pwd: ' . AGIM_API_PWD,
        'X-Api-Key: ' . AGIM_API_KEY,
        'X-Api-Lang: it',
        'Content-Type: application/json'
    ];

    $c = curl_init();
    curl_setopt($c, CURLOPT_URL, $url);
    curl_setopt($c, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($c, CURLOPT_TIMEOUT, 30);
    curl_setopt($c, CURLOPT_RETURNTRANSFER, true);

    if (strtoupper($method) === 'POST') {
        curl_setopt($c, CURLOPT_POST, true);
        curl_setopt($c, CURLOPT_POSTFIELDS, json_encode($params));
    } else {
        curl_setopt($c, CURLOPT_HTTPGET, true);
    }

    // Solo per debug, puoi togliere in produzione
    curl_setopt($c, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($c, CURLOPT_SSL_VERIFYHOST, false);

    $response = curl_exec($c);
    $http_code = curl_getinfo($c, CURLINFO_HTTP_CODE);
    $curl_error = curl_error($c);
    // Logga la risposta completa in un file separato
    file_put_contents(__DIR__ . '/debug_agim_full_response.txt', $response . "\n\n", FILE_APPEND);
    curl_close($c);

    // Log di debug
    file_put_contents(__DIR__ . '/debug_agim.txt', "URL: $url\nHeaders: " . print_r($headers, true) . "\nParams: " . json_encode($params) . "\nRisposta: $response\nHTTP_CODE: $http_code\n\n", FILE_APPEND);

    if ($curl_error) {
        error_log("Errore CURL: " . $curl_error);
        return [];
    }

    if (empty($response)) {
        return [];
    }

    $data = json_decode($response, true);
    if (json_last_error() !== JSON_ERROR_NONE) {
        error_log("Errore nel parsing JSON: " . json_last_error_msg() . " - Response: " . substr($response, 0, 500));
        return [];
    }

    if ($http_code !== 200) {
        error_log("API HTTP error: status code $http_code - " . ($data['response']['error'] ?? 'Errore sconosciuto'));
        return [];
    }

    return $data;
}

// --- FALLBACK ---
function fallback_provinces() {
    return [
        ['id' => 'VA', 'nome' => 'Varese'],
        ['id' => 'MI', 'nome' => 'Milano'],
        ['id' => 'CO', 'nome' => 'Como']
    ];
}
function fallback_categories() {
    return [
        ['id' => 'appartamento', 'nome' => 'Appartamento'],
        ['id' => 'villa', 'nome' => 'Villa'],
        ['id' => 'negozio', 'nome' => 'Negozio/Ufficio']
    ];
}

// --- GESTIONE RICHIESTE ---
header('Content-Type: application/json');

try {
    $action = $_GET['action'] ?? '';
    $context = $_GET['context'] ?? '';
    $params = json_decode(file_get_contents('php://input'), true) ?? [];

    switch ($action) {
        case 'list':
            $result = agim_request('properties', 'list', $params);
            echo json_encode($result);
            break;

        case 'search':
            $result = agim_request('properties', 'search', $params);
            echo json_encode($result);
            break;

        case 'get':
            $id = $_GET['id'] ?? '';
            if (empty($id)) throw new Exception("ID mancante");
            $result = agim_request('properties', "get/$id", [], 'GET');
            echo json_encode($result);
            break;

        case 'provinces':
            $result = agim_request('location', 'provinces');
            if (empty($result) || !isset($result['provinces'])) {
                $result = ['provinces' => fallback_provinces()];
            }
            echo json_encode($result);
            break;

        case 'categories':
            $result = agim_request('properties', 'categories');
            if (empty($result) || !isset($result['categories'])) {
                $result = ['categories' => fallback_categories()];
            }
            echo json_encode($result);
            break;

        default:
            throw new Exception("Azione non valida");
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'error' => true,
        'message' => $e->getMessage()
    ]);
}