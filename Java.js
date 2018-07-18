$(document).ready(function() {
    $(document).on("scroll", onScroll);
    $(window).resize(function() {
      if ($(document).width() > 714)
        $(".responsive-menu").css("height", "0px");
    });

    
          window.sr = ScrollReveal({ reset: true });

          // Customizing a reveal set
          sr.reveal('#cli1', {opacity: 0, duration: 500 });
          sr.reveal('#cli2', { opacity: 0, duration: 1000 });
          sr.reveal('#cli3', { opacity: 0, duration: 1500 });
          sr.reveal('#cli4', { opacity: 0, duration: 2000 });
          sr.reveal('#cli5', { opacity: 0, duration: 2500 });
          sr.reveal('#cli6', { opacity: 0, duration: 500 });
          sr.reveal('#cli7', { opacity: 0, duration: 1000 });
          sr.reveal('#cli8', { opacity: 0, duration: 2000 });
          sr.reveal('#cli9', { opacity: 0, duration: 2500 });
          sr.reveal('#cli10', { opacity: 0, duration: 1500 });
          sr.reveal('#proyecto1', { origin: 'left', duration: 1000, opacity: 0 });
          sr.reveal('#proyecto2', { origin: 'bottom', duration: 1000 });
          sr.reveal('#proyecto3', { origin: 'right', duration: 1000 });

         
       

    var menu = $(".menu").html();
    $(".responsive-menu").append(menu);
    $(".responsive-menu ul").removeClass("main-menu");
    $(".responsive-menu ul").addClass("mobile-menu");
    $(".menu ul li:first-child").addClass("active2");
  
    $(".mobile-menu-icon").click(function() {
      var respMenu = $(".responsive-menu");
      var height = (respMenu.css("height") == "170px") ? "0px" : "170px";
      respMenu.animate({
        height: height
      }, 100);
    });
  
    $(".menu-button").click(function(event) {
      event.preventDefault();
      var href = $(this).attr('href');
      scrollAmount = (href == "#section-home") ? 0 : $(href).offset().top - 120;
      $('html, body').animate({
        scrollTop: scrollAmount
      }, 1000);
    });
  
    function onScroll() {
      var scrollPos = $(document).scrollTop();
      $("#test").html(scrollPos);
      $('.menu li a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink).attr("href");
        if ($(refElement).position().top - 190 <= scrollPos && $(refElement).position().top - 190 + $(refElement).height() >= scrollPos) {
          currLink.parent().addClass("active2");
          progressWidth = $(".progress-bar").css("width");
          console.log(progressWidth);
            if (refElement == "#section-skills" && progressWidth == "0px")
              {
                $(".progress-html").animate({
                  width: ["80%", "linear"]
                }, 50);
                $(".progress-css").animate({
                  width: ["80%", "linear"]
                }, 100);
                $(".progress-js").animate({
                  width: ["60%", "linear"]
                }, 50);
                $(".progress-python").animate({
                  width: ["20%", "linear"]
                }, 100);
                 $(".progress-js").animate({
                  width: ["60%", "linear"]
                }, 50);
                 $(".progress-illus").animate({
                  width: ["90%", "linear"]
                }, 100);
                 $(".progress-photo").animate({
                  width: ["100%", "linear"]
                }, 50);
                 $(".progress-effect").animate({
                  width: ["60%", "linear"]
                }, 100);
                 $(".progress-premier").animate({
                  width: ["80%", "linear"]
                }, 50);
                 $(".progress-corel").animate({
                  width: ["80%", "linear"]
                }, 100);
              }
             
          
        } else {
          currLink.parent().removeClass("active2");
        }
      });
    }
 
  
  $(".carousel").swipe({
    swipe: function(
      event,
      direction,
      distance,
      duration,
      fingerCount,
      fingerData
    ) {
      if (direction == "left") $(this).carousel("next");
      if (direction == "right") $(this).carousel("prev");
    },
    allowPageScroll: "vertical"
  });
  
  $(".carousel").swipe({
    swipe: function(
      event,
      direction,
      distance,
      duration,
      fingerCount,
      fingerData
    ) {
      if (direction == "left") $(this).carousel("next");
      if (direction == "right") $(this).carousel("prev");
    },
    allowPageScroll: "vertical"
  });




});