(function($){
    $(".slider").each(function () {
        var obj = $(this);
        $(obj).append("<div class='nav'></div>");
        $(obj).find("li").each(function () {
            $(obj).find(".nav").append("<span rel='"+$(this).index()+"'></span>");
            $(this).addClass("slider"+$(this).index());
        });
        $(obj).find("span").first().addClass("on");
    });
    function sliderJS (obj, sl) {
        var ul = $(sl).find("ul");
        var bl = $(sl).find("li.slider"+obj);
        var step = $(bl).width();
        $(ul).animate({marginLeft: "-"+step*obj}, 500);
    }
$(document).on("click", ".slider .nav span", function() {
    var sl = $(this).closest(".slider");
    $(sl).find("span").removeClass("on");
    $(this).addClass("on");
    var obj = $(this).attr("rel");
    sliderJS(obj, sl);
    return false;
});
})(jQuery);

(function($){
    $(".slider-wrap").each(function () {
        var obj = $(this);
        $(obj).append("<div class='nav2'></div>");
        $(obj).find(".slider-revs>div").each(function () {
            $(obj).find(".nav2").append("<span rel='"+$(this).index()+"'></span>");
            $(this).addClass("slider-wrap"+$(this).index());
        });
        $(obj).find("span").first().addClass("on");
    });
    function sliderJS (obj, sl) {
        var ul = $(sl).find(".slider-revs");
        var bl = $(sl).find(".slider-rev"+obj);
        var step = $(bl).width();
        $(ul).animate({marginLeft: "-"+step*obj}, 500);
    }
    $(document).on("click", ".slider-wrap .nav2 span", function() {
        var sl = $(this).closest(".slider-wrap");
        $(sl).find("span").removeClass("on");
        $(this).addClass("on");
        var obj = $(this).attr("rel");
        sliderJS(obj, sl);
        return false;
    });

})(jQuery);

$(document).ready( function(){
    $('.group1').hover(
        function(){
            $('.gr1').animate({'opacity': 'show'}, 300);
        },
        function() {
            $('.gr1').animate({'opacity': 'hide'}, 300);
        });
    $('.group2').hover(
        function(){
            $('.gr2').animate({'opacity': 'show'}, 300);
        },
        function() {
            $('.gr2').animate({'opacity': 'hide'}, 300);
        });
    $('.group3').hover(
        function(){
            $('.gr3').animate({'opacity': 'show'}, 300);
        },
        function() {
            $('.gr3').animate({'opacity': 'hide'}, 300);
        });
    $('.group4').hover(
        function(){
            $('.gr4').animate({'opacity': 'show'}, 300);
        },
        function() {
            $('.gr4').animate({'opacity': 'hide'}, 300);
        });
    $('.group5').hover(
        function(){
            $('.gr5').animate({'opacity': 'show'}, 300);
        },
        function() {
            $('.gr5').animate({'opacity': 'hide'}, 300);
        });
    $('.group2_1').hover(
        function(){
            $('.gr2_1').animate({'opacity': 'show'}, 300);
        },
        function() {
            $('.gr2_1').animate({'opacity': 'hide'}, 300);
        });
    $('.group2_2').hover(
        function(){
            $('.gr2_2').animate({'opacity': 'show'}, 300);
        },
        function() {
            $('.gr2_2').animate({'opacity': 'hide'}, 300);
        });
    $('.group2_3').hover(
        function(){
            $('.gr2_3').animate({'opacity': 'show'}, 300);
        },
        function() {
            $('.gr2_3').animate({'opacity': 'hide'}, 300);
        });
    $('.group2_4').hover(
        function(){
            $('.gr2_4').animate({'opacity': 'show'}, 300);
        },
        function() {
            $('.gr2_4').animate({'opacity': 'hide'}, 300);
        });
    $('.group2_5').hover(
        function(){
            $('.gr2_5').animate({'opacity': 'show'}, 300);
        },
        function() {
            $('.gr2_5').animate({'opacity': 'hide'}, 300);
        });
    $('.group2_6').hover(
        function(){
            $('.gr2_6').animate({'opacity': 'show'}, 300);
        },
        function() {
            $('.gr2_6').animate({'opacity': 'hide'}, 300);
        });
    $('.group2_7').hover(
        function(){
            $('.gr2_7').animate({'opacity': 'show'}, 300);
        },
        function() {
            $('.gr2_7').animate({'opacity': 'hide'}, 300);
        });

    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

    $('.menu-button').click(function(){
        if($(this).hasClass('active')){
            $('nav ul').slideUp();
            $(this).removeClass('active');
        } else {
            $('nav ul').slideDown();
            $(this).addClass('active');
        }
    });



    $(function() {
        var newSelection = "";
        $(".years ul li a").click(function(){
            $(".img-group").fadeTo(200, 0.10);
            $(".years ul li a").removeClass("selected");
            $(this).addClass("selected");
            newSelection = $(this).attr("rel");
            $(".gimg").not("."+newSelection).slideUp();
            $("."+newSelection).slideDown();
            $(".img-group").fadeTo(600, 1);
        });
    });


    $(".fancybox").fancybox({
        'hideOnContentClick' : true,
        'transitionIn' : 'none',
        'transitionOut' : 'none'
    });
    $('.width').fancybox(function(){
        $(".fancybox").trigger(fancybox);
    })

})(jQuery);




