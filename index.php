<?php
if (file_exists("./wordpress/index.php")){
	$url = 'http://' . $_SERVER["HTTP_HOST"] . $_SERVER["REQUEST_URI"];
	header('Location: '.$url.'wordpress/index.php');
	exit;
}
else
<<<<<<< HEAD
	echo "Veuillez suivre les instructions du README.md";
=======
	echo "Veuillez telecharger Wordpress et l'installer dans la racine du depot";
>>>>>>> 1123a0cef45d45fb6007544d93df4d57e7736c36
?>