<?php
	require('phtml/content/config.php');
	$content = $content_page;
	
	$content['name'] = 'single';

	if (isset($ajax)){
		$page = 'phtml/content/content-'.$_POST['page'].'.php';
		require($page); 
	}
	else
		require('phtml/skel.php'); 
	
?>