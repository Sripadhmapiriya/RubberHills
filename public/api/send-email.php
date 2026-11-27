<?php
/**
 * Rubber Hills Kindergarten - Admission Enquiry Email Handler (PHP)
 * Optimized for GoDaddy cPanel & 100% Gmail Inbox Delivery
 */

header('Content-Type: application/json; charset=UTF-8');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method Not Allowed']);
    exit;
}

$rawBody = file_get_contents('php://input');
if (!$rawBody || strlen($rawBody) > 15360) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid request.']);
    exit;
}

$data = json_decode($rawBody, true);
if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON input.']);
    exit;
}

// Honeypot check
if (!empty($data['website'])) {
    echo json_encode(['success' => true, 'message' => 'Enquiry sent successfully.']);
    exit;
}

// Extract & sanitize
$parentVisitorName = isset($data['parentVisitorName']) ? trim((string)$data['parentVisitorName']) : '';
$childName         = isset($data['childName']) ? trim((string)$data['childName']) : '';
$contactNumber     = isset($data['contactNumber']) ? trim((string)$data['contactNumber']) : '';
$interestedClass   = isset($data['interestedClass']) ? trim((string)$data['interestedClass']) : 'Nursery';
$message           = isset($data['message']) ? trim((string)$data['message']) : '';
$privacyConsent    = !empty($data['privacyConsent']);

if (mb_strlen($parentVisitorName) < 2 || mb_strlen($childName) < 2 || empty($contactNumber) || !$privacyConsent) {
    http_response_code(400);
    echo json_encode(['error' => 'Please fill in all required fields.']);
    exit;
}

date_default_timezone_set('Asia/Kolkata');
$submissionDateTime = date('l, d F Y, h:i:s A') . ' IST';

$escParent   = htmlspecialchars($parentVisitorName, ENT_QUOTES, 'UTF-8');
$escChild    = htmlspecialchars($childName, ENT_QUOTES, 'UTF-8');
$escContact  = htmlspecialchars($contactNumber, ENT_QUOTES, 'UTF-8');
$escClass    = htmlspecialchars($interestedClass, ENT_QUOTES, 'UTF-8');
$escNotes    = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');
$telDigits   = preg_replace('/[^\d+]/', '', $contactNumber);

$notesRow = '';
if (!empty($escNotes)) {
    $notesRow = '
    <tr style="background-color: #FBFDF6; border-bottom: 1px solid #D0E0BE;">
      <td style="padding: 14px 18px; font-weight: 600; font-size: 14px; color: #4F6656; vertical-align: top;">Message / Notes</td>
      <td style="padding: 14px 18px; font-size: 14px; color: #1E3A2B; line-height: 1.6; white-space: pre-wrap;">' . $escNotes . '</td>
    </tr>';
}

$htmlBody = '<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><title>New Admission Enquiry</title></head>
<body style="margin: 0; padding: 24px 12px; background-color: #F4F7EC; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, sans-serif; color: #1E3A2B;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 580px; margin: 0 auto; background-color: #FFFFFF; border-radius: 18px; border: 2px solid #D0E0BE; overflow: hidden;">
    <tr>
      <td style="padding: 28px 24px 16px 24px; text-align: center; background: #DCEBCB;">
        <h1 style="margin: 0; font-size: 22px; color: #1E3A2B;">Rubber Hills Kindergarten</h1>
        <div style="display: inline-block; margin-top: 6px; padding: 4px 14px; background-color: #2F7D4F; color: #FFFFFF; border-radius: 999px; font-size: 12px; font-weight: bold; text-transform: uppercase;">
          New Admission Enquiry
        </div>
      </td>
    </tr>
    <tr>
      <td style="padding: 20px 24px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; border: 1px solid #D0E0BE;">
          <tr style="background-color: #FBFDF6; border-bottom: 1px solid #D0E0BE;">
            <td style="padding: 12px 16px; font-weight: 600; font-size: 14px; color: #4F6656; width: 40%;">Parent / Visitor Name</td>
            <td style="padding: 12px 16px; font-weight: 700; font-size: 15px; color: #1E3A2B;">' . $escParent . '</td>
          </tr>
          <tr style="background-color: #FFFFFF; border-bottom: 1px solid #D0E0BE;">
            <td style="padding: 12px 16px; font-weight: 600; font-size: 14px; color: #4F6656;">Contact Number</td>
            <td style="padding: 12px 16px; font-weight: 700; font-size: 16px;">
              <a href="tel:' . $telDigits . '" style="color: #2F7D4F; text-decoration: none;">' . $escContact . '</a>
            </td>
          </tr>
          <tr style="background-color: #FBFDF6; border-bottom: 1px solid #D0E0BE;">
            <td style="padding: 12px 16px; font-weight: 600; font-size: 14px; color: #4F6656;">Child’s Name</td>
            <td style="padding: 12px 16px; font-weight: 700; font-size: 15px; color: #1E3A2B;">' . $escChild . '</td>
          </tr>
          <tr style="background-color: #FFFFFF; border-bottom: 1px solid #D0E0BE;">
            <td style="padding: 12px 16px; font-weight: 600; font-size: 14px; color: #4F6656;">Interested Program</td>
            <td style="padding: 12px 16px; font-weight: 700; font-size: 15px; color: #2F7D4F;">' . $escClass . '</td>
          </tr>
          ' . $notesRow . '
          <tr style="background-color: #FBFDF6;">
            <td style="padding: 12px 16px; font-weight: 600; font-size: 14px; color: #4F6656;">Submission Date & Time</td>
            <td style="padding: 12px 16px; font-size: 13px; color: #6E8575;">' . $submissionDateTime . '</td>
          </tr>
        </table>
        <div style="margin-top: 20px; text-align: center;">
          <a href="tel:' . $telDigits . '" style="display: inline-block; padding: 12px 24px; background-color: #2F7D4F; color: #FFFFFF; text-decoration: none; font-size: 15px; font-weight: bold; border-radius: 999px;">
            Call Parent (' . $escContact . ')
          </a>
        </div>
      </td>
    </tr>
  </table>
</body>
</html>';

$toEmail = 'rubberhillskindergarten@gmail.com';
$fromEmail = 'admissions@rubberhillsgroup.com';
$subject = 'New Admission Enquiry: ' . $parentVisitorName . ' (Child: ' . $childName . ' - ' . $interestedClass . ')';

$mailHeaders  = "MIME-Version: 1.0\r\n";
$mailHeaders .= "Content-Type: text/html; charset=UTF-8\r\n";
$mailHeaders .= "From: Rubber Hills Kindergarten <" . $fromEmail . ">\r\n";
$mailHeaders .= "Reply-To: " . $toEmail . "\r\n";
$mailHeaders .= "Return-Path: " . $fromEmail . "\r\n";
$mailHeaders .= "X-Mailer: PHP/" . phpversion();

// Send via GoDaddy sendmail with sender envelope
$sent = @mail($toEmail, $subject, $htmlBody, $mailHeaders, "-f " . $fromEmail);

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Your admission enquiry has been submitted successfully!']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Unable to send enquiry. Please call the school directly.']);
}
