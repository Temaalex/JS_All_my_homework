<?php

$connection = mysqli_connect('localhost','root', 'root');
$select_db = mysqli_select_db($connection, 'test-form');


$name = $_POST['name'];
$phone = $_POST['tel'];
$email = $_POST['email'];

$query = "INSERT INTO orders (name, phone, email) 
      VALUES('$name', '$phone', '$email')";

$result = mysqli_query($connection, $query);

// if($result) {
//   $smsg = "Все окей";
// } else {
//   $fmsg = "Все not окей";
// }

echo "1";

?>