<?php
$host = "localhost";
$user = "selbor28";

$db = "sanantodb";
$fn = $_POST['fname'];
$ln = $_POST['lname'];
$addr = $_POST['address'];
$city = $_POST['city'];
$st = $_POST['state'];
$zip = $_POST['zipcode'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
	die("connection failed." . $conn->connect_error);
	}
$sql = "INSERT INTO clients (fname, lname, address, city, state, zipcode, phone, email) VALUES ('$fn', '$ln', '$addr', '$city', '$st', '$zip', '$phone', '$email')";

if ($conn->query($sql) === TRUE) {
	echo "new record created";
	} else {
	echo "error" . $sql. "<br>" . $conn->error;
	}
$conn->close();
echo "Successful";
?>
