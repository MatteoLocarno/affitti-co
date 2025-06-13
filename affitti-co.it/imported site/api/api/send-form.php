<?php
header('Content-Type: application/json');
$to = 'info@affitti-co.it';
$form_types = [
    'richiesta_casa' => [
        'subject' => 'Richiesta Casa dal sito',
        'to' => $to
    ],
    'proprietario' => [
        'subject' => 'Proposta Immobile dal sito',
        'to' => $to
    ],
    'consulenza_legale' => [
        'subject' => 'Richiesta Consulenza Legale dal sito',
        'to' => $to
    ],
    'certificazione_energetica' => [
        'subject' => 'Richiesta Certificazione Energetica dal sito',
        'to' => $to
    ],
];
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $type = $data['type'] ?? '';
    if (!isset($form_types[$type])) {
        http_response_code(400);
        echo json_encode(['error' => true, 'message' => 'Tipo form non valido']);
        exit;
    }
    $subject = $form_types[$type]['subject'];
    $dest = $form_types[$type]['to'];
    $message = "Nuova richiesta dal sito Affitti & Co\n\n";
    foreach ($data as $key => $value) {
        if ($key === 'type') continue;
        $message .= ucfirst($key) . ": " . $value . "\n";
    }
    $headers = "From: sito@affitti-co.it\r\n";
    if (!empty($data['email'])) {
        $headers .= "Reply-To: " . $data['email'] . "\r\n";
    }
    $ok = mail($dest, $subject, $message, $headers);
    echo json_encode(['success' => $ok]);
    exit;
}
http_response_code(405);
echo json_encode(['error' => true, 'message' => 'Metodo non consentito']); 