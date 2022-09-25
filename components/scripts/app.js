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
win.on('load', function () {
    parallaxImg()
});


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
        var $this = $(this),
            labelObj = $this.siblings('label');

        if (labelObj.length === 0) {
            labelObj = $this.parent('label');
        }

        console.log(labelObj)

        if ($this.is(':checked')) {
            labelObj.addClass('checked')
        } else {
            labelObj.removeClass('checked')
        }

        labelObj.click(function () {
            if ($this.is(':checked')) {
                $(this).addClass('checked')
            } else {
                $(this).removeClass('checked')
            }
        })
    })
}

function parallaxImg() {
    $('.img-parallax').each(function () {
        var img = $(this);
        var imgParent = $(this).parent();

        function parallaxImg() {
            var speed = img.data('speed');
            var imgY = imgParent.offset().top;
            var winY = $(this).scrollTop();
            var winH = $(this).height();
            var parentH = imgParent.innerHeight();


            // The next pixel to show on screen      
            var winBottom = winY + winH;

            // If block is shown on screen
            if (winBottom > imgY && winY < imgY + parentH) {
                // Number of pixels shown after block appear
                var imgBottom = ((winBottom - imgY) * speed);
                // Max number of pixels until block disappear
                var imgTop = winH + parentH;
                // Porcentage between start showing until disappearing
                var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
            }
            img.css({
                top: imgPercent + '%',
                transform: 'translate(-50%, -' + imgPercent + '%)'
            });
        }
        $(document).on({
            scroll: function () {
                parallaxImg();
            },
            ready: function () {
                parallaxImg();
            }
        });
    });
}