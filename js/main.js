$(function(){
    
    'use strict';

    $(window).scroll(function (){
        var navbar = $('.navbar');

        if ($ (window).scrollTop() >= navbar.height()){
            navbar.addClass('scrolled');
        } else{
            navbar.removeClass('scrolled');
        }

        // Condition ? true : false;
       // $ (window).scrollTop() >= navbar.height() ? navbar.addClass('scrolled') : navbar.removeClass('scrolled');
    });

    // Selected Tabs
    $('.tab-switch li').click(function (){
        
        // Add Selected Class To Be Active Link
        $(this).addClass('selected').siblings().removeClass('selected');
        
        //Hide All Divs
        $('.tabs-section .tabs-content > div').hide();

        // Show Div Connected With This link
        $('.' + $(this).data('class')).show();
    });
    
    // Scrolling by id
    $("a").on('click', function(event){
        
        $('html, body').animate({
            scrollTop: $($.attr(this,'href')).offset().top
        }, 600);
    })
});
