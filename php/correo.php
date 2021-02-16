<?php 

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$consulta = $_POST['consulta'];

$destinatario = "gonzalomanoukian@hotmail.com";
$asunto = "Consulta desde la Web - Consultora BYH";

$mensaje = "De: $nombre \n";
$mensaje .= "Email: $email \n";
$mensaje = "Consulta: $Consulta";

mail($destinatario, $asunto, $mensaje);
echo "<script> alert('Gracias por su consutla. Le responderemos a la brevedad')</script>"
header('Location: index.html');

?>