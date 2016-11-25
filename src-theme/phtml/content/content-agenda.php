<section id="page" class="content-block">
	<div class="container">
		<?php
		get_header();
		?>
		<div id="tribe-events-pg-template">
			<?php tribe_events_before_html(); ?>
			<?php tribe_get_view(); ?>
			<?php tribe_events_after_html(); ?>
		</div> <!-- #tribe-events-pg-template -->

	</div>
</section>