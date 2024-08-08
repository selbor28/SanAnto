<?php
$host = "localhost";
$user = "selbor28";
$db = "sanantodb";
$mysqli = new mysqli($host, $user, $pass, $db);

if ($mysqli->connect_error) {
	exit('Could not connect');
	}
$sql = "SELECT bname, cname, address, city, state, zipcode, phone, email, website FROM bclients WHERE bname = ?";

$stmt = $mysqli->prepare($sql);
$stmt->bind_param("s", $_GET['q']);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($bname, $cname, $addr, $city, $state, $zip, $phone, $email, $website);
$stmt->fetch();
$stmt->close();

echo "<table id='bTable'>";
echo "<tr>";
echo "<th>BusinessName</th>";
echo "<th>CustomerName</th>";
echo "<th>Address</th>";
echo "<th>City</th>";
echo "<th>State</th>";
echo "<th>ZipCode</th>";
echo "<th>Phone</th>";
echo "<th>Email</th>";
echo "<th>Website</th>";
echo "</tr>";
echo "<tr>";
echo "<td>" . $bname . "</td>";
echo "<td>" . $cname . "</td>";
echo "<td>" . $addr . "</td>";
echo "<td>" . $city . "</td>";
echo "<td>" . $state . "</td>";
echo "<td>" . $zip . "</td>";
echo "<td>" . $phone . "</td>";
echo "<td>" . $email . "</td>";
echo "<td>" . $website . "</td>";
echo "</tr>";
echo "</table>";
?>
