/**
 *
 *
 * 1.使用switch的时候一定要配合break(打断)不然的话代码会一直运行下去

2.do...while 循环首先会执行一次代码块，然后检查条件，如果指定条件为真，则重复循环。

3.assign() 方法可加载一个新的文档【语法：location.assign(URL)】

4.删除字符串中所有的空格以及换行符
         prevAll().text().replace(/[\r\n]/g,"").replace(/[ ]/g,"")

5.截取字符串：substring(0,1)  str.substr(str.length-4)

6.字符串与数组之间相互转换
	1.数组转换字符串：每个元素之间加一个 -
	var a, b; a = new Array(0,1,2,3,4); b = a.join("-");

7.字符串转数组 在每个逗号(,)处进行分解。
    1.（不写表示从每一个自负断开【多维数组也一样】）
	var s = "abc,abcd,aaa"; ss = s.split(",");

8.值类型的类型判断用typeof，引用类型的类型判断用instanceof

9.遍历元素：
    便利被选中元素的所有同级元素  siblings()
    被选中元素前一个同级元素  prev()
    被选中元素之前的所有同级元素  prevAll()
    选中被选中元素之后所有的同级元素 nextAll()
    选中被选中元素后一个元素next()
    返回带有被选中元素索引号的元素 eq(){索引值从0开始}

10.数组push()向数组中添加新的元素

11.appendTo() 方法在被选元素的结尾（仍然在内部）插入指定内容。
   empty() 方法从被选元素移除所有内容，包括所有文本和子节点。

12.js的打印事件： window.print()

13.使用 removeEventListener() 方法来移除 addEventListener() 方法添加的事件句柄。

14.rand(10,99);随机生成一个10到99的随机数

15.window.location.reload();实现页面的刷新等同于a标签的href
   window.location.href="/url"实现页面跳转
   window.open("https://git.oschina.net/hjm100");  打开新窗口
   在a标签中可以使用target="_Blank"打开一个新的窗口
   window.history.go(-1);  //返回上一页
   window.history.back();  //返回上一页
   //如果要强行刷新的话就是：window.history.back();location.reload();
   window.location.go(-1); //刷新上一页

16.es6在使用的时候需要注意，必须编译后才可以用（兼容性不好）

17.JSON.parse() 方法用于将一个 JSON 字符串转换为对象。

18.JSON.stringify(obj) : 将一个JSON对象转换成字符串

19.在js中调用lua脚本第一步需要引入lua.vm.js第二步使用标签<script type="text/lua"></script>包裹lua脚本
   rule = L.execute('return getRule()'); 调用<script type="text/lua"></script>中的lua脚本

20.如何判断函数中的this?
	显式指定谁： obj.xxx();
	通过call()/apply()指定谁调用： xxx.call();
	不指定谁调用时： xxx();  -- this就是window
	回调函数：看背后是通过谁来调用的：window/其他

21.对闭包的理解：
	理解： 当嵌套的内部函数引用了外部函数的变量时就产生了闭包
		   通过chrome工具得知：闭包本质是内部函数中的一个对象，这个对象中包含引用变量属性
	作用： 延长局部变量的生命周期
		   让函数外部能操作内部的局部变量

22.编码实现继承：
	function Parent(xxx){this.xxx = xxx}
	Parent.prototype.test = function(){};
	function Child(xxx, yyy){
		Parent.call(this, xxx);  // 借用构造函数  this.parent(xxx)
	}
	Child.prototype = new Parent();  // 得到test()
	var child = new Child();

23.编码实现一个自定义的模块
	(function(window){      // 使用自调用函数
		var msg = 'xxx';
		function showMsg(){alert(msg)}
		window.myModule = {showMsg:showMsg};
	})(window);

24.常用的math对象
   random() 方法可返回介于 0（包含） ~ 1（不包含） 之间的一个随机数。
   Math.floor((Math.random()*10)+1); //我们将取得介于 1 到 10 之间的一个随机数：
   floor(x) 向下取整[x必填]。(如果传递的参数是一个整数，该值不变)。   Math.ceil(1.9)-->1
   ceil(x) 向上取整[x必填]。(如果传递的参数是一个整数，该值不变)      Math.ceil(1.4)-->2
   round(x) 方法可把一个数字舍入为最接近的整数：Math.round(2.60)-->3   2.40-->2
   abs(x)返回一个数的绝对值:  Math.abs(-7.25);  -->  7.25
   max(x,y,z,...,n)  返回 x,y,z,...,n 中的最高值。可选。1 或多个值。  Math.max(5,10) -->10
   min(x,y,z,...,n)  返回 x,y,z,...,n中的最低值。 可选。1 或多个值。  Math.min(5,10) -->5

25.常用的number对象(number对象的方法返回值都是string类型)
   toFixed（x）方法把 Number 四舍五入为指定小数位数的数字。x里面的参数 就是保留小数的位数。 1.246 -->1.25
   toFixed使用  var a = 2.146; a.toFixed(2) --> 2.15
   toPrecision(x) 把数字格式化为指定的长度(小数点不占位,位数超出自动补0): var a = 2.146; a.toPrecision(2) --> 2.1
   toString(radix)  把数字转换为字符串 radix几进制显示（默认是10进制）。 var a = 2.146; a.toString() --> 2.146 string类型
   valueOf()   把字符串转化成数字。
   typeof()  判断值的类型

26.项目中的小栗子（鼠标经过太特定的位置显示内容-->用在背包中）
 //大图片的显示
var oImg = document.querySelector('div img')
//经过的小图片
var oLi = document.querySelectorAll('ul li')
for(var i=0;i<oLi.length;i++){
    oLi[i].index = i
    oLi[i].addEventListener('mouseover',function(){
        oImg.src = 'img/big_'+ (this.index + 1) + '.jpg'   //this.index 索引 (指定)    .index记录下标值
    })
}

27.js获取元素大小方法总结：
// 网页可见区域宽： document.body.clientWidth;
// 网页可见区域高： document.body.clientHeight;
// 网页可见区域宽： document.body.offsetWidth (包括边线和滚动条的宽);
// 网页可见区域高： document.body.offsetHeight (包括边线的宽);
// 网页正文全文宽： document.body.scrollWidth;
// 网页正文全文高： document.body.scrollHeight;
// 网页被卷去的高(ff)：document.body.scrollTop;（获取滚动条的高度）
// 网页被卷去的高(ie): document.documentElement.scrollTop;
// 网页被卷去的左：document.body.scrollLeft;
// 网页正文部分上：window.screenTop;
// 网页正文部分左：window.screenLeft;
// 某个元素的宽度：obj.offsetWidth;
// 某个元素的高度：obj.offsetHeight;
// 某个元素的上边界到body最顶部的距离：obj.offsetTop;（在元素的包含元素不含滚动条的情况下）
// 某个元素的左边界到body最左边的距离：obj.offsetLeft;（在元素的包含元素不含滚动条的情况下）
// 返回当前元素的上边界到它的包含元素的上边界的偏移量：obj.offsetTop（在元素的包含元素含滚动条的情况下）
// 返回当前元素的左边界到它的包含元素的左边界的偏移量：obj.offsetLeft（在元素的包含元素含滚动条的情况下）
//注意：不能操作隐藏的元素：解决方法（使用visibility:hidden;保留宽高隐藏元素）
// scrollTop, scrollLeft
// 设置或返回已经滚动到元素的左边界或上边界的像素数。只有在元素有滚动条的时候，
// 例如，元素的 CSS overflow 属性设置为 auto 的时候，这些像素才有用。
// 这些属性也只在文档的 <body> 或 <html> 标记上定义（这和浏览器有关），
// 并且一起来制定滚动文档的位置。注意，这些属性并不会指定一个 <iframe> 标记的滚动量。
// 这是非标准的但却得到很好支持的属性

28.使用forEach便利一组只有长度的数组，不报错什么也不会打印出来
var  arr = new Array(20) //定义数组长度的方法
 arr.forEach(function(val){
	console.log(val); //什么也没有
})

29.onresize事件会在窗口或框架被调整大小时发生。
window.onresize = function() {
    setPos(false);
}

30.addEventListener() 方法，事件监听
removeEventListener() 方法来移除事件的监听。
语法：
element.addEventListener(event, function, useCapture);
element.removeEventListener(event, function);
第一个参数是事件的类型 (如 "click" 或 "mousedown").
第二个参数是事件触发后调用的函数。
第三个参数是个布尔值用于描述事件是冒泡还是捕获。该参数是可选的。
默认值为 false, 即冒泡传递，当值为 true 时, 事件使用捕获传递。
IE 8 及更早 IE 版本，Opera 7.0及其更早版本不支持 addEventListener() 和 removeEventListener() 方法。
但是，对于这类浏览器版本可以使用 detachEvent() 方法来移除事件句柄:
浏览器兼容写法：
var x = document.getElementById("myBtn");
if (x.addEventListener) {                    // 所有主流浏览器，除了 IE 8 及更早版本
    x.addEventListener("click", myFunction);
} else if (x.attachEvent) {                  // IE 8 及更早版本
    x.attachEvent("onclick", myFunction);
}

31.~~js中的巧妙使用
操作符~， 是按位取反的意思，表面上~~（取反再取反）没有意义，实际上在JS中可以将浮点数变成整数。
var j = ~~7.34;
console.log(j)//7(在rem布局中可以使用)

32.js获取html元素
//获得的是一个数组合集
document.getElementsByTagName('li')[2]
document.getElementsById('li')[2]
document.getElementsByClassName('li')[2]
//获得的是指定选择器的第一个元素
document.querySelector('ul li')
//querySelector() 方法返回文档中匹配指定 CSS 选择器的一个元素。
////获得的是一个数组合集
document.querySelectorAll('ul li')[2]

33.addEventListener添加事件
// element.addEventListener(event, function, useCapture);
// 第一个参数是事件的类型 (如 "click" 或 "mousedown").
// 第二个参数是事件触发后调用的函数。
// 第三个参数是个布尔值用于描述事件是冒泡还是捕获。该参数是可选的。

//removeEventListener() 方法移除由 addEventListener() 方法添加的事件句柄:
//removeEventListener() 方法不能移除匿名函数
// true  为捕获 ul --> li  外 --> 里
// false 为冒泡 li --> ul  里 --> 外

//兼容性写法
// var x = document.getElementById("myBtn");
// if (x.addEventListener) {                    // 所有主流浏览器，除了 IE 8 及更早版本
//     x.addEventListener("click", myFunction);
// } else if (x.attachEvent) {                  // IE 8 及更早版本
//     x.attachEvent("onclick", myFunction);
// }

---------------------------------js相关知识点----------------------------------
总结分享以xmind的形式方便你的查看与学习
javascript学习.xmind
链接: https://pan.baidu.com/s/1slUCViH 密码: ahjm

javascript的DOM操作.xmind
链接: https://pan.baidu.com/s/1eRC2ql0 密码: ahjm

更多前端书籍以及api文档请访问：https://git.oschina.net/hjm100/codes/71qgxs8y0iupzmvthdnc664
 */