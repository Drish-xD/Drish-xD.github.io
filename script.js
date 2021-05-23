// Smooth scroll 

$('.nav-bar a').on('click', function(e){
    if(this.hash !==''){
        e.preventDefault();

        const hash = this.hash;
        
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800 );
    }; 
});

// Animations AOS

AOS.init({
    delay: 200,
    offset: 150,
    duration: 1000,
    once: false,
    anchorPlacement: 'center-bottom',
});    

// Scrolling Effect nav-bar 

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('.nav-bar').addClass('black');
    }

    else {
          $('.nav-bar').removeClass('black');
    }
});

// scroll effect of skill bars

ScrollOut({
    targets: '.bar,skill-bars,.progress-line,.skill span'
  });

// Drop down animatio of menu bar (only for screen width < 786px)

$(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });      
});    

// Hamburger animation (only for screen width < 786px)

var wrapperMenu = document.querySelector('.wrapper-menu');

  wrapperMenu.addEventListener('click', function(){
    wrapperMenu.classList.toggle('open');  
});