<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json');

// Create connection
include 'PDO.php';

	$query = "SELECT posts.title,posts.date,posts.content,user.username  FROM `posts` INNER JOIN `user` ON posts.token = user.token ORDER BY `date` DESC";
	$result = $db->query($query);
	$row = $result->fetchAll();

	if ($result) {
		 echo json_encode(["sent" => true, "result" => $row]);
	}else {
	   echo json_encode(["sent" => false, "message" => 'post pas ajouté']);
 }
