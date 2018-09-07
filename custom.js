/**
 * Custom js for theme
 */

(function ($) {
    $(document).ready(function () {
        $(".featured-slider").slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            speed: 8000,
            autoplay: true,
            autoplaySpeed: 0,
            cssEase: 'linear',
            focusOnSelect: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });

    });

})(jQuery);