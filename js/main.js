// SEARCH
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function() {
    searchInputEl.focus();    
})

searchInputEl.addEventListener("focus", function() {    
    searchInputEl.setAttribute("placeholder", "통합검색");    
})

searchInputEl.addEventListener("blur", function() {    
    searchInputEl.setAttribute("placeholder", "");    
})

// SWIPER
// SWIPER NOTICE
const swiperNotice = new Swiper(".notice-line .swiper", {    
    direction: "vertical",
    loop: true,
    autoplay: true,
});

// SWIPER PROMOTION
const swiperPromotion = new Swiper(".promotion .swiper", {    
    direction: "horizontal",
    slidesPerView: 3,
    spaceBetween: 10,   
    centeredSlides: true,    
    loop: true,
    autoplay: {
        delay: 5000
    },
    pagination: {
        el: '.promotion .swiper-pagination',
        clickable: true,        
    },
    navigation: {
        prevEl: ".promotion .swiper-button-prev",
        nextEl: ".promotion .swiper-button-next",
    }
});