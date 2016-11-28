<header class="header">

	<div class="scale-animation">

		<div class="titre <?= $content['transform'] ?>">
			<a href="<?php bloginfo('wpurl')?>">
				<div class="container-titre wow slideInLeft" data-wow-delay="1.2s">
					<div class="titre-text">
						<p>triathlon hochfelden</p>
					</div>
				</div>
				<div class="titre-logo wow slideInDown" data-wow-delay="2s">			
				</div>
			</a>
		</div>

		<nav class="nav-container wow slideInRight <?= $content['nav'] ?> " data-wow-delay="1.2s">
			<div >
			    <?php 
			        wp_nav_menu(array( 
			            "theme_location"=>"menu-principal",
			            "items_wrap"    =>'<ul><li class="col-btn menu-item menu-item-type-custom menu-item-object-custom "><span class="glyphicon glyphicon-menu-left"></span></li>%3$s</ul>'
			        ) ); 
			    ?>
			</div>
		</nav>
	</div>
	
    <div class="scrollDownArrow <?= $content['arrow'] ?>">
        <a href="#mesure" class="js-scrollTo wow slideInDown" data-wow-delay="2s" data-fade="false">
        	<span class="glyphicon glyphicon-menu-down" aria-hidden="true"></span>
        	<span class="glyphicon glyphicon-menu-down glyphicon-shadow " aria-hidden="true"></span>
        </a>
    </div>

</header>


