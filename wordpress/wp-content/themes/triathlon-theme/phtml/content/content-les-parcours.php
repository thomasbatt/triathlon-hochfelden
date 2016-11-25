<section id="page" class="content-block"><div class="container <?= $content['name'] ?>"><div class="row text-justify nouvelles"> <?php
		    // recupérer les articles de la catégorie d'id 2
		    $actus = get_posts(array(
		    	"category"=> 3,
		    	'posts_per_page'   => 4
		    ));
		    ?> <div class="col-xs-12"><h1><p>Les parcours</p></h1></div> <?php if (have_posts()) : ?> <?php 
                    foreach($actus as $post) :
			    	setup_postdata($post); 
                ?> <article class="col-xs-12 col-sm-6 col-md-3"><div class="post"><h2 class="post-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2><div class="post-content"> <?php the_excerpt(); ?> </div><p class="post-info">Le <?php the_date('Y-m-d', '<span class="orange">', '</span>'); ?> par <?php the_author(); ?>.</p></div></article> <?php 	endforeach;
                wp_reset_postdata(); ?> <?php else : ?> <p class="nothing">Aucune post à afficher !</p> <?php endif; ?> </div></div></section>