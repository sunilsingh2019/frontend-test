var $ = jQuery;
var win = $(window);

'use strict';

document.addEventListener('DOMContentLoaded', function () {
    homebannerSlider()
    ngenSlider()
    accordion()
});

//function called on window resize
win.on('resize', function () {});
win.on('load', function () {});


/*****  Declare your functions here  ********/

function homebannerSlider() {
    $('.homebanner__slider').slick({
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        arrows: false,
        dots: true,
        responsive: [{
            breakpoint: 991,
            settings: {
                dots: false
            }
        }]
    });
}

function ngenSlider() {
    $('.ngen-diff__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [{
            breakpoint: 991,
            settings: {
                dots: false
            }
        }]
    });
}

function accordion() {
    $('.accordion__item').each(function () {
        const $this = $(this),
            parentWrapper = $(this).parents('.accordion'),
            accordHeader = $this.find('.accordion__item-header'),
            accordBody = $this.find('.accordion__item-body');

        let v2 = false;
        if (parentWrapper.hasClass('accordion--v2')) {
            v2 = true
        }

        if ($this.hasClass('active')) {
            accordBody.slideDown();
            if (v2) {
                accordHeader.slideUp()
            }
        }

        accordHeader.click(function () {
            activeSibling = $this.siblings('.accordion__item.active'),
                activeSiblingHeader = activeSibling.find('.accordion__item-header'),
                activeSiblingBody = activeSibling.find('.accordion__item-body')

            if ($this.hasClass('active')) {
                $this.removeClass('active');
                accordHeader.slideDown();
                accordBody.slideUp();
                if (v2) {
                    accordBody.slideUp();
                }
            } else {
                $this.addClass('active');
                accordBody.slideDown();
                activeSibling.removeClass('active');
                activeSiblingBody.slideUp();

                if (v2) {
                    accordHeader.slideUp();
                    activeSiblingHeader.slideDown()
                }

            }
        })
    })
}