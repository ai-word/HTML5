/** 常用请求格式 */
$.ajax({
    type: "get",               //请求的方式，可以为post、put、
    url: "",                   //请求的地址
    async: true,               //是否异步请求
    dataType: "json",          //发送至服务器的数据编码
    success: function(data){}, //请求成功的回调
    error: function(data){}    //请求失败的回调
});

$.get(url, data, success(response,status,xhr), dataType);

$.post(url, data, success(data, textStatus, jqXHR), dataType);

$.load(url, data, function(response, status, xhr));