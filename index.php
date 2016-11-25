<?php
if (file_exists("./wordpress/index.php")){
	$url = 'http://' . $_SERVER["HTTP_HOST"] . $_SERVER["REQUEST_URI"];
	header('Location: '.$url.'wordpress/index.php');
	exit;
}
else
	echo "Veuillez telecharger Wordpress et l'installer dans la racine du depot";
?>