<?php
include("mysqlConnection.php");

if($_SERVER['REQUEST_METHOD'] === 'POST') {

    $fav = json_decode(file_get_contents('php://input'), true);

    $login = $fav['login'];
    $name = $fav['name'];
    $public_repos = $fav['public_repos'];
    $followers = $fav['followers'];

    $insert = "INSERT INTO gitFav (login, name, public_repos, followers) VALUES ('$login', '$name', $public_repos, $followers)";
    mysqli_query($link, $insert);

}

?>