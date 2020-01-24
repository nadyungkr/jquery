$(document).ready(function(){
    $("button").click(function(){
        $("#box-1").animate({
            left:'250px',
            opacity:'.9',
            height:'150px',
            width:'150px'
        });
    });
    $("h2").click(function(){
        $("#box-2").animate({
            right:'50px',
            width:'+=120px',
            height:'+=120px'
        });
    });
    $("h3").click(function(){
        $("#box-3").animate({
            width:'toggle'
        });
    });
    $("h1").click(function(){
        var rutine = $("#box-4");
        rutine.animate({
            height:'80px', width:'80px', opacity:".4"}, "slow");
        rutine.animate({
            height:'160px', width:'160px', opaicty:"1"}, "slow");
        rutine.animate({
            height:'270px', width:'270px', opacity:".4"}, "slow");
        rutine.animate({
            height:'40px', width:'40px', opacity:"1"}, "slow");
    });
});