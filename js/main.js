function adaptive_header(e,o){var i=$(".header-menu"),s=$(".menu__body");e<=765?s.hasClass("done")||s.addClass("done").appendTo(i):s.hasClass("done")&&s.removeClass("done").prependTo($(".header__menu"))}function adaptive_function(){adaptive_header($(window).outerWidth(),$(window).outerHeight())}function ibg(){$.each($(".ibg"),function(e,o){0<$(this).find("img").length&&$(this).css("background-image",'url("'+$(this).find("img").attr("src")+'")')})}function isValidEmailAddress(e){return new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i).test(e)}$(window).resize(function(e){adaptive_function()}),adaptive_function(),$(".menu__icon").click(function(e){$(this).toggleClass("active"),$(".header-menu").toggleClass("active"),$(this).hasClass("active")&&$("body").data("scroll",$(window).scrollTop()),$("body").toggleClass("lock"),$(this).hasClass("active")||$("body,html").scrollTop(parseInt($("body").data("scroll")))}),ibg(),$(document).ready(function(){$(function(){$(".slider__body").slick({infinite:!0,slidesToShow:2,slidesToScroll:1,arrows:!0,dots:!1,autoplay:!1,autoplaySpeed:2e3,centerPadding:"60px",responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0}},{breakpoint:800,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!0}}]})})}),$(document).ready(function(){$(function(){$(".sl__body").slick({infinite:!0,slidesToShow:4,slidesToScroll:1,arrows:!0,dots:!1,autoplay:!1,autoplaySpeed:2e3,centerPadding:"50",vertical:!0,vertiacalSwiping:!0,centerMode:!0,asNavFor:".slbig",responsive:[{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:1,infinite:!0}},{breakpoint:800,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!0}}]})})}),$(document).ready(function(){$(function(){$(".slbig").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!1,autoplay:!1,asNavFor:".sl__body",responsive:[{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0}},{breakpoint:800,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!0}}]})})}),$(document).ready(function(){$("#form").submit(function(){return""==document.form.name.value||""==document.form.phone.value?(valid=!1,valid):($.ajax({type:"POST",url:"",data:$(this).serialize()}).done(function(){$(".js-overlay-thank-you").fadeI(),$(this).find("input").val(""),$("#form1").trigger("reset")}),!1)})}),$(".js-close-thank-you").click(function(){$(".js-overlay-thank-you").fadeOut()}),$(document).mouseup(function(e){var o=$(".popup");e.target!=o[0]&&0===o.has(e.target).length&&$(".js-overlay-thank-you").fadeOut()}),$(function(e){e('[name="tel"]').mask("+7(999) 999-99-99")}),$(document).ready(function(){$("#validate").keyup(function(){var e=$("#validate").val();0!=e?isValidEmailAddress(e)?$("#validEmail").css({"background-image":"url('yes.png')","background-repeat":"no-repeat"}):$("#validEmail").css({"background-image":"url('no.png')","background-repeat":"no-repeat"}):$("#validEmail").css({"background-image":"none"})})});