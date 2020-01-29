$(function(){
    $("h1").click(function(){
        $(this).html("click");
            alert("이벤트가 발생했습니다.");
            //이벤트 제거
            $(this).off();
    });
});