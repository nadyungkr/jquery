$(document).ready(function(){
    $("#btn1").click(function(){
        $("h1,h2").addClass("blue");
        $("h3,h4").addClass("boldtext");
        $("h5").addClass("yellowgreen boldtext");
    });
    $("#btn2").click(function(){
        $("h1,h2").removeClass("blue");
        $("h3,h4").removeClass("boldtext");
        $("h5").removeClass("yellowgreen boldtext");
    });
    $("#btn3").click(function(){
        $("h1,h2").toggleClass("blue");
        $("h3,h4").toggleClass("boldtext");
        $("h5").toggleClass("yellowgreen boldtext");
    });
});