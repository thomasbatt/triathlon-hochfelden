<div id="slider-carouselFade">
	<div id="carouselFade" class="carouselFade slide carouselFade-fade layer" data-depth="0.10" data-ride="carouselFade">
	    <ol class="carouselFade-indicators <?= $content['indicators'] ?>">
	        <li data-target="#carouselFade" data-slide-to="0" class="active"></li>
	        <li data-target="#carouselFade" data-slide-to="1"></li>
	        <li data-target="#carouselFade" data-slide-to="2"></li>
	    </ol>
	    <!-- carouselFade items -->
	    <div class="carouselFade-inner <?= $content['background'] ?>">
	        <div class="active item">
	        	<div class="item-img"></div>
	        	<div class="item-img"></div>
	        	<div class="item-img"></div>
	        </div>
	        <div class="item">
	        	<div class="item-img"></div>
	        	<div class="item-img"></div>
	        	<div class="item-img"></div>
	        </div>
	        <div class="item">
	        	<div class="item-img"></div>
	        	<div class="item-img"></div>
	        	<div class="item-img"></div>
	        </div>
	    </div>
	    <!-- carouselFade nav -->
    	<a class="left carouselFade-control left  <?= $content['indicators'] ?>" href="#carouselFade" role="button" data-slide="prev" data-fade="false">
			<span class="glyphicon glyphicon-chevron-left" style="" aria-hidden="true"></span>
		</a>
		<a class="right carouselFade-control right  <?= $content['indicators'] ?>" href="#carouselFade" role="button" data-slide="next" data-fade="false">
			<span class="glyphicon glyphicon-chevron-right" style="" aria-hidden="true"></span>
		</a>
	</div>
</div>