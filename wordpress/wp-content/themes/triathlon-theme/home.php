<?php
	/*
	Template Name: My Home Page
	*/
	require('phtml/content/config.php');
	$content = $content_home;
	$content['name'] = 'home';
	require('phtml/skel.php'); 
?>