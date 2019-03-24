/*
* 智能机浏览器版本信息:
*
*/
var browser = {
versions: function() {
var u = navigator.userAgent, app = navigator.appVersion;
return {//移动终端浏览器版本信息
trident: u.indexOf('Trident') > -1, //IE内核
presto: u.indexOf('Presto') > -1, //opera内核
webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
iPad: u.indexOf('iPad') > -1, //是否iPad
webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
};
}(),
language: (navigator.browserLanguage || navigator.language).toLowerCase()
}

if (browser.versions.ios || browser.versions.iPhone || browser.versions.iPad) {
    window.location="https://itunes.apple.com/xxx";
}
else if (browser.versions.android) {
    window.location="http://xxx/xxx.apk";
}

// document.writeln("语言版本: " + browser.language);
// document.writeln(" 是否为移动终端: " + browser.versions.mobile);
// document.writeln(" ios终端: " + browser.versions.ios);
// document.writeln(" android终端: " + browser.versions.android);
// document.writeln(" 是否为iPhone: " + browser.versions.iPhone);
// document.writeln(" 是否iPad: " + browser.versions.iPad);
// document.writeln(navigator.userAgent);

 /**
 * 初始化加载程序
 */
window.onload = function(){
    console.log(isMobile());
    console.log(isWechat());
    console.log(getOsVersion());
}

/**
 * 判断是不是移动端
 * @returns {boolean}
 */
function isMobile() {
    var userAgentInfo = navigator.userAgent;

    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

/**
 * 判断是不是微信浏览器
 * @returns {boolean}
 */
function isWechat() {
    var ua = navigator.userAgent.toLowerCase();

    if(ua.match(/MicroMessenger/i)=="micromessenger")
        return true;
    else
        return false;
}

/**
 * 判断浏览器所在机器操作系统版本
 */
function getOsVersion(){
    var u = navigator.userAgent,version = '';
    if (u.indexOf('Mac OS X') > -1) {
        //ios
        var regStr_saf = /OS [\d._]*/gi;
        var verinfo = u.match(regStr_saf);
        version = (verinfo + "").replace(/[^0-9|_.]/ig,'').replace(/_/ig,'.');
    } else if (u.indexOf('Android') > -1
        || u.indexOf('Linux') > -1) {
        //android
        version = u.substr(u.indexOf('Android') + 8, u.indexOf(";", u.indexOf("Android")) - u.indexOf('Android') - 8);
    } else if (u.indexOf('BB10') > -1) {
        //黑莓bb10系统
        version = u.substr(u.indexOf('BB10') + 5, u.indexOf(";", u.indexOf("BB10")) - u.indexOf('BB10') - 5);
    } else if (u.indexOf('IEMobile')) {
        //windows phone
        version = u.substr(u.indexOf('IEMobile') + 9, u.indexOf(";", u.indexOf("IEMobile")) - u.indexOf('IEMobile') - 9);
    }
    return version;
}

