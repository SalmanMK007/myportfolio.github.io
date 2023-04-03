var a = document.querySelector(".toggleMenu").addEventListener("click",ev);
var b = document.querySelector(".navigation").addEventListener("click",ev);

function ev(){
    document.getElementById("toggleMenu").classList.toggle("active");
    document.getElementById("navigation").classList.toggle("active");

}


// $(document).ready(function () {
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 100) {
//             $('#full-nav').addClass("nav-active");
//         } else {
//             $('#full-nav').removeClass("nav-active");
//         }
//     });
// });

$(document).ready(function () {
    $(window).animate({},4000, function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#full-nav').addClass("nav-active");
            } else {
                $('#full-nav').removeClass("nav-active");
            }
        });
    });
});

const typed = new Typed('.multiple_text',{
    strings: ['UI/UX designer','Front-end-Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true

})