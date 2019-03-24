//        function GetRequest() {
//                 var url = location.search; //获取url中"?"符后的字串
//                 var theRequest = new Object();
//                 if (url.indexOf("?") != -1) {
//                     var str = url.substr(1);
//                     strs = str.split("&");
//                     for (var i = 0; i < strs.length; i++) {
//                         theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
//                     }
//                 }
//                 return theRequest;
//             }
// //-------------------------------获取地址栏中带来的参数------------------------------------------//

// //1.正则法：(常用)

// //例：地址为：http://dl.jxqp.cn?name=1

// //截取url传递的参数
// function GetQueryString(name) {
//     var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
//     var r = window.location.search.substr(1).match(reg);
//     if (r!=null) return (r[2]); return null;
// }

// //调用方法：
// console.log(GetQueryString('name'))

// //2.数组法(不常用代码太多不易懂)
// function UrlSearch() {
// var url,value;
// var str=location.href; //取得整个地址栏
// var num=str.indexOf("?")
// str=str.substr(num+1); //取得所有参数   stringvar.substr(start [, length ]
// var arr=str.split("&"); //各个参数放到数组里
// for(var i=0;i < arr.length;i++){
// num=arr[i].indexOf("=");
// if(num>0){
//     url=arr[i].substring(0,num);
//     value=arr[i].substr(num+1);
//     this[url]=value;
//     }
// }
// }
// var Request=new UrlSearch(); //实例化
// var slide = Request.slide

// //----------------有关URL参数获取以及页面跳转与刷新总结--------------------------//

// //1.js页面刷新：location.reload()
// //2.js页面跳转：window.location.href="URL";
// //3.获取url最后一个斜杠后面的参数
// var href = window.location.pathname
// var index = href .lastIndexOf("\/");
// href  = href .substring(index + 1, href .length);
// console.log(href)



// /**

//  * 解析url参数

//  * @example ?id=12345&a=b

//  * @return Object {id:12345,a:b}

//  */
// function urljson(url) {
//     var reg_url = /^[^\?]+\?([\w\W]+)$/, //匹配url连接后的参数部分
//         //exec()方法匹配字符串中的元素，返回一个数组，0项表示全部匹配的内容，1项表示正则的（）内匹配的内容。
//         reg_para = /([^&=]+)=([\w\W]*?)(&|$|#)/g, //匹配参数key=value表达式
//         arr_url = reg_url.exec(url), //返回匹配结果
//         ret = {}; //get the result object
//     if (arr_url && arr_url[1]) { //如果传入的是一个url,且url有参数
//         var str_para = arr_url[1], //参数部分的赋值
//             result;
//         while ((result = reg_para.exec(str_para)) != null) {
//             ret[result[1]] = result[2];
//         }
//     }
//     return ret;
// }
// var url="http://www.baidu.com?name=wujing&id=1&hello=hehe";
// console.log(urljson(url))
var url = window.location.href;
console.log(url);