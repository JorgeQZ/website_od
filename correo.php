<?php

$nombre = $_POST['nombre_'];
$correo = $_POST['correo_'];
$mensaje = $_POST['mensaje_'];
$emailList = "jorgequezada@akevia.mx";

$to      = 'byronguevara@akevia.mx';
$subject = 'Nuevo correo de Abogados';
$message = 'Nombre: '.$nombre. "\r\n" .'Correo: '.$correo. "\r\n" .'Mensaje: '.$mensaje;
$headers = 'From:'.$correo. "\r\n" .
    'Bcc: jorgequezada@akevia.mx' . "\r\n".
    'Reply-To:'.$correo."\r\n" .
    'X-Mailer: PHP/' . phpversion();

    if(mail($to, $subject, $message, $headers)){
        return "Exito";
    }

?>