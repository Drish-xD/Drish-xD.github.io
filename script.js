// Animations

AOS.init({

    offset: 200,
    duration: 1000,
    once: false,
    anchorPlacement: 'top-center',
});



// smooth scroll 

$('.nav-bar a').on('click', function(e){
    if(this.hash !==''){
        e.preventDefault();

        const hash = this.hash;
        
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800 );
    }; 
});



// navigation bar animation
$(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });
});

// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('.nav-bar').addClass('black');
    }

    else {
          $('.nav-bar').removeClass('black');
    }
})