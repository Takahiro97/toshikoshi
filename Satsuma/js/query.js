$(function(){
    //メニューサンプルがクリックされた時
    var submenu = $(".submenu > li");//submenuを取得
    var body = $("bosy");

    submenu.click(function(){
        //クリックされた要素のhrefを取得
        var menu = $(this).attr("href");
        //スクロール位置
        var scroll_point = $(menu).offset().top;

        body.animate({
            scrollTop: scroll_point
        }, 300);

    });
});