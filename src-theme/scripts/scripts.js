

$(window).on('load',function() {

  var $body = 'header, #slider-carouselFade, #page, #wrapper-content, footer';
  var tailleEcranX = window.screen.width;
  var tailleEcranY = window.screen.height;
  // alert('x:'+tailleEcranX+' y:'+tailleEcranY);
  if(tailleEcranY>530 ){

// ----------------------------FADE-IN-OUT--------------------------------
    
    $($body).animate({opacity: 1}, 1000, "easeInExpo");
    if(tailleEcranY>670){
      $('.footer').removeAttr('style')
          .css({"bottom":"-=500px","opacity":1})
          .animate({bottom: '+=500px' }, 1400, "easeOutExpo");
    }
    $('a').not('a[data-fade="false"], .graybar a, .whitebar a, #tribe-events a').click( function(e) {
        $('.preloader').css({"opacity":0,"z-index": 35}).animate({opacity: 1}, 1500);
        e.preventDefault();
        var $urlToLoad = this.href;
        $('#page, #wrapper-content').animate({left: '2000px'}, 1500, "easeInExpo", function() {
            if(tailleEcranX>670 ){
              $('.footer').animate({bottom: '+=-500px'}, 400, "easeInExpo");
            }
            $($body).animate({opacity: 0}, 1000, "easeInExpo", function() {
                window.location = $urlToLoad
            })
        });
    });
    $('#page').removeAttr('style').css("left","-=2000px").animate({left: '+=2000px'}, 1400, "easeOutExpo");
  }
  else{
    $($body).css({opacity: 1});
  }
});


