<?php
$host = "localhost";
$user = "selbor28";
$pass = "Theend#2056";
$db = "sanantodb";
$item = $_POST['item'];
$desc = $_POST['description'];
$qty = $_POST['quantity'];
$type = $_POST['type'];
$loc = $_POST['location'];
$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
	die("connection failed." . $conn->connect_error);
	}
$sql = "INSERT INTO inventory (item, description, quantity, type, location) VALUES ('$item', '$desc', '$qty', '$type', '$loc')";

if ($conn->query($sql) === TRUE) {
	echo "new record created";
	} else {
	echo "error" . $sql. "<br>" . $conn->error;
	}
$conn->close();
echo "Successful";
?>
