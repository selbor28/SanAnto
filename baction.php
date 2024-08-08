<?php
$host = "localhost";
$user = "selbor28";
$db = "sanantodb";
$bn = $_POST['bname'];
$cn = $_POST['cname'];
$addr = $_POST['address'];
$city = $_POST['city'];
$st = $_POST['state'];
$zip = $_POST['zipcode'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$website = $_POST['website'];
$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
	die("connection failed." . $conn->connect_error);
	}
$sql = "INSERT INTO bclients (bname, cname, address, city, state, zipcode, description, phone, email, website) VALUES ('$bn', '$cn', '$addr', '$city', '$st', '$zip', '$phone', '$email', 'website')";

if ($conn->query($sql) === TRUE) {
	echo "new record created";
	} else {
	echo "error" . $sql. "<br>" . $conn->error;
	}
$conn->close();
echo "Successful";
?>
