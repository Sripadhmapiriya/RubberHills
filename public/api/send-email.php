<?php
/**
 * Rubber Hills Kindergarten - Admission Enquiry Email Handler (PHP)
 * Designed for Apache / cPanel / GoDaddy Shared Hosting environments.
 */

header('Content-Type: application/json; charset=UTF-8');
header('X-Content-Type-Options: nosniff');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method Not Allowed']);
    exit;
}

// Read raw JSON body
$rawBody = file_get_contents('php://input');
if (!$rawBody || strlen($rawBody) > 15360) { // Max 15 KB
    http_response_code(400);
    echo json_encode(['error' => 'Invalid or oversized request body.']);
    exit;
}

$data = json_decode($rawBody, true);
if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON input.']);
    exit;
}

// 1. Honeypot check: If filled by a bot, silently return fake success
if (!empty($data['website'])) {
    echo json_encode(['success' => true, 'message' => 'Enquiry sent successfully.']);
    exit;
}

// 2. Fast-submission heuristic (< 1.5 seconds)
if (!empty($data['submitTime'])) {
    $submitTimeMs = floatval($data['submitTime']);
    $nowMs = microtime(true) * 1000;
    if ($nowMs - $submitTimeMs > 0 && ($nowMs - $submitTimeMs) < 1500) {
        echo json_encode(['success' => true, 'message' => 'Enquiry sent successfully.']);
        exit;
    }
}

// 3. Extract & sanitize input fields
$parentVisitorName = isset($data['parentVisitorName']) ? trim((string)$data['parentVisitorName']) : '';
$childName         = isset($data['childName']) ? trim((string)$data['childName']) : '';
$contactNumber     = isset($data['contactNumber']) ? trim((string)$data['contactNumber']) : '';
$interestedClass   = isset($data['interestedClass']) ? trim((string)$data['interestedClass']) : 'Nursery';
$message           = isset($data['message']) ? trim((string)$data['message']) : '';
$privacyConsent    = !empty($data['privacyConsent']);

// 4. Server-side validation
if (mb_strlen($parentVisitorName) < 2 || mb_strlen($parentVisitorName) > 100) {
    http_response_code(400);
    echo json_encode(['error' => 'Please provide a valid Parent / Visitor Name (2 to 100 characters).']);
    exit;
}

if (mb_strlen($childName) < 2 || mb_strlen($childName) > 100) {
    http_response_code(400);
    echo json_encode(['error' => 'Please provide a valid Child Name (2 to 100 characters).']);
    exit;
}

$digitsOnly = preg_replace('/\D/', '', $contactNumber);
if (strlen($digitsOnly) < 10 || strlen($digitsOnly) > 15) {
    http_response_code(400);
    echo json_encode(['error' => 'Please provide a valid phone number (10 to 15 digits).']);
    exit;
}

$allowedClasses = ['Creche', 'Nursery', 'LKG', 'UKG'];
if (!in_array($interestedClass, $allowedClasses, true)) {
    $interestedClass = 'Nursery';
}

if (mb_strlen($message) > 1000) {
    http_response_code(400);
    echo json_encode(['error' => 'Message cannot exceed 1000 characters.']);
    exit;
}

if (!$privacyConsent) {
    http_response_code(400);
    echo json_encode(['error' => 'Please confirm consent to the Privacy Policy.']);
    exit;
}

// 5. Compose Email Content
date_default_timezone_set('Asia/Kolkata');
$submissionDateTime = date('l, d F Y, h:i:s A') . ' IST';

$escParent   = htmlspecialchars($parentVisitorName, ENT_QUOTES, 'UTF-8');
$escChild    = htmlspecialchars($childName, ENT_QUOTES, 'UTF-8');
$escContact  = htmlspecialchars($contactNumber, ENT_QUOTES, 'UTF-8');
$escClass    = htmlspecialchars($interestedClass, ENT_QUOTES, 'UTF-8');
$escNotes    = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');
$escDateTime = htmlspecialchars($submissionDateTime, ENT_QUOTES, 'UTF-8');
$telDigits   = preg_replace('/[^\d+]/', '', $contactNumber);

// Detect domain for logo
$protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https://' : 'http://';
$host = isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : 'rubberhills.in';
$logoUrl = $protocol . $host . '/original/school-logo.jpg';

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
<head>
  <meta charset="utf-8">
  <title>New Admission Enquiry</title>
