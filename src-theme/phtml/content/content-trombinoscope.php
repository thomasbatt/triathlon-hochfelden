<section id="page" class="content-block">
	<div class="container <?= $content['name'] ?>">
  		<div class="row text-justify">
			
			<?php
		    $actus = get_posts(array(
		    	"category"=> 4,
		    	'posts_per_page'   => 30
		    ));
		    ?>
			
			    <div class="col-xs-12">
		            <h1>
		                <p>Trombinoscope</p>
		            </h1>
			    </div>
			<?php if (have_posts()) : ?>
                <?php 
                    foreach($actus as $post) :
			    	setup_postdata($post); 
                ?>
                      
                <article class="col-xs-6 col-sm-3 col-md-2">  
                    <div class="post">
                    	<div class="img-wrapper">
                    		<a href="<?php the_permalink(); ?>"><?php the_post_thumbnail('thumbnail'); ?></a>
                        </div>
                        <h2 class="post-title">
                            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                        </h2>
                        <div class="post-content">
                            <?php the_excerpt(); ?>
                        </div>
                      </div>
                </article>
                <?php 	endforeach;
                wp_reset_postdata(); ?>

            <?php else : ?>
                <p class="nothing">
                    Aucune post à afficher !
                </p>
            <?php endif; ?>
		</div>

  	</div>
</section>