$('document').ready(function(){ 

  var $body = 'header, #slider-carouselFade, #page, #wrapper-content, footer';
  var tailleEcranX = window.screen.width;
  var tailleEcranY = window.screen.height;
    // alert('x:'+tailleEcranX+' y:'+tailleEcranY);
  if(tailleEcranY>530 ){

// ------------------------AJAX---------------------------

    $('.whitebar a, .graybar a').click(function(e){
        $('.preloader').css({"opacity":0,"z-index": 35}).animate({opacity: 1}, 1500);
        e.preventDefault();
        var url = this.href;
        var array = url.split('/');
        var lastsegment = array[array.length-2];
        var ajaxurl = "";
        var $item = $('#slider-carouselFade .carouselFade-inner');
        // alert(lastsegment);

        for (i = 0; i < array.length-2; i++) {
          ajaxurl += array[i]+"/";
        }
        if(
          lastsegment=='wordpress' ||
          lastsegment.indexOf(".") != -1
        ){
          $($body).animate({opacity: 0}, 600, "easeInExpo", function() {
              window.location = ajaxurl+lastsegment;
          });
        }
        else if(
          lastsegment=='nouvelles' || 
          lastsegment=='trombinoscope' || 
          lastsegment=='les-parcours' || 
          lastsegment=='agenda'
        ){
          $('#page, #wrapper-content').animate({left: '2000px'}, 1500, "easeInExpo", function() {
              if(tailleEcranX>670 ){
                $('.footer').animate({bottom: '+=-500px'}, 400, "easeInExpo");
              }
              $($body).animate({opacity: 0}, 1000, "easeInExpo", function() {
                  window.location = ajaxurl+lastsegment;
              })
          });
        }
        else{
            ajaxurl += 'wp-admin/admin-ajax.php';
            $('.footer').removeClass('bg-white');
            $('.scrollDownArrow, #wrapper-content').animate({opacity: 0}, 700, "easeInExpo", function(){
                $item.removeClass('full-screen')
                    .css({height: '150px'   })
                    .addClass('half-screen')
                    .removeAttr('style');
                $('nav').addClass('graybar');    
                $('.scrollDownArrow, .carouselFade-indicators, .carouselFade-control').addClass('no-display')
            });
            if(tailleEcranX>670 ){
              $('.footer').animate({bottom: '+=-500px'}, 400, "easeInExpo");
            }
            $('#page').animate({left: '2000px'}, 1500, "easeInExpo", function() {
                $('.wp-footer').css({"display": "none"});
                $.post( ajaxurl ,{'action':'page_content','page':lastsegment}, function(html){
                    $('#page, #wrapper-content').replaceWith(html);
                    $('.preloader').animate({opacity: 0}, 1200, "easeOutExpo", function(){
                        $('.preloader').css({"z-index":1})
                    });
                    if(tailleEcranX<1030 ){
                      $('html, body').animate( { scrollTop: $('#page').offset().top }, 1500 , "easeInOutCubic" );
                    }
                    $('#page').removeAttr('style')
                        .css({"left":"-=2000px","opacity":"1"})
                        .animate({left: '+=2000px'}, 1700, "easeOutExpo", function() {
                          if(tailleEcranY>670 ){
                            $('.footer').removeAttr('style')
                                .css({"bottom":"-=500px","opacity":1})
                                .animate({bottom: '+=500px' }, 1400, "easeOutExpo");
                          }
                    });
                });
            });
        }
    });

//-------------------------SCALE ANIMATION---------------------------
     var windowWidth, windowHeight, windowScrollTop;
     function getWindowDimension(){
         windowWidth = window.innerWidth;
         windowHeight = window.innerHeight;
         windowScrollTop = $(window).scrollTop();
     }
     $(window).scroll(function () {
         getWindowDimension();
         if(tailleEcranX>750){n=1}else{n=0.5};
         var scale = ((windowScrollTop/windowHeight > 1)?1:windowScrollTop/windowHeight);
         $('.scale-animation').css({
            opacity:1-(scale*2), 
            transform: 'scale('+(1-scale/2)+') translateY('+(n*scale*750)+'px)'
         });
         $('.scrollDownArrow').css({
             opacity:1-(scale*4)
         });
     });

// ----------------------------FACEBOOK SDK--------------------------------

     window.fbAsyncInit = function() {
         FB.init({
               appId      : 'your-app-id',
               xfbml      : true,
               version    : 'v2.7'
         });
     };

     (function(d, s, id){
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) {return;}
          js = d.createElement(s); js.id = id;
          js.src = "//connect.facebook.net/en_US/sdk.js";
          fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));


// ----------------------------SMOOTH SCROLL--------------------------------
    
    $('.js-scrollTo').on('click', function() { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 1500; // Durée de l'animation (en ms)
        $('html, body').animate( { scrollTop: $(page).offset().top }, speed , "easeInOutCubic" ); // Go
        return false;
    });

// ----------------------------WOW JS--------------------------------
     new WOW().init();

     // alert(pw_script_vars);
     // console.log('pw_script_vars', pw_script_vars);


// ----------------------------INTERACTIVE_EL--------------------------------
    
    interactive = function ($item) {
      $box = $('.carouselFade-inner');
      $($item+" .item-img:nth-child(1)").interactive_el({
        box : $box,
        position : 1,
        gyroscope: false,
        mouse: false,
        mouseStrength: 10,
        scrollSpeed: 0.2,
        scale: 1.10
      });
      $($item+" .item-img:nth-child(2)").interactive_el({
        box : $box,
        position : 2,
        // mouse: false,
        duration: 0.2,
        mouseStrength: 20,
        scrollSpeed: 0.15,
        scale: 1.10
      });
      $($item+" .item-img:nth-child(3)").interactive_el({
        box : $box,
        position : 3,
        // mouse: false,
        duration: 0.3,
        mouseStrength: 60,
        scrollSpeed: 0.05,
        scale: 1.10
      });
    }

    interactive('');

// ----------------------------SLIDER carouselFade--------------------------------


    $('.carouselFade').carouselFade({
      interval: 12000,
      pause: "false"
    });


// ----------------------------ELSE OLD MOBILE--------------------------------
        
  }
  else{
    $("#slider-carouselFade").remove();
  }   


// ----------------------------NAV--------------------------------

  $('.col-btn').click(function() {

    if (!$("nav").hasClass("open")) {
      $('nav').addClass("open");
      $('#slider-carouselFade .carouselFade-inner').addClass('nav-screen');
      $('.header .titre, #wrapper-content').addClass('no-display');
      $('.scrollDownArrow').remove();
      $("#wrapper-content").css({"display": "none"});
      $('.footer').removeClass('bg-white');
      $('.header .scale-animation nav ul li:not(:first-child)').css({"display":"block"})
      $('.header .scale-animation nav ul li:first-child:not(ul li ul li:first-child)').addClass('no-display')
    } else {

      $('nav').removeClass("open");
    }
  });


  
});

