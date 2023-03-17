let rightValue = -300;

$(".btn-gnavi").on("click",function(){
    if($(".btn-gnavi").hasClass("open")){
        rightValue = -300;
        $(this).removeClass("open");
    } else {
        rightValue = 0;
        $(this).addClass("open");
    }
    $("#global-navi").stop().animate({
        right:rightValue
    },200);
});