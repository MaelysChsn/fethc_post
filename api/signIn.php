<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json');

// Create connection
include 'PDO.php';

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if($_POST){
	if(!empty($_POST['username']) && !empty($_POST['password'])){
		$username = $_POST['username'];
		$password = $_POST['password'];

		$check = "SELECT `username`, `password` FROM `user` WHERE  `username`='$username' AND `password`='$password'";
		$resultCheck = $db->query(resultCheck);
		$count = $result->rowCount();

		if($count){
			 echo json_encode(["sent" => 103, "message" => 'user existe déjà']);
		}else{
			$query = "INSERT INTO `user`(`username`, `password`) VALUES ('$username', '$password')";
			$result = $db->query($query);

			if ($result) {
				 echo json_encode(["sent" => true, "message" => $username]);
			} else {
				 echo json_encode(["sent" => 102, "message" => 'pas dajout de compte']);
			}
		}


	}else{
		  echo json_encode(["sent" => 101, "message" =>  'input vide']);
	}
}else{
	// tell the user about error
  echo json_encode(["sent" => 100, "message" =>  'error']);

}

?>
