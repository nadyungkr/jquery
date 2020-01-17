/*eq란? 특정위치에 존재하는 문서 객체 선택
    eq(0)   0번째 객체 선택
    eq(-1)  뒤를 기준으로 0번째
    eq(1)

*/
$(document).ready(function(){
    $("h1").first().css("background","pink");
    $("h1").eq(1).css("background","#ff0");
    $("h1").last().css("background","red");

});