</head>
<body style="margin: 0; padding: 24px 12px; background-color: #F4F7EC; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif; color: #1E3A2B;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 580px; margin: 0 auto; background-color: #FFFFFF; border-radius: 18px; border: 2px solid #D0E0BE; overflow: hidden; box-shadow: 0 4px 16px rgba(30, 58, 43, 0.08);">
    <tr>
      <td style="padding: 32px 24px 20px 24px; text-align: center; background: linear-gradient(180deg, #DCEBCB 0%, #FFFFFF 100%);">
        <table role="presentation" cellpadding="0" cellspacing="0" style="margin: 0 auto 14px auto;">
          <tr>
            <td style="width: 88px; height: 88px; border-radius: 50%; border: 3px solid #F2B632; background-color: #FFFFFF; text-align: center; vertical-align: middle; overflow: hidden; padding: 0;">
              <img src="' . $logoUrl . '" alt="Rubber Hills Kindergarten Logo" width="88" height="88" style="display: block; width: 88px; height: 88px; border-radius: 50%; object-fit: cover; border: 0; margin: 0 auto;" />
            </td>
          </tr>
        </table>
        <h1 style="margin: 0; font-size: 24px; color: #1E3A2B; font-weight: 700; letter-spacing: -0.3px;">Rubber Hills Kindergarten</h1>
        <div style="display: inline-block; margin-top: 8px; padding: 4px 16px; background-color: #2F7D4F; color: #FFFFFF; border-radius: 999px; font-size: 13px; font-weight: 600; letter-spacing: 0.5px; text-transform: uppercase;">
          New Admission Enquiry
        </div>
      </td>
    </tr>
    <tr>
      <td style="padding: 10px 28px 24px 28px;">
        <p style="margin: 0 0 18px 0; font-size: 15px; color: #4F6656; line-height: 1.5;">
          A new admission enquiry has been submitted through the website. Here are the details:
        </p>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; border: 1px solid #D0E0BE; border-radius: 12px; overflow: hidden;">
          <tr style="background-color: #FBFDF6; border-bottom: 1px solid #D0E0BE;">
            <td style="padding: 14px 18px; font-weight: 600; font-size: 14px; color: #4F6656; width: 40%;">Parent / Visitor Name</td>
            <td style="padding: 14px 18px; font-weight: 700; font-size: 15px; color: #1E3A2B;">' . $escParent . '</td>
          </tr>
          <tr style="background-color: #FFFFFF; border-bottom: 1px solid #D0E0BE;">
            <td style="padding: 14px 18px; font-weight: 600; font-size: 14px; color: #4F6656;">Contact Number</td>
            <td style="padding: 14px 18px; font-weight: 700; font-size: 16px;">
              <a href="tel:' . $telDigits . '" style="color: #2F7D4F; text-decoration: none; font-weight: 700;">' . $escContact . '</a>
            </td>
          </tr>
          <tr style="background-color: #FBFDF6; border-bottom: 1px solid #D0E0BE;">
            <td style="padding: 14px 18px; font-weight: 600; font-size: 14px; color: #4F6656;">Child’s Name</td>
            <td style="padding: 14px 18px; font-weight: 700; font-size: 15px; color: #1E3A2B;">' . $escChild . '</td>
          </tr>
          <tr style="background-color: #FFFFFF; border-bottom: 1px solid #D0E0BE;">
            <td style="padding: 14px 18px; font-weight: 600; font-size: 14px; color: #4F6656;">Interested Program / Class</td>
            <td style="padding: 14px 18px; font-weight: 700; font-size: 15px; color: #2F7D4F;">' . $escClass . '</td>
          </tr>
          ' . $notesRow . '
          <tr style="background-color: #FFFFFF; border-bottom: 1px solid #D0E0BE;">
            <td style="padding: 14px 18px; font-weight: 600; font-size: 14px; color: #4F6656;">Privacy Consent</td>
            <td style="padding: 14px 18px; font-size: 14px; color: #2F7D4F; font-weight: 600;">Granted (User agreed to Privacy Policy)</td>
          </tr>
          <tr style="background-color: #FBFDF6;">
            <td style="padding: 14px 18px; font-weight: 600; font-size: 14px; color: #4F6656;">Submission Date & Time</td>
            <td style="padding: 14px 18px; font-size: 13px; color: #6E8575;">' . $escDateTime . '</td>
          </tr>
        </table>
        <div style="margin-top: 24px; text-align: center;">
          <a href="tel:' . $telDigits . '" style="display: inline-block; padding: 12px 28px; background-color: #2F7D4F; color: #FFFFFF; text-decoration: none; font-size: 15px; font-weight: 700; border-radius: 999px; box-shadow: 0 4px 12px rgba(47, 125, 79, 0.25);">
            Call Parent Now (' . $escContact . ')
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td style="padding: 18px 24px; text-align: center; background-color: #F4F7EC; border-top: 1px solid #D0E0BE;">
        <p style="margin: 0; font-size: 12px; color: #6E8575; line-height: 1.4;">
          This enquiry was sent automatically from the official website contact form.<br>
          Rubber Hills Kindergarten &bull; Manjaloomodu, Tamil Nadu 629151
        </p>
      </td>
    </tr>
  </table>
