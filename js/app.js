var $=jQuery,win=$(window);function headerSticky(){100<$(window).scrollTop()?$(".header").addClass("header-sticky"):$(".header").removeClass("header-sticky"),$(window).scroll(function(){100<$(window).scrollTop()?$(".header").addClass("header-sticky"):$(".header").removeClass("header-sticky")})}function homebannerSlider(){$(".homebanner__slider").slick({fade:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,draggable:!1,arrows:!1,dots:!0,responsive:[{breakpoint:991,settings:{dots:!1}}]})}function ngenSlider(){$(".ngen-diff__slider").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!0,responsive:[{breakpoint:991,settings:{dots:!1}}]})}function moreNgenSlider(){$(".more-ngen__slider").slick({infinite:!1,slidesToShow:5,slidesToScroll:1,arrows:!1,dots:!1,responsive:[{breakpoint:991,settings:{slidesToShow:4,dots:!0}},{breakpoint:767,settings:{slidesToShow:3,dots:!0}},{breakpoint:567,settings:{slidesToShow:2,slidesToScroll:2,dots:!0}}]})}function accordion(){$(".accordion__item").each(function(){const e=$(this),i=$(this).parents(".accordion"),o=e.find(".accordion__item-header"),n=e.find(".accordion__item-body");let s=!1;i.hasClass("accordion--v2")&&(s=!0),e.hasClass("active")&&(n.slideDown(),s&&o.slideUp()),o.click(function(){activeSibling=e.siblings(".accordion__item.active"),activeSiblingHeader=activeSibling.find(".accordion__item-header"),activeSiblingBody=activeSibling.find(".accordion__item-body"),e.hasClass("active")?(e.removeClass("active"),o.slideDown(),n.slideUp(),s&&n.slideUp()):(e.addClass("active"),n.slideDown(),activeSibling.removeClass("active"),activeSiblingBody.slideUp(),s&&(o.slideUp(),activeSiblingHeader.slideDown()))})})}function checkboxToggle(){$('input[type="checkbox"]').each(function(){var e=$(this),i=e.siblings("label");0===i.length&&(i=e.parent("label")),console.log(i),e.is(":checked")?i.addClass("checked"):i.removeClass("checked"),i.click(function(){e.is(":checked")?$(this).addClass("checked"):$(this).removeClass("checked")})})}function parallaxImg(){$(".img-parallax").each(function(){var c=$(this),d=$(this).parent();function e(){var e,i=c.data("speed"),o=d.offset().top,n=$(this).scrollTop(),s=$(this).height(),a=d.innerHeight(),t=n+s;c.css({top:(e=o<t&&n<o+a?(t-o)*i/(s+a)*100+(50-50*i):e)+"%",transform:"translate(-50%, -"+e+"%)"})}$(document).on({scroll:function(){e()},ready:function(){e()}})})}document.addEventListener("DOMContentLoaded",function(){headerSticky(),homebannerSlider(),ngenSlider(),moreNgenSlider(),accordion(),checkboxToggle()}),win.on("resize",function(){}),win.on("load",function(){parallaxImg()});