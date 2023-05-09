let left = document.getElementById('left-items');
let pageBox = document.getElementById('left-items-content'); //内容区域

left.onmouseover = function () {
    pageBox.style.display = 'block'
    pageBox.style.zIndex = "2";
    $(pageBox).load('left.html');
}

left.onmouseout = function () {
    pageBox.style.display = 'none'
}
pageBox.onmouseover = function () {
    pageBox.style.display = 'block'
}
pageBox.onmouseout = function () {
    pageBox.style.display = 'none'
}
