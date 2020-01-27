$(document).ready(function(){
    $("#btn1").click(function(){
      $("#div1").load("animate.html");
    });
    $("#btn2").click(function(){
        $("#div2").load("animate.html", function(responseTxt, statusTxt, xhr){
          if(statusTxt == "success")
            alert("External content loaded successfully!");
          if(statusTxt == "error")
            alert("Error: " + xhr.status + ": " + xhr.statusText);
        });
    });
  });