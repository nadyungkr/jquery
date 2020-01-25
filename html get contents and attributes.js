$(document).ready(function(){
    $("#btn1").click(function(){
        alert($("p").text());
    });
    $("#btn2").click(function(){
        alert($("p").html());
    });
});