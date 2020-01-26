$(document).ready(function(){
    $("#btn1").click(function(){
        $(".div1").children().css({"color":"red","border":"1px solid red"});
    });
    $("#btn2").click(function(){
        $(".div2").find("span").css({"color":"red","border":"1px solid red"});
    });
});