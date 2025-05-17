<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "bakirmuhammet43@gmail.com";   // Buraya kendi Gmail'ini yaz
    $subject = "İletişim Formu Mesajı";
    $message = "İsim: " . $_POST['name'] . "\n" .
               "Email: " . $_POST['email'] . "\n" .
               "Mesaj: " . $_POST['message'];
    $headers = "From: " . $_POST['email'];

    if (mail($to, $subject, $message, $headers)) {
        echo "Mesaj gönderildi!";
    } else {
        echo "Mesaj gönderilemedi.";
    }
}
?>
