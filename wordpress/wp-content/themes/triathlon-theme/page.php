<?php

	require('phtml/content/config.php');
	$content = $content_page;
	
	$uri_basename = basename($_SERVER["REQUEST_URI"]);
	$tmpl_page = ['nouvelles','trombinoscope','les-parcours','agenda'];
	
	if( in_array($uri_basename, $tmpl_page) )
		$content['name'] = $uri_basename;
	else
		$content['name'] = 'page';

	if ( isset($ajax) && in_array($_POST['page'], $tmpl_page) )
		$page = 'phtml/content/content-'.$_POST['page'].'.php';
	else
		$page = 'phtml/content/content-page.php';
	
	
	if (!isset($ajax))
		require('phtml/skel.php'); 
	else
		require($page); 

	
?>