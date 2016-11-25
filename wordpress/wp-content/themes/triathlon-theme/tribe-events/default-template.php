<?php
/**
 * Default Events Template
 * This file is the basic wrapper template for all the views if 'Default Events Template'
 * is selected in Events -> Settings -> Template -> Events Template.
 *
 * Override this template in your own theme by creating a file at [your-theme]/tribe-events/default-template.php
 *
 * @package TribeEventsCalendar
 *
 */

if ( ! defined( 'ABSPATH' ) ) {
	die( '-1' );
}
$url_phtml = dirname( $_SERVER["SCRIPT_FILENAME"] ).'/wp-content/themes/triathlon-theme/phtml/';
require($url_phtml.'content/config.php');
$content = $content_page;
$content['name'] = 'agenda';
require($url_phtml.'skel.php');
?>