$('#toogle-menu').click(function(){
    $(this).next().slideToggle();
});
$(window).resize(function(){
    if($(document).width() > 767){
        $('.menu').css({'display' : 'flex'});
    }
    if($(document).width() < 768){
        $('.menu').css({'display' : 'none'});
    }
})