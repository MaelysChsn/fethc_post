<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json');

// Create connection
include 'PDO.php';

// $rest_json = file_get_contents("php://input");
// $_GET = json_decode($rest_json, true);

// if($_GET){

	$query = "SELECT * FROM `posts` ORDER BY `date` DESC";
	$result = $db->query($query);
	$row = $result->fetchAll();

	if ($result) {
		 echo json_encode(["sent" => true, "result" => $row]);
	}else {
	   echo json_encode(["sent" => false, "message" => 'post pas ajouté']);
 }
// }else{
// 	// tell the user about error
//   echo json_encode(["sent" => false, "message" =>  'error post empty']);
//
// }
