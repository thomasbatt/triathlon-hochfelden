<?php
/**
 * Month View Content Template
 * The content template for the month view of events. This template is also used for
 * the response that is returned on month view ajax requests.
 *
 * Override this template in your own theme by creating a file at [your-theme]/tribe-events/month/content.php
 *
 * @package TribeEventsCalendar
 *
 */

if ( ! defined( 'ABSPATH' ) ) {
	die( '-1' );
} ?> <div id="tribe-events-content" class="tribe-events-month"> <?php do_action( 'tribe_events_before_the_title' ) ?> <h2 class="tribe-events-page-title"><?php tribe_events_title() ?></h2> <?php do_action( 'tribe_events_after_the_title' ) ?>  <?php tribe_the_notices() ?>  <?php do_action( 'tribe_events_before_header' ) ?> <div id="tribe-events-header" <?php tribe_events_the_header_attributes() ?>> <?php tribe_get_template_part( 'month/nav' ); ?> </div> <?php do_action( 'tribe_events_after_header' ) ?>  <?php tribe_get_template_part( 'month/loop', 'grid' ) ?>  <?php do_action( 'tribe_events_before_footer' ) ?> <div id="tribe-events-footer"> <?php do_action( 'tribe_events_before_footer_nav' ); ?> <?php tribe_get_template_part( 'month/nav' ); ?> <?php do_action( 'tribe_events_after_footer_nav' ); ?> </div> <?php do_action( 'tribe_events_after_footer' ) ?> <?php tribe_get_template_part( 'month/mobile' ); ?> <?php tribe_get_template_part( 'month/tooltip' ); ?> </div>