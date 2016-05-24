(function($){
    $.fn.scrollingTo = function( opts ) {
        var defaults = {
            animationTime : 1000,
            easing : '',
            callbackBeforeTransition : function(){},
            callbackAfterTransition : function(){}
        };

        var config = $.extend( {}, defaults, opts );

        $(this).click(function(e){
            var eventVal = e;
            e.preventDefault();

            var $section = $(document).find( $(this).data('section') );
            if ( $section.length < 1 ) {
                return false;
            };

            if ( $('html, body').is(':animated') ) {
                $('html, body').stop( true, true );
            };

            var scrollPos = $section.offset().top - 80;

            if ( $(window).scrollTop() == scrollPos ) {
                return false;
            };

            config.callbackBeforeTransition(eventVal, $section);

            $('html, body').animate({
                'scrollTop' : (scrollPos+'px' )
            }, config.animationTime, config.easing, function(){
                config.callbackAfterTransition(eventVal, $section);
            });
        });
    };
}(jQuery));



jQuery(document).ready(function(){
	"use strict";
	new WOW().init();


(function(){
 jQuery('.smooth-scroll').scrollingTo();
}());

});


$(document).ready(function(){
    $('#show_h1').on('click',function(){
        if($('#show_2').css('display') != 'none'){
            $('#show_2').hide();
        }
        if($('#show_3').css('display') != 'none'){
            $('#show_3').hide();            
        }
        if($('#show_4').css('display') != 'none'){
            $('#show_4').hide();            
        }
        if($('#show_1').css('display') == 'none'){
            $('#show_1').fadeIn(100);
            $('html, body').animate({
                'scrollTop': $('#show_1').position().top - 80
            });
        }
    });

    $('#show_h2').on('click',function(){
        if($('#show_1').css('display') != 'none'){
            $('#show_1').hide();
        }
        if($('#show_3').css('display') != 'none'){
            $('#show_3').hide();            
        }
        if($('#show_4').css('display') != 'none'){
            $('#show_4').hide();            
        }
        if($('#show_2').css('display') == 'none'){
            $('#show_2').fadeIn();
            $('html, body').animate({
                'scrollTop': $('#show_2').position().top - 80 
            });
        }
    });

    $('#show_h3').on('click',function(){
        if($('#show_2').css('display') != 'none'){
            $('#show_2').hide();
        }
        if($('#show_1').css('display') != 'none'){
            $('#show_1').hide();            
        }
        if($('#show_4').css('display') != 'none'){
            $('#show_4').hide();            
        }
        if($('#show_3').css('display') == 'none'){
            $('#show_3').fadeIn();
            $('html, body').animate({
                'scrollTop': $('#show_3').position().top - 80
            });
        }
    });

    $('#show_h4').on('click',function(){
        if($('#show_2').css('display') != 'none'){
            $('#show_2').hide();
        }
        if($('#show_3').css('display') != 'none'){
            $('#show_3').hide();            
        }
        if($('#show_1').css('display') != 'none'){
            $('#show_1').hide();            
        }
        if($('#show_4').css('display') == 'none'){
            $('#show_4').fadeIn();
            $('html, body').animate({
                'scrollTop': $('#show_4').position().top - 80
            });
        }
    });
});




$(document).ready(function(){




    $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
            $(".navbar-brand a").css("color","#fff");
            $("#top-bar").removeClass("animated-header");
        } else {
            $(".navbar-brand a").css("color","inherit");
            $("#top-bar").addClass("animated-header");
        }
    });

    $("#clients-logo").owlCarousel({
 
        itemsCustom : false,
        pagination : false,
        items : 5,
        autoplay: true,

    })

});



// fancybox
$(".fancybox").fancybox({
    padding: 0,

    openEffect : 'elastic',
    openSpeed  : 450,

    closeEffect : 'elastic',
    closeSpeed  : 350,

    closeClick : true,
    helpers : {
        title : { 
            type: 'inside' 
        },
        overlay : {
            css : {
                'background' : 'rgba(0,0,0,0.8)'
            }
        }
    }
});






 




