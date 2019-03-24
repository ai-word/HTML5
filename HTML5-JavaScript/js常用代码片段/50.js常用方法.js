/** 截取最后一个字符 */
str.slice(0, -1);

/** 将JS对象转换为JSON字符串 */
JSON.stringify(obj);

/** 将JSON字符串转换为JS对象 */
JSON.parse(obj);

// url参数json化.js
function urljson(url) {
    var reg_url = /^[^\?]+\?([\w\W]+)$/, //匹配url连接后的参数部分
        //exec()方法匹配字符串中的元素，返回一个数组，0项表示全部匹配的内容，1项表示正则的（）内匹配的内容。
        reg_para = /([^&=]+)=([\w\W]*?)(&|$|#)/g, //匹配参数key=value表达式
        arr_url = reg_url.exec(url), //返回匹配结果
        ret = {}; //get the result object
    if (arr_url && arr_url[1]) { //如果传入的是一个url,且url有参数
        var str_para = arr_url[1], //参数部分的赋值
            result;
        while ((result = reg_para.exec(str_para)) != null) {
            ret[result[1]] = result[2];
        }
    }
    return ret;
}
var url="http://www.baidu.com?name=wujing&id=1&hello=hehe";
console.log(urljson(url));