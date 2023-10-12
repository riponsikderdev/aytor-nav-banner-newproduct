$(function(){


    // * SLICK SLIDER
    $('.slider').slick({
        arrows:false,
        dots:true,
        dotsClass:"bannerDots container",
        autoplay:true,
        
    });
    // * AOS 
    AOS.init();

    // * TOOLTIPS
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
})