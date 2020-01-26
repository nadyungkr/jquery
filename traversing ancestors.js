$(document).ready(function(){
  $("#btn1").click(function(){
    $(".span1").parent().css({"color": "red", "border": "2px solid red"});
  });
  $("#btn2").click(function(){
    $(".span2").parents().css({"color": "red", "border": "2px solid red"});
  });
  $("#btn3").click(function(){
    $(".span3").parentsUntil(".div1").css({"color":"red","border":"2px solid red"});
  });
});