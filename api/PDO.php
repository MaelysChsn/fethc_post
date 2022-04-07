<?php

try{
   $db = new PDO("mysql:host=db;dbname=db;charset=utf8", "user", "password", array(PDO::ATTR_PERSISTENT => true));
   $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e){
    echo $e->getMessage();
}

?>
