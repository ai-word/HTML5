    // jQ中 ajax的封装
    // $.ajax({
    // 	url:"",
    // 	method:"POST",
    // 	data:{name:"张三"},
    // 	async:true;
    // 	success:function(data){
    // 		// 操作数据
    // 	}
    // })

    function ajax(opt) {
        opt.url = opt.url || "";//默认值 如果没设置则为空
        opt.method = opt.method || "POST";
        opt.data = opt.data || {};
        opt.async = opt.async || true;
        if (XMLHttpRequest) {//new Ajax
            var xhr = new XMLHttpRequest();
        } else {
            var xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
        //将对象格式下的 opt.data转成字符串name=张三&age=18格式
        var arrData = [];
        for (var i in opt.data) {
            arrData.push(i + "=" + opt.data[i]);//转成name=张三格式 数组
        }
        var data = arrData.join("&");//数组转换成字符串 用&连接

        if (opt.method.toupperCase() == "GET") {//GET方式下
            xhr.open("GET", opt.url + "?key=" + Math.random() + "&" + data, opt.async);
            xhr.send();
        } else if (opt.method.toupperCase() == "POST") {//POST方式下
            xhr.open("POST", opt.url, opt.async);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send(data);
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {//数据接收成功
                //数据响应
                opt.success(xhr.responseText);//success函数 写如何操作接收到的数据
            } else if(xhr.status==404){
                alert("数据接收失败。")
            }
        }
    }


    //调用
    ajax({
            //不传url  默认为空
            method:"GET",
            data:{name:"张三",age:18},
            async:true,
            success:function (data) {
                console.log("张三的接收成功");
            }
        });
        ajax({
            //不传url  默认为空
            method:"POST",
            data:{name:"李四",age:18},
            async:false,
            success:function (data) {
                console.log("李四的接收成功");
            }
        })