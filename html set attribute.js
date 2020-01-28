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
    var src = $("img").attr("src");
        alert(src); //첫번째 속성값만 보여줌
        //속성검사

        //속성추가
        /*$("img").attr({
            "width" : "400" ,
            "height" : "300"
        });*/

        //속성추가 2번째
        $("img").attr("width",function(index) {
            return (index + 1) * 100;
        });
    //data h5의 data-index를 삭제하라
    $("h5").removeAttr("data-index");

  });