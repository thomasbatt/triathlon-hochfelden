/* ===========================================================
 * jquery-interactive_el.js v1.0
 * ===========================================================
 * Copyright 2016 Thomas BATT.
 * http://www.thomasbatt.fr
 *
 * Create an interactive moving element
 * that reacts to viewer's cursor
 *
 * https://github.com/thomasbatt/interactive_el
 * 
 * License: GPL v3
 *
 * ========================================================== */

!function($){
  var defaults = {
    box : false,
    position : 0,
    gyroscope: true,
    duration: 0.2,
    mouse: true,
    mouseStrength: 10,
    scroll: true,
    scrollSpeed: 2,
    scale: 1
  };  
  
  $.fn.interactive_el = function(options){
    return this.each(function(){
      var settings = $.extend({}, defaults, options),
          $fwindow = $(window),
          el = $(this);

      if(!settings.box)
          box = el;
      else
          box = settings.box;

      var h = box.outerHeight(),
          w = box.outerWidth(),
          duration = settings.duration,
          strength = settings.mouseStrength,
          sh = strength / h,
          sw = strength / w,
          scale = settings.scale,
          bgOffset = parseInt(box.offset().top),
          speed = 1/settings.scrollSpeed,
          coordScroll ={ x : 0, y : 0 },
          coordMove ={ x : 0, y : 0 },
          coordTotal ={ x : 0, y : 0 };

      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      function isMobile() {
        var isMobile = {
          Android: function() {
            return navigator.userAgent.match(/Android/i) ? true : false;
          },
          BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i) ? true : false;
          },
          iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
          },
          Windows: function() {
            return navigator.userAgent.match(/IEMobile/i) ? true : false;
          },
          any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
          }
        };
        return isMobile.any();
      }

      function isDisplay(){
        $.fn.extend({
            hasClasses: function (selectors) {
                var self = this;
                for (var i in selectors) {
                    if ($(self).hasClass(selectors[i])) 
                        return true;
                }
                return false;
            }
        });
        return el.parent().hasClasses(['active', 'next', 'prev']);
      }

      function transitionCSS(el,duration,easing,delay){
        el.css({
          "-webkit-transition": "transform "+ duration +"s "+ easing +" "+ delay +"s",
          "-moz-transition": "transform "+ duration +"s "+ easing +" "+ delay +"s",
          "-o-transition": "transform "+ duration +"s "+ easing +" "+ delay +"s",
          "transition": "transform "+ duration +"s "+ easing +" "+ delay +"s" 
          // "transition-property": "all",
          // "transition-property": "transform"
        });
      }

      function transformCSS(type,el,coord,scale,duration){
        coord.x = Math.round(coord.x);
        coord.y = Math.round(coord.y);
        // console.log(settings.position,el[0].className,type,'x:'+coord.x+'px y:'+coord.y+'px');
        // console.log(settings.position,type,'x:'+coord.x+'px y:'+coord.y+'px');
          // alert('x:'+coord.x+'px y:'+coord.y+'px');
        el.css({
          "-webkit-transform": "matrix(" + scale + ",0,0," + scale + "," + coord.x + "," + coord.y + ")",
          "-moz-transform": "matrix(" + scale + ",0,0," + scale + "," + coord.x + "," + coord.y + ")",
          "-o-transform": "matrix(" + scale + ",0,0," + scale + "," + coord.x + "," + coord.y + ")",
          "transform": "matrix(" + scale + ",0,0," + scale + "," + coord.x + "," + coord.y + ")",
        });
      }

      function scrollTransform() {    
          if (!isDisplay())
            return;
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          var yPos = - ((scrollTop - bgOffset) / speed); 
          coordScroll.y = Math.round(yPos);
          coordTotal.y = coordScroll.y + coordMove.y;
          transformCSS('scrol',el,coordTotal,scale,duration);
      }

      function mousemoveTransform(e) {
        if (!isDisplay())
          return;
        var pageX = e.pageX || e.clientX,
            // pageY = e.pageY || e.clientY;
            pageY = e.clientY;
            // console.log('e', e);
            // console.log('e.pageY || e.clientY', e.clientY);
            pageX = (pageX - box.offset().left) - (w / 2);
            pageY = (pageY - box.offset().top) - (h / 2);
        coordMove.x = ((sw * pageX)) * - 1;
        coordMove.y = ((sh * pageY)) * - 1;
        coordTotal.x = coordScroll.x + coordMove.x;
        coordTotal.y = coordScroll.y + coordMove.y;
        transformCSS('mouse',el,coordTotal,scale,duration);
      };      

      function devicemotionTransform(e) {
        if (!isDisplay())
            return;
        if(window.orientation==0){
        var accX = Math.round(e.accelerationIncludingGravity.x) / 100,
            accY = Math.round(e.accelerationIncludingGravity.y) / 100;
        }else{
        var accX = Math.round(e.accelerationIncludingGravity.y) / 100,
            accY = Math.round(e.accelerationIncludingGravity.x) / 100;
        }
        coordMove.x = 10 * accX * strength;
        coordMove.y = 15 * accY * strength;
        coordTotal.x = coordScroll.x + coordMove.x;
        coordTotal.y = coordScroll.y + coordMove.y;
        // transformCSS('mobile',el,coordTotal,scale,duration);
      };

      transformCSS('init',el,coordTotal,scale,duration);

      if(settings.scroll)
        window.addEventListener('scroll', scrollTransform, false);

      if(settings.mouse && !isMobile() )
        window.addEventListener('mousemove', mousemoveTransform, false);

      if(settings.gyroscope && isMobile() ){
        window.addEventListener('devicemotion', devicemotionTransform, false);
        setInterval(function(){
          if (!isDisplay())
            return;
          transformCSS('mobile',el,coordTotal,scale,0.2);
        },50);
        transitionCSS(el,duration,"ease",0);
        // el.addClass('transition');
      }

      // $fwindow.trigger('scroll');
      
    });
    
  }
  
  
}(window.jQuery);