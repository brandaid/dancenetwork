// for reference: http://www.html5rocks.com/en/tutorials/speed/animations/#debouncing-scroll-events

var scrollAnimations = (function ($) {
  "use strict";

  // no fading for IE8 & 9 and small devices
  if( PLATFORM.IOS() || PLATFORM.IE8() || PLATFORM.IE9() ) return;

  // set some base vars
  var latestKnownScrollY = 0,
      ticking = false,
      $window = $(window),
      window_height = $window.outerHeight(),
      $back_to_top;


  function requestTick() {
    if(!ticking) {
        requestAnimationFrame(update);
    }
    ticking = true;
  }

  function update() {
    // reset the tick so we can
    // capture the next onScroll
    ticking = false;

    var currentScrollY = latestKnownScrollY;

    var window_bottom = currentScrollY + window_height;

    if(currentScrollY > 200) {
        $back_to_top.addClass('is-visible');
    } else {
        $back_to_top.removeClass('is-visible');
    }

    animateSections(window_bottom);
  }

  function backToTop(){
    var back_to_top = '<a class="page-top js-back-to-top" href="#top"><img src="/img/arrow-up.svg"></a>';
    $(back_to_top).insertAfter('.site-footer');

    $back_to_top = $('.js-back-to-top');

    $('.js-back-to-top').click(function(evt){
        $(window).scrollTop(0);
    });
  }

  function animateSections(window_bottom){
    $('.faded-out').each(function(){
        var item_buffer = $(this).offset().top + ($(this).outerHeight() / 2);

        if( item_buffer < window_bottom ){
            $(this).removeClass('faded-out').addClass('fade-in');
        }
    });
  }


  function showVisibleSections(){
    if ($('.site-header').outerHeight() < $window.scrollTop()) {
      var window_bottom = $window.scrollTop() + window_height;
      animateSections(window_bottom);
    }
  }

  $(backToTop);

  $window.on({
    // if in view when the page loads
    load: function(){
      showVisibleSections();
    },
    // if in view when scrolling
    scroll: function(){
      latestKnownScrollY = $(this).scrollTop();
      requestTick();
    }
  });

}($));
