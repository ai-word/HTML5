$(document).ready(function () {
    //平台、设备和操作系统
    var system = {
        win: false,
        mac: false,
        xll: false,
        ipad: false
    };
    //检测平台
    var p = navigator.platform;
    system.win = p.indexOf("Win") == 0;
    system.mac = p.indexOf("Mac") == 0;
    system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
    system.ipad = (navigator.userAgent.match(/iPad/i) != null) ? true : false;
    //跳转语句，如果是PC访问就自动跳转到所要访问的页面http://www.电脑.com
    if (system.win || system.mac || system.xll || system.ipad) {
        console.log("电脑");
        $("#headnav").css("display", "block");

    } else {
        console.log("手机");
        $("#headnav").css("display", "none");
    }
});



//方法1：运行当页面的时候，执行到js会判断来自于移动端还是pc端，如果是移动端则跳转制定链接地址，，这样在手机端会有额外的不必要浪费的加载时间
var browser={
    versions:function(){
        var u = navigator.userAgent, app = navigator.appVersion;
        return {//移动终端浏览器版本信息
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
            iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
        };
    }(),
    language:(navigator.browserLanguage || navigator.language).toLowerCase()
}

if(browser.versions.mobile || browser.versions.ios || browser.versions.android ||
    browser.versions.iPhone || browser.versions.iPad){
    window.location = "http://m.baidu.com";
}

console.log("language"+browser.language);
console.log('是否为移动端'+ browser.versions.mobile);

//方法二

//设备检测

function detectmob() {
    if( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
    ){
        return true;
    }
    else {
        return false;
    }
}
