/**
 * 1.当input框内容改变的时候事件写法：
      bind() 方法向被选元素添加一个或多个事件处理程序
      $('#money').bind('input propertychange',function(){}

2.在表单提交的时候使用if判断失败的判断要return false
     （虽然判断存在但是表单仍然提交）

3.表单处理的时候根据需要改善用户体验(比如在改变的时候进行判断)

4.表单按钮禁用伴随弹框（用户体验‘在空的时候不显示弹框’）

5.解决type="number" step="0.01"解决number类型的表单能够显示小数类型

6. required表单提交不能为空

7.表单提交常见选择符：
  （1）选择name属性是mobile的表单：$('input[name="mobile"]').val()
  （2）选择name属性是sex的表单并且带有checked属性：
             $("input[name='sex']:checked").val();
  （3）多个checkbox的选择
    //获取被选中的多选按钮的值
    $('input[name="id"]:checked').each(function(){
        imgid.push($(this).val());
    });

8. $('#form').submit();绑定表单的提交 （常用在想要弹框判断的时候）

9.focus()表单获取焦点 blur（）来判断表单失去焦点

10.解决ios系统渲染‘禁用表单’的样式
    input[disabled]{
	opacity: 1;
	-webkit-text-fill-color:#000;
	-webkit-opacity:1;
	}
11.手机自带的搜索换行，下一步，确认的keyCode码都是13可以写成事件

12.多选提交后台要用数组：name="type_id[]"

13.form表单上传图片需要：<form action="" enctype="multipart/form-data" method="post">
   ajxa上传图片需要：fd = new FormData($('#form')[0]); 且ajax对象中的属性需要有
   processData: false,contentType: false,两个属性 和 data:fd
   这是数据流的提交方式需要后端做处理。
   php后端的参考写法（数据流上传图片）
   /**
     *上传图片操作
     *@param string $picname
     *@return String $imgPath
     */
    protected function uploadPic() {
        $upload = new \Think\Upload();
        // 实例化上传类
        $upload -> maxSize = 3145728;
        $upload -> rootPath = './Public/task_image/';
        $upload -> savePath = '';
        $upload -> saveName = array('uniqid', '');
        //uniqid函数生成一个唯一的字符串序列。
        $upload -> exts = array('jpg', 'gif', 'png', 'jpeg', 'mp4');
        $upload -> autoSub = true;
        $upload -> subName = array('date', 'Ymd');
        $arr = $upload -> upload();
        $retrun = array();
        if (is_array($arr)) {
            foreach ($arr as $k => $v) {
                $imgPath[] = "./Public/task_image/" . $v['savepath'] . $v['savename'];
            }
            $retrun = array('imgPath' => $imgPath);
        }
        if ($upload -> getError() == '上传文件后缀不允许') {
            $this -> Rerror('上传图片格式不支持');
        }
        return $retrun;
    }
调用：
$imgArr = $this ->uploadPic();
if(!$imgArr){
    $this->Rerror('文件不能为空');
}
if ($imgArr) {
    foreach ($imgArr['imgPath'] as $v) {
        $data['image'] = $v;
    }
}

14.表单输入过程发生事件，如果不满足就清空表单（更好的用户体验）
   bind()为被选元素添加一个或多个事件处理程序(只要有一个事件触发即可)
   input()事件来监听文本框value值的改变
   blur()：表单失去焦点的时候触发的事件
   focus()：得到焦点时触发的事假
   propertychange()只要当前对象的属性发生改变就会触发该事件(功能同oninput，用以替代oninput在IE9以下的不兼容性)
$('#money').bind('input propertychange blur',function(){
        if($('#money').val()>20000){
            $('#money').val('')
            $('.weui-dialog__bd').text('单笔交易不能超过2W')
            $('#extract').attr('disabled','disabled')
        }else{
            $('#extract').removeAttr('disabled','disabled')
        }
    })
15.通过jq实现表单的数据动态变化（场景span中的值随着input的输入变化而变化）【用法等同14】
    html代码：
        <input type="text"/>
        <span></span>
    js代码：
        $('input').bind('input propertychange blur',function(){
            $('span').html($('input').val())
        })

16.判断file是不是为空
直接判断input的file，如果value的长度为0，那么就空
----------------------------------------------------------------------------------
附录：
input相关标签以及属性总结：

常用标签：

1.文本域：     <input type="text" name="name" val="鸿基梦">
2.密码：       <input type="password" name="pwd">
3.单选按钮：   <input type="radio" name="sex" >Male
4.复选框：     <input type="checkbox" name="name" value="Bike">hjm
5.提交按钮:    <input type="submit">等同于<button></button>
6.重置按钮：   <input type="reset">
7.文本区域：   <textarea rows="10" cols="30">我是10行，30列。 </textarea>
8.下拉列表:    <select><option value="name">name</option><option value="age">age</option></select>
9.上传文件：   <input type="file" name="">
10.隐藏传值：  <input type="hidden" name="">
11.数字框：    <input type="number " name="">
12.日期框：    <input type="data" name=""> //格式为yyyy-mm-dd
13.邮箱框：    <input type="email  " name="">//带有验证的邮箱地址
14.数字控件：  <input type="range" id="a" value="50">//可用于调节音量大小（进度条）


html5新增的表单

1.<datalist> 元素规定输入域的选项列表。(需要配合input一块使用，ie9以前以及Safari 不支持)
    <input> 元素使用<datalist>预定义值:
    <input list="browsers">
    <datalist id="browsers">
      <option value="Internet Explorer">
      <option value="Firefox">
    </datalist>
2.<keygen> 元素的作用是提供一种验证用户的可靠方法。（ie不支持）
3.<output>将计算结果显示在 <output> 元素中：
<input type="range" id="a" value="50">100+<input type="number" id="b" value="50">=<output name="x" for="a b"></output>

属性总结：

1.disabled        规定禁用文本区域（带有自定义样式）。
2.readonly        规定文本区域为只读（与disabled相同但是不自带样式）。
3.form            属性规定文本区域所属的一个或多个表单。（不常用，ie不支持）
4.maxlength="50"  允许输入内容最大长度为50个字符
5.placeholder=""  提示文本区域期望的输入值。
6.required        规定文本区域是必需的/必填的。
7.autofocus       页面加载的时候自动获取焦点
8.max='5'         元素的最大值是5
9.min='5'         元素的最小值是5
10.pattern        用于验证 <input> 元素的值的正则表达式。
特有属性：
<select>： multiple  按住 Ctrl 按钮来选择多个选项。size="3" 规定下拉列表中可见选项的数目。
选中单选框或者多选框：checked
step="0.01"解决number类型的表单能够显示小数类型

<output>for  计算元素的id  描述计算中使用的元素与计算结果之间的关系。
 *
 *
 *
 */