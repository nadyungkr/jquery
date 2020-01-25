$(document).ready(function(){
    $("#btn1").click(function(){
      $("#git").attr("href", "https://www.github.com/nadyungkr");
      //$("p").text("나듕 깃허브로 바로가기");
    });
    $("#btn2").click(function(){
      $("#nd").attr({
        "href" : "https://www.github.com/nadyungkr",
        "title" : "nadyungkr github"
      });
    });
    $("#btn3").click(function(){
      $("#ndkr").attr("href", function(i, origValue){
        return origValue + "/nadyungkr/"; 
      });
    }); 
  });