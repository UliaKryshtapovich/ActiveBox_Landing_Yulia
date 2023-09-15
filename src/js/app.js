const mySwiper = new Swiper('.image-slider', {
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView:1,
    slidesPerGroup:1,

    breakpoints: {
        1440:{
            slidesPerView:1,
        },
        1024:{
            slidesPerView:1,
        },
        320: {
            slidesPerView:1,
            slidesPerGroup:1,
        },
    }
});
$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header_nav').toggleClass('active');
        $('body').toggleClass('lock');
         });
    });

