/**
 *
 * ----------------------------------------------------项目实用------------------------------------------------
1.jQuery 的目标是兼容所有主流浏览器，这就意味着它的大量代码对移动端的浏览器是无用或者低效的。
而 Zepto 只针对移动端浏览器编写，因此体积更小、效率更高，更重要的是，它的 API 完全仿照 jQuery ，所以学习成本也很低。

2.因为bootstrap制作的插件都是用jquery实现的，就是里面的语法都是按jquery的，所以一定要先引入jquery.js文件

3.jq中常用的方法：
添加属性 attr("width","500")
删除属性 remove()

4.$.attr('checked',true)，将复选框的属性改为被选中，
   prop($.attr("checked"))的话输出则分别为false和true

5.parent() 方法返回被选元素的直接父元素。
   children()方法返回被选元素的所有直接子元素。

6.需要引入zepto.js和 touch.js
//swipeleft 事件是指在一秒内水平向左拖拽大于30px
// swiperight - 指在一秒内，水平方向向右拖拽大于30px时触发的事件

7.jq判断数组中是否包含指定元素
var arr = [ "xml", "html", "css", "js" ];
$.inArray("js", arr);  //返回 3,
如果不包含在数组中,则返回 -1;

8.jq的live方法：
live() 方法为被选元素附加一个或多个事件处理程序，
并规定当这些事件发生时运行的函数。

9.可以更多的使用ajax抓取页面和使用更多的事件点击函数按钮函数中可以传参数（）；参数去this自己，也可以是值，值可以传给后端处理
子页面上的数据可以拿取后端返回的参数

------------------------------------知识点总结-------------------------------------------------------
1.区别几个鼠标监听事件：
    mouseover:在鼠标指针穿过被选元素时，其当前元素和内部子元素同时会触发mouserover事件
    mouseout: 在鼠标从元素上离开后触发，其当前元素和内部子元素同时会触发mouseout事件
    mouseenter:在鼠标指针穿过被选元素（不包括其内部元素）时，触发该事件
    mouseleave:在鼠标从被选元素（不包括被选元素的子元素）上离开后触发该事件
    hover:内部也是调用mouseenter和mouseleave事件  两个参数，第一个是鼠标移到元素上要触发的函数，第二个是鼠标移出元素要触发的函数

2.几个易忘事件：
    解除绑定事件
        $('解除对象').off('事件名');
    取消a跳转的默认行为
        -- return false;
        --$('a').click(function(event){
            event.preventDefault();
        });
    委任（委托）: delegate  将多个子元素的事件通过冒泡委托给父元素处理，父元素也不是直接处理，而是通过event.target得到事件发生的子元素，再调用对应的回调函数
    语法： 父元素.delegate('子元素', '事件名', '处理函数');
    删除委托事件：undelegate
    语法： 父元素.undelegate('事件名');
    自定义动画： animate('样式变化', 时间);
    停止动画： stop();没有参数时，停止当前运行的动画
        stop(true, false);停止当前动画， 并且清空后面所有排队的事件
        stop(false, true);停止当前动画，并将当前动画跳转到最后状态，再进行下一个动画

3.$() 和 window.onload() 区别：
    $(function(){}):
        -- 是$(docuement).ready(function(){})简写  表示文档准备完成，但文档、图片之类还没加载完成
        --图片加载完成的写法：  $(function(){ $('img').onload(function(){}) });
        window.onload(function(){}) : 加载完文档及相关资源(图片)的加载也加载完成，且加载完的回调函数

4.ajax(Asynchronous JavaScript and xml):  异步的js和xml
    定义：是一种浏览器端不用刷新页面就可以与服务器通信的技术（包括： JavaScript  XML  HTML和CSS DOM XML和Json xmlhttpRequest）  --json 不能注释
    作用: html和css用于呈现;  DOM实现动态显示和交互   xml和json进行数据处理   javascript绑定和处理所有的数据  xmlhttpRequest对象用于进行异步请求数据读取

5.ajax的创建流程：
    --创建一个xmlhttpRequest对象：
      var xmlhttpRequest = new XMLHttpRequest();
    --设置回调监听
    xmlhttpRequest.onreadystatechange(){
      /*判断发送给服务器的消息是否完成并且服务器是否处理完成返回值得状态*/
      if(4 === xmlhttpRequest.readyState && 200 === xmlhttpRequest.status){
        var result = xmlhttpRequest.responseText;/* 接收服务器返回的数据 */
        }
      }
      --打开一个连接
      xmlhttpRequest.open('请求方法(get)', '请求url', true(异步，若是false时，同步));

      /*  当请求方法时post时，要在此设置请求头  */ -- xmlhttpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      --发送一个请求
      xmlhttpRequest.send();  /* 若是get时，不需传参，在上面的url中已经包含查询字符串;   若是post时，需传参数，参数是查询字符串 */

  6.跨域问题：
      当出现不同源时就会有跨域问题 同源是指：协议名  域名  端口号 都相同
      解决跨域的三种方法：jsonp   cors  window.name
      --jsonp(JSON with Padding): 只支持get请求，不支持post请求
           原理：客户端动态生成<script>标签，然后通过标签的src属性发送get类型的跨域请求
           服务器端返回一段js脚本，这段js脚本的内容为一个函数调用，实参为需要返回的响应数据json
           客户端需要提前定义好一个对应的函数callback，当<script>请求成功并接收到数据时，会自动调用此函数，在函数中，我们就可以处理响应数据了
           jQuery 解决跨域：  $.getJson()  $.get()  $.post()   只需将参数url改为具体的访问地址即可  var url = 'http:127.0.0.1:3000/test/jsonp' + '?callback=?';
      --cors(Cross Orgin Resource Sharing):  跨域资源共享 支持get post put等请求方式，但存在兼容问题
           客户端不需要做任何额外工作
           服务器端只需要在返回时添加响应头即可 res.setHeader('Access-Control-Allow-Orgin','*')  /*  参数（'*'）表示 允许所有的域名访问 （'http:127.0.0.1:3000'）允许指定的地址访问  */

  7.对回调函数的理解
      js是事件驱动的，程序员为事件挂载回调函数，当事件发生后回调函数就会执行
      （直观理解：自己定义， 但不是由自己定义的， 最终还是执行了（一定时机/条件由浏览器系统执行））

  8.jQuery链式调用的理解
      描述：通过点可以不断调用方法  好处：编码简洁  原因：方法会返回this（jQuery对象）

  9.对事件委托的理解
      过程：将多个子元素(li)的事件监听委托给父辈元素(ul)处理函数;
         监听回调是加在父辈元素上;
         当操作任何一个子元素(li)时，事件会冒泡到父辈元素(ul)
         父辈元素不会直接处理事件，而是根据event.target的到发生事件的子元素(li)，通过这个子元素调用事件回调函数
      好处：减少事件监听的数量  n --> 1; 添加新的子元素，自动有事件响应处理

  10.window.onload与$(document).ready()区别：
      -- 执行时间: window.onload必须等到页面内包括图片的所有元素加载完毕后才能执行
             $(document).ready()是DOM结构加载完毕后就执行，不必等到图片加载完毕
      -- 编写个数不同：window.onload不能同时编写多个，如果有多个window.onload方法，只会执行一个
             $(document).ready()可以同时编写多个，并且都可以得到执行
      -- 简化写法： window.onload没有简化写法；$(document).ready(function(){})可以简写成$(function(){});

  11.jQuery核心函数的常用的几种用法：
      -- 作为一般函数调用：$(params(参数));
      -- callback function : 绑定文档加载完成的回调
      -- 选择器字符串：查找所有匹配的dom元素，并包装为jQuery对象返回
      -- 标签字符串：生成dom元素对象，并包装为jQuery对象返回
      -- dom元素对象：将指定的dom元素包装为jQuery对象返回(用的较多的是this)
      -- 作为对象使用（工具方法）
      -- $.each() ： 遍历数组/对象

  12.什么是jQuery插件，如何编写jQuery插件
      -- jQuery插件是地方编写的，基于jQuery基础上的，对jQuery功能的扩展
      编写插件的两种方法：
      -- $.extend({
          leftTrim:function(str){return str.replace(/^\s+/, '')};
      });
      -- $.fn.extend({
          reverseCheck:function(){this.each(function(){this.checked = !this.checked;})});
      });

  13.编程:当用户点击 button 之后，将 ul 中的 li 加入一个 class 其值为 “on”，并将 li 中的文本 a b c d e 依次 变为 ： 1 2 3 4 5
  <ul id="myUl">----------------------------------$(function(){
     <li>a</li>--------------------------------------$('#btn').click(function(){
     <li>b</li>---------------------------------------$('#myUl>li').each(function(){
     <li>c</li>------------------------------------------var $this = $(this);
     <li>d</li>------------------------------------------var index = $(this).index;
     <li>e</li>------------------------------------------$this.addClass('on').html('' + (index+1));
  </ul>------------------------------------------------});
  ---------------------------------------------------})
  <input id="btn" type="button" value="button">----});

  14.jquery中获取元素大小总结
   offset() 方法设置或返回被选元素相对于文档的偏移坐标。
   $(window).width获取当前窗口的宽（不包括padding以及border）
   $(window).height获取当前窗口的高
   innerWidth获取元素的宽包括padding   outerWinth()包括border以及padding
   $(window).scroll(function(){ //动态获取滚动条变化
         var top    = $(window).scrollTop();
         console.log(top)
      $(window).scrollTop(400)//设置滚动条初始高度为400
   })
 */