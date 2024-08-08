<?php
$host = "localhost";
$user = "selbor28";
$db = "sanantodb";
$mysqli = new mysqli($host, $user, $pass, $db);

if ($mysqli->connect_error) {
	exit('Could not connect');
	}
$sql = "SELECT fname, lname, address, city, state, zipcode, phone, email FROM clients WHERE fname = ?";

$stmt = $mysqli->prepare($sql);
$stmt->bind_param("s", $_GET['q']);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($fname, $lname, $addr, $city, $state, $zip, $phone, $email);
$stmt->fetch();
$stmt->close();

echo "<table id='bTable'>";
echo "<tr>";
echo "<th>FirstName</th>";
echo "<th>LastName</th>";
echo "<th>Address</th>";
echo "<th>City</th>";
echo "<th>State</th>";
echo "<th>ZipCode</th>";
echo "<th>Phone</th>";
echo "<th>Email</th>";
echo "</tr>";
echo "<tr>";
echo "<td>" . $fname . "</td>";
echo "<td>" . $lname . "</td>";
echo "<td>" . $addr . "</td>";
echo "<td>" . $city . "</td>";
echo "<td>" . $state . "</td>";
echo "<td>" . $zip . "</td>";
echo "<td>" . $phone . "</td>";
echo "<td>" . $email . "</td>";
echo "</tr>";
echo "</table>";
?>
