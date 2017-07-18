$(document).ready(function(){
    var change = true;
    $(window).scroll(function(){
        var scrollPos = $(document).scrollTop();
        console.log(scrollPos);
        if(scrollPos >= 100 && scrollPos <= 780 && change == true) {
            $('nav').slideUp('slow');
        }
        else{
            $('nav').slideDown('fast');
        }

        if (scrollPos > 780 && change ==true){
                $('nav').addClass('nav2');
                $('nav li a').addClass('a2');
                change = false;
        }
        if(scrollPos < 770 && change == false){
            $('nav').removeClass('nav2');
            $('nav li a').removeClass('a2');
            change = true;
        }

    });
});