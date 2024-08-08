<?php
$host = "localhost";
$user = "selbor28";
$db = "sanantodb";
$in = $_POST['invoiceNumber'];
$bn = $_POST['bname'];
$cn = $_POST['cname'];
$addr = $_POST['address'];
$city = $_POST['city'];
$st = $_POST['state'];
$zip = $_POST['zipcode'];
$parts = $_POST['part'];
$cost = $_POST['cost'];
$qty = $_POST['qty'];
$amt = $_POST['amount'];
$total = $_POST['total'];
$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
	die("connection failed." . $conn->connect_error);
	}
$sql = "INSERT INTO invoices (invoicenumber, bname, cname, address, city, state, zipcode, description, parts, cost, qty, amount, total) VALUES ('$in', '$bn', '$cn', '$addr', '$city', '$st', '$zip', '$parts', '$cost', '$qty', '$amt', '$total')";

if ($conn->query($sql) === TRUE) {
	echo "new record created";
	} else {
	echo "error" . $sql. "<br>" . $conn->error;
	}
$conn->close();
echo "Successful";
?>
