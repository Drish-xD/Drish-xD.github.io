// Animations

AOS.init({
    delay: 200,
    offset: 150,
    duration: 1000,
    once: false,
    anchorPlacement: 'center-bottom',
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


// Scrolling Effect text


$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('.nav-bar').addClass('black');
    }

    else {
          $('.nav-bar').removeClass('black');
    }
})


// menu bar animation


var wrapperMenu = document.querySelector('.wrapper-menu');

  wrapperMenu.addEventListener('click', function(){
    wrapperMenu.classList.toggle('open');  
})


// scroll effect of skill bars


ScrollOut({
    targets: '.bar,skill-bars,.progress-line,.skill span'
  });