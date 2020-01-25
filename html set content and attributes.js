$(document).ready(function(){
    $("#btn1").click(function(){
        $("#test1").text("안녕하세요. 나둥이는 제이쿼리 연습중")
    });
    $("#btn2").click(function(){
        $("#test2").html("<b>텍스트를 굵게 변환해보았어요</b>")
    });
    $("#btn3").click(function(){
        $("#test3").val("Nadyungkr")
    });
    $("#btn4").click(function(){
        $("#test4").text(function(i, origText){
            return origText + "새로운 텍스트 안녕! (index: " + i + ")";
        });
    });
    $("#btn4-1").click(function(){
        $("#test4-1").html(function(i, origText){
            return origText + "새로운 html입니다 <b>안녕</b> (index: " + i + ")";
        });
    });
});