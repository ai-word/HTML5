/**
 *
 *
 * /* 一、getElementsByClassName的兼容性解决方案
     Js代码 ：
    getClass("tab")
    function  getClass(cName){
        if(document.getElementsByClassName(cName)) //如果浏览器支持getElementsByClassName 就会返回true
        {
            return document.getElementsByClassName(cName);
        }else{ //不支持则返回flase
            var allEl=document.getElementsByTagName("*"); //获取到当前文档中所有的标签节点 *通配符
            var reg=new RegExp("\\b"+cName+"\\b");
            var arr[];
            for(var i=0;i<allEl.length;i++){
                if(ret.test(allEl[i].className)){
                    arr.push(allEl[i]);
                }
            }
            return arr;
        }
    }*/
    /* 二、 获取css内部样式的兼容性写法
     Js代码 ：
     var oP=document.getElementById('p1');
      function getStyle(obj,attr){
     return  getComputedStyle(obj,true)[attr]||obj.currentStyle   //火狐 谷歌等 || IE
     };
     alert(getStyle(oP,'width'));
    */

    /* 三、Ajax请求
    IE：new ActiveXObject(
    FF、Chrome：new XMLHttpRequest()
    解决办法 统一封装创建XMLHttpRequest对象的方法
    Js代码 ：
     * 创建兼容不同浏览器的XmlHttpRequest对象
     * @return
    function createXmlHttpRequest(){
        var xmlHttp ;
        try{
            //FF,Opera,Safari
            xmlHttp = new XMLHttpRequest();
        }catch(e){
            try{
                //支持IE6.0+
                xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
            }catch(e){
                try{
                    //支持IE5.5+
                    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
                }catch(e){
                    alert("提示: 您的浏览器暂时不支持Ajax请求!");
                    return false;
                }
            }
        }
        return xmlHttp;
    }
     */
    /*
    *  四、集合类对象的()与[]的问题
     IE下，可以使用()或[]获取集合类对象；Firefox下，只能使用[]获取集合类对象。
     Js代码 ：
     document.write(document.forms("formName").src);
     //该写法在IE下能访问到Form对象的src属性
     解决办法：将document.forms("formName")改为 document.forms["formName"]。统一使用[]获取集合类对象。*/
    /* event 与 window.event
      js代码:
       function(e){
         e=e||window.event;  //IE与火狐浏览器兼容
         e= window.event?event.srcElement:e.target  //这样也很好
       }
    * */
    /* 五、获取HTML元素
     统一使用el.getAttribute(name)
    * */
    /* 六、 new Date().getYear()在IE中得到的日期是2011，在FF和Safari中看到的日期是111，原因是在FF和safari返回的是当前年份-1900的值。
     统一使用var year = new Date().getFullYear();
    * */
    /* 七、Frame的引用
     1、尽量都是用frameName去访问子页面window对象。
     2、在FF、IE、Safari中都支持window.document.getElementById(frameId)来获得子页面window对象。
    * */
 */