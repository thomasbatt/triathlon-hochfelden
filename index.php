<?php
if (file_exists("./wordpress/index.php")){
	$url = 'http://' . $_SERVER["HTTP_HOST"] . $_SERVER["REQUEST_URI"];
	header('Location: '.$url.'wordpress/index.php');
	exit;
}
else
	echo "Veuillez suivre les instructions du README.md";
?>