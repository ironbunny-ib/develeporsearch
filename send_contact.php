<?php

if(empty($_POST['age']) || empty($_POST['email'])){
    die('Please ensure age and email are provided.');
}

$subject=$_POST['age'];
$message=$_POST['email'];

$from = '12monkeys';

// Domain to show the email from
$fromEmail = '12m.in';

// Construct a header to send who the email is from
$header = 'From: ' . $from . '<' . $fromEmail . '>';


$to="sarthak.ib+123o@gmail.com";


if(!mail($to, $subject, $message, $header)){
    die('Error sending email.');
}else{
    die('Email sent!');
}
?>