$('.scroll_top').click(function(){$('html,body').animate({scrollTop: '0px'}, 800);});

$(window).scroll(function(){
    if($(window).scrollTop()>100){  //距顶部多少像素时，出现返回顶部按钮
        $("#side-bar .gotop").fadeIn();
    }
    else{
        $("#side-bar .gotop").hide();
    }
});
//滚动条在底部
$(function(){
    $('body').scrollTop( $('body')[0].scrollHeight );
})