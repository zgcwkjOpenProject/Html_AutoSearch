//==>适应手机端的界面
var domContent = document.querySelector('html');//获取整个页面（dom）
var searctPendantPoint = document.getElementsByClassName('search-pendant-point')[0];//获取圆点（dom）
EventUtil.bindEvent(domContent, 'swipeleft', function () {
    searctPendantPoint.checked = true;
});//绑定左滑事件
EventUtil.bindEvent(domContent, 'swiperight', function () {
    searctPendantPoint.checked = false;
});//绑定右滑事件
//==>适应手机端的界面
//==>
//==>监听按键事件
document.onkeydown = function (e) {
    var e = window.event ? window.event : e;
    //回车键登录
    if (e.keyCode == 13) goSearch();
}
//==>监听按键事件
//==>
//==>地址栏修改
function goURL(title, url) {
    history.pushState(null, title, url);
    document.title = title
}
//==>地址栏修改
//==>
//==>自动跳转到搜索界面
function goPage() {
    var searchValue = geQueryString("q");
    if (searchValue) {
        var searchInput = document.getElementsByClassName('search-input')[0];
        searchInput.value = window.decodeURI(searchValue);
        goSearch();
    }
}
goPage();
//==>自动跳转到搜索界面
//==>
//==>搜索事件
function goSearch() {
    var searchInput = document.getElementsByClassName('search-input')[0];
    var body = document.querySelector('body');
    if (searchInput.value) {
        body.classList.add("search-page");
        goURL("搜索 " + searchInput.value, "?q=" + searchInput.value);//地址栏修改
    } else {
        body.classList.remove("search-page");
    }
}
//==>搜索事件