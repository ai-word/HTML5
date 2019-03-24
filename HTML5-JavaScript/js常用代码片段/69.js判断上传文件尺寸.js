<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>简单的html5 File测试 for pic2base64</title>

<script>
window.onload = function(){
var input = document.getElementById("demo_input");
var result= document.getElementById("result");
var img_area = document.getElementById("img_area");
if ( typeof(FileReader) === 'undefined' ){
    result.innerHTML = "抱歉，你的浏览器不支持 FileReader，请使用现代浏览器操作！";
    input.setAttribute( 'disabled','disabled' );
} else {
    input.addEventListener( 'change',readFile,false );}
}
function readFile(){
    var file = this.files[0];
    console.log(file);
    //这里我们判断下类型如果不是图片就返回 去掉就可以上传任意文件
    if(!/image\/\w+/.test(file.type)){
    alert("请确保文件为图像类型");
    return false;
}
var reader = new FileReader();
    reader.readAsDataURL(file);
	reader.onload = function(e){
		//result.innerHTML = '<img src="'+this.result+'" alt=""/>';
		document.getElementById("img_area").src = this.result;
		alert("width:"+document.getElementById("img_area").width+"height:"+document.getElementById("img_area").height);
	}
}

function getSize(){
	alert("ss");
}
</script>
</head>
<body>
<input type="file" value="sdgsdg" id="demo_input" />
<textarea id="result" rows=30 cols=300></textarea>
<img id="img_area" style="display:none"></p>
</body>
</html>