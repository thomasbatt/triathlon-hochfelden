<footer class="footer <?= $content['bg-footer'] ?>">
	<div class="footer-content">
		<div class="footer-top" style="">
			<div class="img-mountain">
				<img/>
			</div>
		</div>
		<div class="footer-bottom">
		    <div class="container">
			    <div class="row">
			      	<div class="col-xs-12 col-md-3 wow fadeInUp" data-wow-delay="0.1s">
			         	<div class="fb-page" data-href="https://www.facebook.com/hochfeldentriathlon/" data-width="220" data-height="130" data-hide-cover="false" data-show-facepile="true" data-show-posts="false">
			         		<div class="fb-xfbml-parse-ignore">
				         		<blockquote cite="https://www.facebook.com/hochfeldentriathlon/">
				         			<a href="https://www.facebook.com/hochfeldentriathlon/"></a>
				         		</blockquote>
				         		
			      			</div>
			    		</div>
		    		</div>
				    <div class="col-md-9 ">
						<ul class="row">
							<div  class="col-xs-6 col-md-3 wow fadeInUp" data-wow-delay="0.3s"><h4 >Le Club</h4>
								<ul class="sub-menu">
									<li><a href='<?php echo site_url(); ?>/index.php/edito'>EDITO</a></li>
									<li><a href='<?php echo site_url(); ?>/index.php/nouvelles'>L'actualité</a></li>
									<li><a href='<?php echo site_url(); ?>/index.php/partenaires'>Partenaires</a></li>
								</ul>
							</div>
							<div  class="col-xs-6 col-md-3 wow fadeInUp" data-wow-delay="0.5s"><h4 >Adhésion</h4>
								<ul class="sub-menu">
									<li><a href='<?php echo site_url(); ?>/index.php/licence'>Licence</a></li>
									<li><a href='<?php echo site_url(); ?>/index.php/trombinoscope'>Trombinoscope</a></li>
									<li><a href='<?php echo site_url(); ?>/index.php/liste-des-epreuves'>Liste d'épreuves</a></li>
								</ul>
							</div>
							<div  class="col-xs-6 col-md-3 wow fadeInUp" data-wow-delay="0.3s"><h4 >Entrainement</h4>
								<ul class="sub-menu">
									<li><a href='<?php echo site_url(); ?>/index.php/adultes'>Adultes</a></li>
									<li><a href='<?php echo site_url(); ?>/index.php/Jeunes'>Jeunes</a></li>
									<li><a href='<?php echo site_url(); ?>/index.php/les-parcours'>Les parcours</a></li>
								</ul>
							</div>
							<div  class="col-xs-6 col-md-3 wow fadeInUp" data-wow-delay="0.1s"><h4 >Contact</h4>
								<ul class="sub-menu">
									<li><a href='<?php echo site_url(); ?>/index.php/mentions-legales'>Mentions légales</a></li>
									<li><a href='<?php echo site_url(); ?>/index.php/nous-contacter'>Nous contacter</a></li>
									<li><a href='<?php echo site_url(); ?>/wp-login.php'>Administrateur</a></li>
								</ul>
							</div>
						</ul>
					</div>
				</div>
				<div class="legal">© 2016 - <?php bloginfo('name'); ?> - Website : 
					<a href="http://thomasbatt.fr/" target="_blank">thomas BATT</a>
				</div>
			</div>
		</div>

	</div>
</footer>

<div class="wp-footer">
	<?php wp_footer(); ?>
</div>
