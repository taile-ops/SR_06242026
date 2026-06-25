<?php
/**
 * Square Payment Handler — Skin Restoration Aesthetics
 * Place this file in your Hostinger public_html folder
 *
 * SETUP: Fill in your Square credentials below before going live.
 */

// ── SQUARE CREDENTIALS ──────────────────────────────────────────────────────
define('SQ_ACCESS_TOKEN', 'REPLACE_WITH_YOUR_SQUARE_ACCESS_TOKEN');
define('SQ_LOCATION_ID',  'REPLACE_WITH_YOUR_SQUARE_LOCATION_ID');
define('SQ_ENVIRONMENT',  'sandbox'); // Change to 'production' when ready to go live
// ─────────────────────────────────────────────────────────────────────────────

// CORS — allow requests from your domain
$allowed_origins = [
    'https://skinrestoration.cloud',
    'https://www.skinrestoration.cloud',
];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowed_origins)) {
    header("Access-Control-Allow-Origin: $origin");
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Parse request body
$body = json_decode(file_get_contents('php://input'), true);
if (!$body) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid request body']);
    exit;
}

$source_id   = $body['sourceId']   ?? '';
$amount      = $body['amount']     ?? 0;   // Amount in CENTS (e.g. $30.00 = 3000)
$currency    = $body['currency']   ?? 'USD';
$customer    = $body['customer']   ?? [];
$order_items = $body['items']      ?? [];

if (!$source_id || !$amount) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing sourceId or amount']);
    exit;
}

// Square API endpoint
$api_url = SQ_ENVIRONMENT === 'production'
    ? 'https://connect.squareup.com/v2/payments'
    : 'https://connect.squareupsandbox.com/v2/payments';

// Build idempotency key (prevents duplicate charges on retry)
$idempotency_key = uniqid('sra_', true);

// Build order note
$note = 'Skin Restoration Aesthetics order';
if (!empty($customer['name'])) {
    $note .= ' — ' . htmlspecialchars($customer['name']);
}

// Build payment payload
$payload = [
    'source_id'        => $source_id,
    'idempotency_key'  => $idempotency_key,
    'amount_money'     => [
        'amount'   => (int) $amount,
        'currency' => $currency,
    ],
    'location_id'      => SQ_LOCATION_ID,
    'note'             => $note,
    'buyer_email_address' => $customer['email'] ?? '',
];

// Add billing address if provided
if (!empty($customer['address'])) {
    $payload['billing_address'] = [
        'address_line_1'                  => $customer['address'] ?? '',
        'locality'                        => $customer['city']    ?? '',
        'administrative_district_level_1' => $customer['state']   ?? '',
        'postal_code'                     => $customer['zip']     ?? '',
        'country'                         => 'US',
    ];
}

// Call Square API
$ch = curl_init($api_url);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST           => true,
    CURLOPT_POSTFIELDS     => json_encode($payload),
    CURLOPT_HTTPHEADER     => [
        'Content-Type: application/json',
        'Authorization: Bearer ' . SQ_ACCESS_TOKEN,
        'Square-Version: 2024-01-18',
    ],
    CURLOPT_TIMEOUT        => 30,
]);

$response     = curl_exec($ch);
$http_code    = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curl_error   = curl_error($ch);
curl_close($ch);

if ($curl_error) {
    http_response_code(500);
    echo json_encode(['error' => 'Network error: ' . $curl_error]);
    exit;
}

$result = json_decode($response, true);

if ($http_code === 200 && isset($result['payment'])) {
    // Success
    echo json_encode([
        'success'    => true,
        'payment_id' => $result['payment']['id'],
        'status'     => $result['payment']['status'],
        'amount'     => $result['payment']['amount_money']['amount'],
    ]);
} else {
    // Square returned an error
    $error_msg = $result['errors'][0]['detail'] ?? 'Payment failed';
    http_response_code(402);
    echo json_encode([
        'success' => false,
        'error'   => $error_msg,
    ]);
}
