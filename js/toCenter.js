$(function () {
    //页面滚动到中间两个div向中间靠拢
    function toCenter(el) {
        let elOffTop = $(el).offset().top;//offset()方法返回或设置匹配元素相对于文档的偏移（位置）
        let halfWinHeight = ($(window).height()) / 2;//height()方法返回元素的高度。
        /*当用户滚动指定的元素时，会发生 scroll 事件。scroll 事件适用于所有可滚动的元素和 window 对象（浏览器窗口）。
        scroll() 方法触发 scroll 事件，或规定当发生 scroll 事件时运行的函数。*/
        $(window).scroll(function () {
            let top = $(window).scrollTop();//scrollTop() 方法返回或设置匹配元素的滚动条的垂直位置。
            if (top > elOffTop - halfWinHeight) {//这个元素在浏览器上的高度减去这个元素的高度
                let obj1 = document.getElementsByClassName("good_left");
                let obj2 = document.getElementsByClassName("good_right");
                obj1[0].style.left = 0 + 'px';
                obj1[0].style.opacity = '1';//opacity 设置不透明度。
                obj2[0].style.right = 0 + 'px';
                obj2[0].style.opacity = '1';
            }
        });
    }
    toCenter(".good_left");
    toCenter(".good_right");
});