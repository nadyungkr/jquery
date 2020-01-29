$(function(){
    $(".outer").mouseover(function(){
        //아우터 클래스에 마우스가 올라가면 body 뒤에 mouseover라고 적기
        $("body").append("<h4>MOUSEOVER</h4>");
    }).mouseenter(function(){
        $("body").append("<h4>MOUSEENTER</h4>");
    });
});