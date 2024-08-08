<?php

// Database connection details (replace with your own)
$host = "localhost";
$user = "selbor28";
$dbname = "sanantodb";

// Connect to the database
$conn = mysqli_connect($host, $user, $password, $dbname);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Get search term from AJAX request
$fName = $_POST["fName"];

// Prepare the SQL query with LIKE operator for partial matching
$sql = "SELECT * FROM clients WHERE bname LIKE '%$fName%'";

// Execute the query
$result = mysqli_query($conn, $sql);

// Check for errors
if (!$result) {
  die("Error: " . mysqli_error($conn));
}

$address = "";

if (mysqli_num_rows($result)>0) {
	$row = mysqli_fetch_assoc($result);
	$address = $row["address"];
	}


// Close the connection
mysqli_close($conn);

// Send the HTML data back to the JavaScript code
echo $address;
