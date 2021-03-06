<section id="page" class="content-block">
	<div class="container <?= $content['name'] ?>">
  		<div class="row text-justify">
            <?php if (have_posts()) : ?>
                <?php 
                    while (have_posts()) : 
                        the_post(); 
                ?>
                      
                    <article class="col-xs-12 col-sm-3">  
                        <div class="post">
                            <h2 class="post-title">
                                <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                            </h2>
                            <div class="post-content">
                                <?php the_excerpt(); ?>
                            </div>
                            <p class="post-info">
                                Posté le <?php the_date(); ?> dans <?php the_category(', '); ?> par <?php the_author(); ?>.
                            </p>

                            <a href="<?php the_permalink() ?>">Lire la suite</a>
                        </div>
                    </article>
                <?php endwhile; ?>
            <?php else : ?>
                <p class="nothing">
                    Aucune post à afficher !
                </p>
            <?php endif; ?>
		</div>

  	</div>
</section>