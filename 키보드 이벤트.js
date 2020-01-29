$(function(){
    $("textarea").keyup(function(){
        var inputLength = $(this).val().length;
        var remain = 150 - inputLength;
        $("h1").html(remain);
    });
});