$(document).ready(function(){
    var html = $("h1").html(); // 아무 내용 없으면 내용물 검사
        alert(html); //첫번째 h1의 내용만 나옴
    var text = $("h1").text(); // 아무 내용 없으면 내용물 검사
        alert(text); //모든 h1의 내용이 나옴
        //html()- 글자와 관련된 모든 기능 html 인식
        //text()-글자와 관련된 모든 기능, html 인식 못함
});