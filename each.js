 /*$(document).ready(function(){
        $("h1").each(function(index,item){
            $(this).addClass("bg-" + index);

        });

    });*/
    $(document).ready(function(){
        $("h1").addClass(function(index) {
            return "bg-" + index;
        });
    });