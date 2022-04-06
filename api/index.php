<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json');

require 'connection.php';

$_POST = json_decode(file_get_contents('php://input'));

if($_POST['submit']){

    $username = $_POST['fusername'];
    $password = $_POST['fpassword'];

		$query = "INSERT INTO `user` (id, username, password) VALUES ($username, $password)";
		$result = mysqli_query($conn, $query);

		if ($result) {
			 echo json_encode(["sent" => 1, ]);
		} else {
		   echo json_encode(["sent" => 0, ]);
		}
}else{
	// tell the user about error
  echo json_encode(["sent" => false, "message" => "Something went wrong"]);
}

?>
