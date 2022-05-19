<?php
include("./mysqlConnection.php");

$select= "SELECT * FROM `gitFav`";
$q = mysqli_query($link, $select);
$favs = array();
while($r = mysqli_fetch_assoc($q))
{
    $favs[] = $r;
}

print_r(json_encode($favs));

?>