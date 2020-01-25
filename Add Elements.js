$(document).ready(function(){
    $("#btn1").click(function(){
        $("p").append("<b>텍스트 추가</b>");
    });
    $("#btn2").click(function(){
        $("ol").append("<li>List item 추가</li>")
    });
    $("#btn3").click(function(){
        $("p").prepend("<b>뿅</b>");
    });
    $("#btn4").click(function(){
        $("ol").prepend("<li>추가</li>")
    });
});
function appendText() {
    var txt1 = "<p>뿅</p>";
    var txt2 = $("<p></p>").text("뿅");
    var txt3 = document.createElement("p");
    txt3.innerHTML = "뿅";
    $("h3").append(txt1, txt2, txt3);
}
