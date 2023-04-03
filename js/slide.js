
// this function is used for portfolio card
(function () {
    const buttons = document.querySelectorAll('.btn')
    const storeImges = document.querySelectorAll('.slide-container')

    // for  buttons background change 
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {

            var active = document.getElementsByClassName('btn-active');
            active[0].className = active[0].className.replace(' btn-active', '');
            this.className += ' btn-active';
        });
    }

// this foreach loop is used for change the portfolio cards
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault()
            const filter = e.target.dataset.filter
            storeImges.forEach((item) => {

            // connect the image to the buttons
                    if (item.classList.contains(filter)) {
                        item.style.display = 'block'
                    } else {
                        item.style.display = 'none'
                    }
            })
        })
    })
})();

var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        250: {
            slidesPerView: 2,
        },
        500: {
            slidesPerView: 3,
        },
    },
});





