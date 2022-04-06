<?php
$servername = "localhost";
$username = "user";
$password = "password";
$database= "db";

// Create connection
$db = mysqli_connect($servername, $username, $password, $database);

// Check connection
if ($db->connect_error) {
  die("Connection failed: " . $db->connect_error);
}
echo "Connected successfully";
?>
