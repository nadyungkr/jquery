$(document).ready(function(){
    $("#p1").mouseenter(function(){
        $(this).hide();
    });
    $("#p2").mouseleave(function(){
        $(this).hide();
      });
    $("#p3").mousedown(function(){
        $(this).hide();
    });
    $("#p4").mouseup(function(){
        $(this).hide();
    });
    $("#p5").mousemove(function(){
        $(this).hide();
    });
    $("#p6").mouseout(function(){
        $(this).hide();
    });
    $("#p7").mouseover(function(){
        $(this).hide();
    });
    $("#p8").hover(function(){
        $(this).hide();
    });
    $("#p9").focus(function(){
        $(this).css("background-color","yellow");
    });
    $("#a").blur(function(){
        $(this).css("background-color","green");
    });
  });
