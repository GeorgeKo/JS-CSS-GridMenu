$(".button.menu").click(function(){
    $(".container").toggleClass("hidden");
    $(".container").toggleClass("show");
    if ( $(".container").hasClass("hidden")){
        setTimeout(function(){
            $(".menu").hide();
        }, 1800);
    }else{
        $(".button:not(.menu)").show();
    }
});

