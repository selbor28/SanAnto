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
$sql = "SELECT * FROM clients WHERE fname LIKE '%$fName%'";

// Execute the query
$result = mysqli_query($conn, $sql);

// Check for errors
if (!$result) {
  die("Error: " . mysqli_error($conn));
}

// Build the search results HTML dynamically
$html = "";
if (mysqli_num_rows($result) > 0) {
  // Loop through each row and create HTML elements
  while ($row = mysqli_fetch_assoc($result)) {
    $html .= "<p id='pgrid'>" . $row["fname"] . " " . $row["lname"] . " " . $row["address"] . " " . $row["city"] . " " . $row["state"] . " " . $row["zipcode"] . " " . $row["phone"] . " " . $row["email"] . " "  . "<input type='button' id='del' value='Delete'>" . "</p>"; // Replace with your column name
  }
} else {
  $html = "<p>No results found.</p>";
}

// Close the connection
mysqli_close($conn);

// Send the HTML data back to the JavaScript code
echo $html;
