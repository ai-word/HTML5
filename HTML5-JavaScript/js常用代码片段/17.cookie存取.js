/*
 * cookieName：存的值名字
 * cookieVal： 存的值
 * lasttime： 过期时间
 * 使用方法:       setCookie('friend', '大表哥', 2.5 * 60 * 1000);
 *                 getCookie("friend");
 *                 delCookie ('friend');
 */
//存储cookie
function setCookie(cookieName, cookieVal, lasttime) {
    var time = new Date().getTime(); //获取当前的日期时间
    if (lasttime) {
        time += lasttime;
    } else { //15分钟过期
        time += 15 * 60 * 1000;
    }
    time = new Date(time);
    //再加上一个编码
    document.cookie = cookieName + "=" + cookieVal + ";expires=" + time + ';path=/';
}
//取cookie，如果没有返回null
function getCookie(cookieName) {
    var strs = document.cookie; //获取所有cookie
    var cookies = strs.split('; '); //将cookie字符串拆分数组
    for (var i = 0; i < cookies.length; i++) {
        if (cookies[i].indexOf(cookieName + '=') === 0) { //代表存在一个cookie
            return cookies[i].split('=')[1];
        }
    }
}
//删除cookie
function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 60 * 60 * 1000);
    var cval = getCookie(name);
    if (cval !== null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString() + ";path=/";
}