</body>
</html>';

$subject = 'New Admission Enquiry: ' . $parentVisitorName . ' (Child: ' . $childName . ' - ' . $interestedClass . ')';
$toEmail = 'rubberhillskindergarten@gmail.com';
$smtpUser = 'rubberhillskindergarten@gmail.com';
$smtpPass = 'sqcu jncd aill ckws'; // Gmail App Password

/**
 * Socket-based SMTP mail delivery function for Gmail SSL (Port 465)
 */
function sendViaGmailSmtp($to, $subject, $html, $user, $pass) {
    $timeout = 10;
    $socket = @fsockopen('ssl://smtp.gmail.com', 465, $errno, $errstr, $timeout);
    if (!$socket) {
        return false;
    }

    $read = function() use ($socket) {
        $data = '';
        while ($str = fgets($socket, 515)) {
            $data .= $str;
            if (substr($str, 3, 1) === ' ') break;
        }
        return $data;
    };

    $send = function($cmd) use ($socket) {
        fputs($socket, $cmd . "\r\n");
    };

    $res = $read();
    if (substr($res, 0, 3) !== '220') { fclose($socket); return false; }

    $send('EHLO localhost');
    $res = $read();

    $send('AUTH LOGIN');
    $res = $read();
    if (substr($res, 0, 3) !== '334') { fclose($socket); return false; }

    $send(base64_encode($user));
    $res = $read();
    if (substr($res, 0, 3) !== '334') { fclose($socket); return false; }

    $send(base64_encode($pass));
    $res = $read();
    if (substr($res, 0, 3) !== '235') { fclose($socket); return false; }

    $send("MAIL FROM:<$user>");
    $res = $read();
    if (substr($res, 0, 3) !== '250') { fclose($socket); return false; }

    $send("RCPT TO:<$to>");
    $res = $read();
    if (substr($res, 0, 3) !== '250') { fclose($socket); return false; }

    $send('DATA');
    $res = $read();
    if (substr($res, 0, 3) !== '354') { fclose($socket); return false; }

    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "From: Rubber Hills Kindergarten <$user>\r\n";
    $headers .= "Reply-To: $user\r\n";
    $headers .= "Subject: =?UTF-8?B?" . base64_encode($subject) . "?=\r\n";
    $headers .= "Date: " . date('r') . "\r\n";

    $messageData = $headers . "\r\n" . $html . "\r\n.";
    $send($messageData);
    $res = $read();

    $send('QUIT');
    fclose($socket);

    return (substr($res, 0, 3) === '250');
}

// Attempt 1: Direct Gmail SMTP SSL:465
$sent = sendViaGmailSmtp($toEmail, $subject, $htmlBody, $smtpUser, $smtpPass);

// Attempt 2: Fallback to PHP native mail() (GoDaddy local MTA)
if (!$sent) {
    $mailHeaders  = "MIME-Version: 1.0\r\n";
    $mailHeaders .= "Content-type: text/html; charset=UTF-8\r\n";
    $mailHeaders .= "From: Rubber Hills Kindergarten <" . $toEmail . ">\r\n";
    $mailHeaders .= "Reply-To: " . $toEmail . "\r\n";
    $mailHeaders .= "X-Mailer: PHP/" . phpversion();

    $sent = @mail($toEmail, $subject, $htmlBody, $mailHeaders);
}

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Your admission enquiry has been submitted successfully!']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Unable to send enquiry at this moment. Please call the school directly.']);
}
