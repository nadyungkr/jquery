/*$(function(){
    $("h1").on("click",function(){
        $(this).html(function(index,html){
            return html + "+";
        });
    });
});*/ //첫번째 방법 $(selector).on(eventName,function(event){});

/*$(function(){
    $("h1").on("click",function(){
        $(this).html(function(index,html){
            return html + "+";
        });
    });
    $("h1").on({
        mouseenter:function(){
            $(this).addClass("reverse");
        },
        mouseleave:function(){
            $(this).removeClass("reverse");
        }
    });
});*/ // 두번째 방법 mouseenter:function(){}; mouseleave:function(){};

$(function(){
    $("h1").on("click",function(){
        $(this).html(function(index,html){
            return html + "+";
        });
    });
    $("h1").hover(function(){
        $(this).addClass("reverse");
    }, function(){
            $(this).removeClass("reverse");
    });
}); //세번째 방법 $(selector).hover(function(){},function(){});
