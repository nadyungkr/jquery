$(function(){
    $("#div").on("click",function(e){
        $("#console").append("<br> div클릭");
    });
    $("#p").on("click",function(e){
        $("#console").append("<br> p클릭");
        //상위로 이벤트가 전파되지 않도록 중단한다
        e.stopPropagation();
    });
    $("#span").on("click",function(e){
        $("#console").append("<br> span클릭");

        //상위 뿐 아니라 같은 레벨로도 이벤트가 전파되지 않도록 중단한다.
        e.stopImmediatePropagation();
        //return false;
    });
    $("#span").on("click",function(e){
        $("#console").append("<br> span클릭");

        //상위로 이벤트가 전파되지 않도록 중단한다
        e.stopPropagation();
        //return false;
    });
});