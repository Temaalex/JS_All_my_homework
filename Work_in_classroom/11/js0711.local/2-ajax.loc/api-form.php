<?php

$email = trim($_POST['email']);
$phone = trim($_POST['phone']);
$name = trim($_POST['name']);
$time = date('Y-m-d H:i:s');

if ($email == '' || $phone == '' || $name  == '') {
  echo "Заполните все поля!";
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  echo "Адрес почты не корректный";
} else {
  file_put_contents('mails.txt',"$time $email $phone $name \n", FILE_APPEND);
  echo 'Ваши данные отправлены успешно!';
}