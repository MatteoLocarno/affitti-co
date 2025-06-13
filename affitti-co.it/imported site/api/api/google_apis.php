<?php
header('Content-Type: application/json');

// Inserisci la tua API key di Google Places
$apiKey = 'AIzaSyBlw3PM-qwAnfOmIx_5bFFm9V0CxaKJh0M';
$placeId = $_GET['place_id'] ?? '';
$address = $_GET['address'] ?? '';

if (!$placeId && !$address) {
    http_response_code(400);
    echo json_encode(['error' => true, 'message' => 'Manca place_id o address']);
    exit;
}

// Se non ho il place_id ma ho l'indirizzo, lo cerco
if (!$placeId && $address) {
    $findUrl = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=" . urlencode($address) . "&inputtype=textquery&fields=place_id&key=$apiKey";
    $findRes = json_decode(file_get_contents($findUrl), true);
    if (!isset($findRes['candidates'][0]['place_id'])) {
        http_response_code(404);
        echo json_encode(['error' => true, 'message' => 'Place ID non trovato']);
        exit;
    }
    $placeId = $findRes['candidates'][0]['place_id'];
}

$url = "https://maps.googleapis.com/maps/api/place/details/json?place_id=$placeId&fields=reviews,rating,user_ratings_total,name,formatted_address&key=$apiKey";

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);

echo $response;
echo $response;