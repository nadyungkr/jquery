$(function(){
    $("h1").click(function(){
        $(this).html(function(index,html){
            return html + "★";
        });
    });
    //1초 마다 함수 실행
    setInterval(function(){
        $("h1").trigger("click");
    },1000);
});