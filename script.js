$(".button.menu").click(function(){
    $(".menu.container").toggleClass("hidden");
    $(".menu.container").toggleClass("show");
    if ( $(".container").hasClass("hidden")){
        $(".menu.container .button.vert").css({
            transform: "scaleY(0)",
            transformOrigin: "bottom"
        });
        $(".menu.container .button.hor").css({
            transform: "scaleX(0)",
            transformOrigin: "left"
        });
        setTimeout(function(){
            $(".menu.container").hide();
        }, 1700);
    }else{
        $(".menu.container").show();
        $(".menu.container .button.vert").css({
            transform: "scaleY(1)",
            transformOrigin: "top"
        });
        $(".menu.container .button.hor").css({
            transform: "scaleX(1)",
            transformOrigin: "right"
        });
    }

});

