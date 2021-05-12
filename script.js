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
