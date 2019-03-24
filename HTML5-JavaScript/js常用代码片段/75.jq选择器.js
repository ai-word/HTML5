基本选择器

//选择 id为 one 的元素
   $('#btn1').click(function(){
 $('#one').css("background","#bfa");
});
//选择 class 为 mini 的所有元素
$('#btn2').click(function(){
 $('.mini').css("background","#bfa");
});
//选择 元素名是 div 的所有元素
$('#btn3').click(function(){
 $('div').css("background","#bfa");
});
//选择 所有的元素
$('#btn4').click(function(){
 $('*').css("background","#bfa");
});
//选择 所有的span元素和id为two的div元素
$('#btn5').click(function(){
 $('span,#two').css("background","#bfa");
});
层次选择器



  $(document).ready(function(){
 //选择 body内的所有div元素.
   $('#btn1').click(function(){
 $('body div').css("background","#bbffaa");
})
//在body内的选择 元素名是div 的子元素.
$('#btn2').click(function(){
 $('body > div').css("background","#bbffaa");
})
//选择 所有class为one 的下一个div元素.
$('#btn3').click(function(){
 $('.one + div').css("background","#bbffaa");
})
//选择 id为two的元素后面的所有div兄弟元素.
$('#btn4').click(function(){
  $('#two ~ div').css("background","#bbffaa");
})
基本过滤选择器

  $('#btn1').click(function(){
  $('div:first').css("background","#bfa");
 })
 //选择最后一个div元素.
 $('#btn2').click(function(){
  $('div:last').css("background","#bfa");
 })
 //选择class不为one的 所有div元素.
 $('#btn3').click(function(){
  $('div:not(.one)').css("background","#bfa");
 })
 //选择 索引值为偶数 的div元素。
 $('#btn4').click(function(){
  $('div:even').css("background","#bfa");
 })
 //选择 索引值为奇数 的div元素。
 $('#btn5').click(function(){
  $('div:odd').css("background","#bfa");
 })
 //选择 索引等于 3 的元素
 $('#btn6').click(function(){
  $('div:eq(3)').css("background","#bfa");
 })
 //选择 索引大于 3 的元素
 $('#btn7').click(function(){
  $('div:gt(3)').css("background","#bfa");
 })
//选择 索引小于 3 的元素
 $('#btn8').click(function(){
  $('div:lt(3)').css("background","#bfa");
 })
  //选择 所有的标题元素.比如h1, h2, h3等等...
 $('#btn9').click(function(){
  $(':header').css("background","#bfa");
 })
 //选择 当前正在执行动画的所有元素.
 $('#btn10').click(function(){
  $(':animated').css("background","#bfa");
 });
内容过滤选择器

//选取含有文本"di"的div元素.
$('#btn1').click(function(){
 $('div:contains(di)').css("background","#bbffaa");
})
//选取不包含子元素(或者文本元素)的div空元素.
$('#btn2').click(function(){
 $('div:empty').css("background","#bbffaa");
})
//选取含有class为mini元素 的div元素.
$('#btn3').click(function(){
 $('div:has(.mini)').css("background","#bbffaa");
})
//选取含有子元素(或者文本元素)的div元素.
$('#btn4').click(function(){
 $('div:parent').css("background","#bbffaa");
})
可见性过滤选择器

   //选取所有不可见的元素.包括<input type="hidden"/>.
   $('#btn_hidden').click(function(){
    alert( "不可见的元素有："+$('body :hidden').length +"个!\n"+
  "其中不可见的div元素有:"+$('div:hidden').length+"个!\n"+
  "其中文本隐藏域有:"+$('input:hidden').length+"个!");
 $('div:hidden').show(3000).css("background","#bbffaa");
})
//选取所有可见的元素.
$('#btn_visible').click(function(){
 $('div:visible').css("background","#FF6500");
})
属性选择器

//选取含有 属性title 的div元素.
$('#btn1').click(function(){
  $('div[title]').css("background","#bbffaa");
})
//选取 属性title值等于 test 的div元素.
$('#btn2').click(function(){
  $('div[title=test]').css("background","#bbffaa");
})
//选取 属性title值不等于 test 的div元素.
$('#btn3').click(function(){
  $('div[title!=test]').css("background","#bbffaa");
})
//选取 属性title值 以 te 开始 的div元素.
$('#btn4').click(function(){
  $('div[title^=te]').css("background","#bbffaa");
})
//选取 属性title值 以 est 结束 的div元素.
$('#btn5').click(function(){
  $("div[title$=est]").css("background","#bbffaa");
})
//选取 属性title值 含有 es  的div元素.
$('#btn6').click(function(){
  $("div[title*=es]").css("background","#bbffaa");
})
//组合属性选择器,首先选取有属性id的div元素，然后在结果中 选取属性title值 含有 es 的元素.
$('#btn7').click(function(){
  $("div[id][title*=es]").css("background","#bbffaa");
})
子元素过滤选择器

//选取每个父元素下的第2个子元素
$('#btn1').click(function(){
  $('div.one :nth-child(2)').css("background","#bbffaa");
})
//选取每个父元素下的第一个子元素
$('#btn2').click(function(){
  $('div.one :first-child').css("background","#bbffaa");
})
//选取每个父元素下的最后一个子元素
$('#btn3').click(function(){
  $('div.one :last-child').css("background","#bbffaa");
})
//如果父元素下的仅仅只有一个子元素，那么选中这个子元素
$('#btn4').click(function(){
  $('div.one :only-child').css("background","#bbffaa");
})
表单对象属性过滤选择器

//重置表单元素
$(":reset").click(function(){
  setTimeout(function() {
    countChecked();
    $("select").change();
  },0);
});

//对表单内 可用input 赋值操作.
$('#btn1').click(function(){
  $("#form1 input:enabled").val("这里变化了！");
  return false;
})
//对表单内 不可用input 赋值操作.
$('#btn2').click(function(){
  $("#form1 input:disabled").val("这里变化了！");
  return false;
})


//使用:checked选择器，来操作多选框.
$(":checkbox").click(countChecked);

function countChecked() {
  var n = $("input:checked").length;
  $("div").eq(0).html("<strong>有"+n+" 个被选中!</strong>");
}

countChecked();//进入页面就调用.

//使用:selected选择器，来操作下拉列表.
$("select").change(function () {
      var str = "";
      $("select :selected").each(function () {
            str += $(this).text() + ",";
      });
      $("div").eq(1).html("<strong>你选中的是："+str+"</strong>");
}).trigger('change');
// trigger('change') 在这里的意思是：
// select加载后，马上执行onchange.
// 也可以用.change()代替.
表单选择器

var $alltext = $("#form1 :text");
var $allpassword= $("#form1 :password");
var $allradio= $("#form1 :radio");
var $allcheckbox= $("#form1 :checkbox");

var $allsubmit= $("#form1 :submit");
var $allimage= $("#form1 :image");
var $allreset= $("#form1 :reset");
var $allbutton= $("#form1 :button"); // <input type=button />  和 <button ></button>都可以匹配
var $allfile= $("#form1 :file");
var $allhidden= $("#form1 :hidden"); // <input type="hidden" />和<div style="display:none">test</div>都可以匹配.
var $allselect = $("#form1 select");
var $alltextarea = $("#form1 textarea");

var $AllInputs = $("#form1 :input");
var $inputs = $("#form1 input");

$("div").append(" 有" + $alltext.length + " 个（ :text 元素）<br/>")
        .append(" 有" + $allpassword.length + " 个（ :password 元素）<br/>")
        .append(" 有" + $allradio.length + " 个（ :radio 元素）<br/>")
        .append(" 有" + $allcheckbox.length + " 个（ :checkbox 元素）<br/>")
        .append(" 有" + $allsubmit.length + " 个（ :submit 元素）<br/>")
        .append(" 有" + $allimage.length + " 个（ :image 元素）<br/>")
        .append(" 有" + $allreset.length + " 个（ :reset 元素）<br/>")
        .append(" 有" + $allbutton.length + " 个（ :button 元素）<br/>")
        .append(" 有" + $allfile.length + " 个（ :file 元素）<br/>")
        .append(" 有" + $allhidden.length + " 个（ :hidden 元素）<br/>")
        .append(" 有" + $allselect.length + " 个（ select 元素）<br/>")
        .append(" 有" + $alltextarea.length + " 个（ textarea 元素）<br/>")
        .append(" 表单有 " + $inputs.length + " 个（input）元素。<br/>")
        .append(" 总共有 " + $AllInputs.length + " 个(:input)元素。<br/>")
        .css("color", "red")

$("form").submit(function () { return false; }); // return false;不能提交.