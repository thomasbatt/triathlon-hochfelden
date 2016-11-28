<section id="page" class="content-block">
	<div class="container <?= $content['name'] ?>">
  		<div class="row text-justify">

			    <div class="col-md-12">
			        <?php if (have_posts()) { ?>
			            <?php 
			                while (have_posts()) { 
			                    the_post(); 
			            ?>
			                <div class="post">
			                    <h1>
			                        <?php the_title(); ?>
			                    </h1>
			                    <?php the_content(); ?>
			                </div>

			            <?php } ?>

			        <?php }else{ ?>

			            <p class="nothing">
			                Aucune post à afficher !
			            </p>
			        <?php } ?>
			    </div>
		</div>

  	</div>
</section>