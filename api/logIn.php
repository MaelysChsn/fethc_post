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

		$query = "SELECT `username`, `password` FROM `user` WHERE  `username`='$username' AND `password`='$password' ";
		$result = $db->query($query);
		$count = $result->rowCount();

		if($count){
			$query_token = "SELECT `token` FROM `user` WHERE `username`='$username' AND `password`='$password' ";
		 	$result_token = $db->query($query_token);
			$row = $result_token->fetchAll();
			if($result_token){
				echo json_encode(["sent" => true, "message" => 'user existe', "token" => $row[0]]);
			}
		}else{
		   echo json_encode(["sent" => 104, "message" =>'user existe pas']);
		}
	}else{
		echo json_encode(["sent" => 101, "message" =>  'input vide']);
	}
}else{
	// tell the user about error
  echo json_encode(["sent" => 100, "message" =>  'error post empty']);
}

?>
