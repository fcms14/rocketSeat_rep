<?php

$link = mysqli_connect('hostAddress', 'user', 'password!', 'database');
if (!$link) {
    die('Could not connect: ' . mysql_error());
	echo "	<script>
			alert('Erro de conexão. Tente novamente mais tarde.')
			window.history.back() </script>";
	echo "	<script>window.location.href='../index.html'</script>";
}

?>