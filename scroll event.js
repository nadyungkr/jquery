$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() >= 150) {
            $('header').addClass('bg'),
            $('header').css("padding","1px 0")
        } else {
            $('header').removeClass('bg'),
            $('header').css("padding","10px 0")
        }
    });
});