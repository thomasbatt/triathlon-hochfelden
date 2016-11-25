<?php
	require('phtml/content/config.php');
	$content = $content_page;
	
	$content['name'] = 'single';

	if ( isset($ajax) )
		$page = 'phtml/content/content-'.$_POST['page'].'.php';
	else
		$page = 'phtml/content/content-single.php';
	
	
	if (!isset($ajax))
		require('phtml/skel.php'); 
	else
		require($page); 
	
?>