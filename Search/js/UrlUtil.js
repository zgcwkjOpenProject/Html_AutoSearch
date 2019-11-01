/**
 * 通过JS获取参数
 * var 获取地址上变量的值 = getQueryString(地址上变量名);
**/
//通过路径获取传递的参数
function geQueryString(name) {
    var result = window.location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
    if (result == null || result.length < 1) {
        return "";
    }
    return result[1];
}