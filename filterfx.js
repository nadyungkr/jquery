$(document).ready(function(){
            $("h1").filter(function(index){
                return index % 3 == 0; //index를 3으로 나눈 나머지가 0과 같으면 실행해라
            }).css({
                background:"#000",
                color:"#fff"
            });
        });