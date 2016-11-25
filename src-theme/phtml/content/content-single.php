<section id="page" class="content-block">
	<div class="container <?= $content['name'] ?>">
  		<div class="row text-justify">

			    <div class="col-md-12">
			    <?php if (have_posts()) : ?>
			        <?php while (have_posts()) : the_post(); ?>
			            <div class="post">
			                <h2 class="post-title">
			                    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
			                </h2>
			                <div class="post-content">
			                    <?php the_content(); ?>
			                </div>
			                <?php the_post_thumbnail('large'); ?>
			                <p class="post-info">
			                    Posté le <?php the_date(); ?> dans <?php the_category(', '); ?> par <?php the_author(); ?>.
			                </p>
			            </div>
			        <?php endwhile; ?>
			    <?php else : ?>
			        <p class="nothing">
			            Aucune post à afficher !
			        </p>
			    <?php endif; ?>
			    </div>
		</div>

  	</div>
</section>
