var $=jQuery,win=$(window);function homebannerSlider(){$(".homebanner__slider").slick({fade:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,draggable:!1,arrows:!1,dots:!0,responsive:[{breakpoint:991,settings:{dots:!1}}]})}function ngenSlider(){$(".ngen-diff__slider").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!0,responsive:[{breakpoint:991,settings:{dots:!1}}]})}function accordion(){$(".accordion__item").each(function(){const i=$(this),e=$(this).parents(".accordion"),n=i.find(".accordion__item-header"),o=i.find(".accordion__item-body");let s=!1;e.hasClass("accordion--v2")&&(s=!0),i.hasClass("active")&&(o.slideDown(),s&&n.slideUp()),n.click(function(){activeSibling=i.siblings(".accordion__item.active"),activeSiblingHeader=activeSibling.find(".accordion__item-header"),activeSiblingBody=activeSibling.find(".accordion__item-body"),i.hasClass("active")?(i.removeClass("active"),n.slideDown(),o.slideUp(),s&&o.slideUp()):(i.addClass("active"),o.slideDown(),activeSibling.removeClass("active"),activeSiblingBody.slideUp(),s&&(n.slideUp(),activeSiblingHeader.slideDown()))})})}document.addEventListener("DOMContentLoaded",function(){homebannerSlider(),ngenSlider(),accordion()}),win.on("resize",function(){}),win.on("load",function(){});