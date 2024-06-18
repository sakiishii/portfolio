$(function(){
	var pagetop = $('.pagetop');   
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {  //100pxスクロールしたら表示
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500); //0.5秒かけてトップへ移動
        return false;
    });
	  
});