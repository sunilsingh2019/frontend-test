var $ = jQuery;
var win = $(window);

'use strict';

document.addEventListener('DOMContentLoaded', function () {
    headerSticky()
    homebannerSlider()
    ngenSlider()
    moreNgenSlider()
    accordion()
    checkboxToggle()
});

//function called on window resize
win.on('resize', function () {});
win.on('load', function () {});


/*****  Declare your functions here  ********/
function headerSticky() {
    if ($(window).scrollTop() > 100) {
        $('.header').addClass('header-sticky')
    } else {
        $('.header').removeClass('header-sticky')
    }

    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $('.header').addClass('header-sticky')
        } else {
            $('.header').removeClass('header-sticky')
        }
    })
}

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

function moreNgenSlider() {
    $('.more-ngen__slider').slick({
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 4,
                dots: true
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                dots: true
            }
        }, {
            breakpoint: 567,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true
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

function checkboxToggle() {
    $('input[type="checkbox"]').each(function () {
        const $this = $(this),
            labelObj = $this.siblings('label');

        console.log(labelObj)

        if ($this.is(':checked')) {
            labelObj.addClass('checked')
        } else {
            labelObj.removeClass('checked')
        }

        labelObj.click(function () {
            if ($this.is(':checked')) {
                $(this).removeClass('checked')
            } else {
                $(this).addClass('checked')
            }
        })
    })
}