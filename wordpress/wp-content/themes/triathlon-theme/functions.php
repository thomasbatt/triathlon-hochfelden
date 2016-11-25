<?php
	register_nav_menu("menu-principal", "Mon menu principal");
	register_nav_menu("menu-footer", "Le menu du footer");
	add_theme_support( 'post-thumbnails' );

	function page_content() {
		$GLOBALS['wp_query'] = new WP_Query( ['pagename' => $_POST['page']] );
		$ajax = true;
		$content['name'] = $_POST['page'];
		include(locate_template('page.php'));
		die();
	}
	add_action( 'wp_ajax_page_content', 'page_content' );
	add_action( 'wp_ajax_nopriv_page_content', 'page_content' );

	// function wp_load_scripts() {
	 
	// 	wp_enqueue_script('pw-script', get_stylesheet_directory_uri().'/js/websitee.min.js');
	// 	wp_localize_script('pw-script', 'pw_script_vars', array(
	// 			'alert' => __('Hey! You have clicked the button!', 'pippin')
	// 		)
	// 	);
	 
	// }
	// add_action('wp_enqueue_scripts', 'wp_load_scripts');
?>