$(document).ready(function () {
    jQuery("#carousel").owlCarousel({
        autoplay: true,
        rewind: true,
        margin: 20,
        responsiveClass: true,
        autoHeight: true,
        autoplayTimeout: 7000,
        smartSpeed: 800,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: false
            },

            600: {
                items: 1
            },

            1024: {
                items: 1
            },

            1366: {
                items: 1
            }
        }
    });
    jQuery("#service-carousel").owlCarousel({
        autoplay: false,
        rewind: true,
        margin: 20,
        responsiveClass: true,
        autoHeight: true,
        autoplayTimeout: 7000,
        smartSpeed: 800,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
            
            },

            600: {
                items: 3
            },

            1024: {
                items: 4
            },

            1366: {
                items: 5
            }
        }
    });
    jQuery("#provid-carousel").owlCarousel({
        autoplay: false,
        rewind: true,
        margin: 20,
        responsiveClass: true,
        autoHeight: true,
        autoplayTimeout: 7000,
        smartSpeed: 800,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1,

            },

            600: {
                items: 2
            },

            1024: {
                items: 3
            },

            1366: {
                items: 3
            }
        }
    });
    jQuery("#capabilities-carousel").owlCarousel({
        autoplay: true,
        rewind: true,
        margin: 20,
        responsiveClass: true,
        autoHeight: true,
        autoplayTimeout: 7000,
        smartSpeed: 800,
        nav: true,
        dots: true,
        responsive: {
            0: {
                items: 1,

            },

            600: {
                items: 1
            },

            1024: {
                items: 2
            },

            1366: {
                items: 3
            }
        }
    });
    jQuery("#equipment-carousel").owlCarousel({
        autoplay: false,
        rewind: true,
        margin: 20,
        responsiveClass: true,
        autoHeight: true,
        autoplayTimeout: 7000,
        smartSpeed: 800,
        nav: true,
        dots: true,
        responsive: {
            0: {
                items: 1,

            },

            600: {
                items: 3
            },

            1024: {
                items: 4
            },

            1366: {
                items: 5
            }
        }
    });
})

// counter
$(document).ready(function () {

    $('.statistic-counter').counterUp({
        delay: 10,
        time: 3000
    });


});