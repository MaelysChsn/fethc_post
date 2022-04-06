<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json');

require 'connection.php';

$_POST = json_decode(file_get_contents('php://input'));

if(!empty($_POST)){

    $username = $_POST['fusername'];
    $password = $_POST['fpassword'];

		$query = "INSERT INTO `user` (id, username, password) VALUES ($username, $password)";
		$result = mysqli_query($conn, $query);

		if ($result) {
			 echo json_encode(["sent" => true, "message" => "Everything good"]);
		} else {
		   echo json_encode(["sent" => false, "message" => "Something went wrong to send"]);
		}
}else{
	// tell the user about error
  echo json_encode(["sent" => false, "message" => "Something went wrong"]);
}

?>
