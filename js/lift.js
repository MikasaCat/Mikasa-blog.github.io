var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/img/trhx2.png");
        document.title = 'φ(>ω<*) 别走呀,再逛逛吧~';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/img/trhx2.png");
        document.title = 'ヾ(Ő∀Ő3)ノ抓到你啦！' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});