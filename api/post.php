<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json');

// Create connection
include 'PDO.php';

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if($_POST){
	if(!empty($_POST['token']) && !empty($_POST['title']) && !empty($_POST['content'])){

		$token = $_POST['token'];
		$title = $_POST['title'];
		$content = $_POST['content'];

		$query = "INSERT INTO `posts`(`token`, `title`, `content`) VALUES ('$token','$title','$content')";
		$result = $db->query($query);

		if ($result) {
			 echo json_encode(["sent" => true, "message" => 'post ajouté']);
		} else {
		   echo json_encode(["sent" => 105, "message" => 'post pas ajouté']);
		}
	}else{
		echo json_encode(["sent" => 101, "message" => 'input vides']);
	}

}else{
	// tell the user about error
  echo json_encode(["sent" => 100, "message" =>  'error post empty']);

}
