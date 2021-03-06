(function($) {
  "use strict"; // Start of use strict

  // This is bad...
  var desktopOffsets = new Map();
  desktopOffsets.set('wedding', 40);
  desktopOffsets.set('accommodations', 80);
  desktopOffsets.set('registry', -48);
  desktopOffsets.set('rsvp', 30);

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      var name = this.hash.slice(1);
      target = target.length ? target : $('[name=' + name + ']');
      if (target.length) {
        var scrollPosition = target.offset().top;
        var scrollOffset = $(window).width() < 992 ? 60 : desktopOffsets.get(name);
        $('html, body').animate({
          scrollTop: (scrollPosition + scrollOffset)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict
