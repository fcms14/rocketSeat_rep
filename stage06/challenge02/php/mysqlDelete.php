<?php
include("mysqlConnection.php");


if($_SERVER['REQUEST_METHOD'] === 'POST') {

    $login = json_decode(file_get_contents('php://input'), true);

    $delete = "DELETE FROM gitFav WHERE login='$login'";
    mysqli_query($link, $delete);

}

?>