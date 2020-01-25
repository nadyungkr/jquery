$(document).ready(function(){
    $("#btn1").click(function(){
      alert($("p").css("background-color"));
    });
    $("#btn2").click(function(){
        $("p").css("background-color", "yellow");
    });
    $("button").click(function(){
        $("p").css({"background-color": "yellow", "font-size": "200%"});
    });
  });