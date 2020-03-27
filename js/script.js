$('#toogle-menu').click(function(){
    $(this).next().slideToggle();
});
$(window).resize(function(){
    if($(document).width() > 767){
        $('.menu').css({'display' : 'flex'});
        $('section').css({'min-height': $(document).width()- 88 });
    }
    if($(document).width() < 768){
        $('.menu').css({'display' : 'none'});
        $('section').css({'min-height': $(document).width()- 96 });
    }
})
