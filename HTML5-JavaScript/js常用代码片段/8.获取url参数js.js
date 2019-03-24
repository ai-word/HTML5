//网上比较经典的js获取url中的参数的方法
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if ( r != null ){
       return unescape(r[2]);
    }else{
       return null;
    }
 }
 //但是在使用的过程中，发现其在获取中文参数的时候，获取到的值是乱码的
 //解决办法:将解码方式unscape换为decodeURI
 //原因:浏览器会将url中的中文参数进行encodeURI编码，所以要通过js使用decodeURI进行解码
