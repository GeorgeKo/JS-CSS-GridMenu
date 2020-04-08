$(".button.menu").click(function(){
    $(".container").toggleClass("hidden");
    $(".container").toggleClass("show");
    if ( $(".container").hasClass("hidden")){
        setTimeout(function(){
            $(".menu.container").hide();
        }, 1800);
    }else{
        setTimeout(function(){
        $(".menu.container").show();
        }, 200);
    }
});

