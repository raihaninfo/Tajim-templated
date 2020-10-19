$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:1,
        autoplay: true,
        autoplayTimeout: 5000,
    });

    $(window).on('scroll',function() {    
        var scroll = $(window).scrollTop();
        if (scroll < 30) {
         $("#sticky-header").removeClass("sticky");
        }else{
         $("#sticky-header").addClass("sticky");
        }
     });



  });
