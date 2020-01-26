$(document).ready(function(){
    $("#btn1").click(function(){
        $(".me1").siblings().css({"color":"red","border":"1px solid red"});
    });
    $("#btn2").click(function(){
        $(".me1").next().css({"color":"red","border":"1px solid red"});
    });
    $("#btn3").click(function(){
        $(".me1").nextAll().css({"color":"red","border":"1px solid red"});
    });
    $("#btn4").click(function(){
        $(".me1").nextUntil("h5").css({"color":"red","border":"1px solid red"});
    });
    $("#btn5").click(function(){
        $(".me1").siblings().css({"color":"lightgrey","border":"1px solid lightgrey"});
    });
});