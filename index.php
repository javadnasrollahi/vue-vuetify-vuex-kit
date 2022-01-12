<?php
// CORS policy
header('Access-Control-Allow-Origin: *');

// Hide All Errors:
error_reporting(0);
ini_set('display_errors', 0);

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "testHadi";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$res = array(
    "Code"     => -400 ,
    "Message"  => "خطا در عملیات",
    "Data"     => null,
    "Total"    => 0
);

$rest_json              = file_get_contents("php://input");
$_POST                  = json_decode($rest_json, true);
if(isset($_POST["sql"]) && strlen($_POST["sql"]) > 0 && isset($_POST["method"]) && strlen($_POST["method"]) > 0){
    $sql = $_POST["sql"];
    $result = $conn->query($sql);
    if($_POST["method"] == "select"){
        $result = $result->fetch_all(MYSQLI_ASSOC);
    }
    if ($conn->error) {
        $res["Message"] = "Error: " . $sql . "<br>" . $conn->error;
        echo json_encode($res);
        return;
    } else {
        $res["Message"] = "عملیات با موفقیت انجام شد!";
        $res["Code"]    = 200;
        $res["Data"]    = $result;
        echo json_encode($res);
        return;
    }
}
echo json_encode($res);
return;
$conn->close();
?>