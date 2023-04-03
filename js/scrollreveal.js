ScrollReveal({ 
    // reset: true,
    distance:'90px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('h1, .tabs', { origin:'top' });
ScrollReveal().reveal('.main_text, .salman_img2, .img, .about_text, .services_card', { origin:'bottom' });
