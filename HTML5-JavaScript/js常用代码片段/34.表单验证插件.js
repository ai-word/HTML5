<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<style>
			#formDiv div{overflow: hidden;}
			#formDiv div label,#formDiv div input{float: left;}
			.validate-success{color: green;float: left;}
			.validate-error{color: red;float: left;}
		</style>
	</head>
	<body>
		<form action="">
			<div id="formDiv">
				<div>
					<label>用户名:</label>
					<input type="text" name="userName" validate-type="userNameRegex"/>
				</div>
				<div>
					<label>密　码:</label>
					<input type="text" name="pwd" validate-type="pwdRegex"/>
				</div>
				<div>
					<label>手　机:</label>
					<input type="text" name="mobile" validate-type="mobileRegex"/>
				</div>
				<div>
					<label>邮　箱:</label>
					<input type="text" name="email" validate-type="emailRegex"/>
				</div>
				<div>
					<label>座　机:</label>
					<input type="text" name="tel" validate-type="telRegex"/>
				</div>
				<div>
					<label>身份证:</label>
					<input type="text" name="identity" validate-type="identityRegex"/>
				</div>
			</div>
			<div id="submitDiv">
				<input type="button" value="注册" id="registerBtn" name="registerBtn">
			</div>
		</form>
        <script type="text/javascript">
        //IIFE
        !(function(window, document){
            //每次调用该方法的时候都会初始化一个validate对象
            var Validate = function(options, message, regex){
                if(!(this instanceof Validate)){
                    return new Validate(options,message,regex);
                }
                this.options = this.extend({
                    formId : "formDiv",
                    buttonId : "registerBtn"
                },options)

                this.message = this.extend({
                        success : "填写无误",
                        userNameError : "用户名填写有误",
                        pwdError : "密码填写有误",
                        emailError : "邮箱填写有误",
                        mobileError : "手机填写有误",
                        telError : "座机填写有误",
                        identityError : "身份证填写有误"
                },message)

                this.regex = this.extend({
                        //用户名
                        userNameRegex : /^\w{6,16}$/,
                        //密码
                        pwdRegex : /^\w{6,12}$/,
                        //邮箱
                        emailRegex : /^\w+@[0-9A-Za-z]+\.[a-zA-Z]{2,4}$/,
                        //手机
                        mobileRegex : /^(13[0-9]|15[^4]|17[037]|18[0-9])\d{8}$/,
                        //座机
                        telRegex : /^([0]\d{2,3}[-])?\d{7,8}$/,
                        //身份证
                        identityRegex : /^\d{17}[0-9Xx]$/
                },regex)
                this.init();
            }

            //将所有继承自Validate的对象,都拥有里面的方法
            Validate.prototype = {
                init : function(){
                    var formDiv = document.getElementById(this.options.formId);
                    var formData = formDiv.getElementsByTagName("input");
                    var registerBtn = document.getElementById(this.options.buttonId);
                    var _this = this;
                    registerBtn.addEventListener("click",function(){
                        //验证表单(验证所有的input)

                        _this.validateForm(formData);
                    })

                    for(var i = 0;i < formData.length;i++){
                        this.validateListener(formData[i]);
                    }
                },

                extend : function(obj1,obj2){
                    for(var k in obj2){
                        obj1[k] = obj2[k]
                    }
                    return obj1;
                },

                validateForm : function(formData){
                    for(var i = 0;i < formData.length;i++){
                        this.validateListener(formData[i]);
                        this.validateInput(formData[i]);
                    }
                },

                    /**
                     * 验证某一个input里面的内容是否正确
                     * @param {Object} obj  某一个input
                     */
                validateListener : function(obj){
                    var _this = this;
                    obj.onkeyup = obj.onblur = function(){
                        //验证
                        _this.validateInput(obj)
                    }
                },

                    /**
                     * 真正验证内容是否正确方法
                     * @param {Object} inputData
                     */
                validateInput :	function(inputData){
                    //某个input的文本
                    var value = inputData.value;

                    //验证规则的来源
                    var regExpKey = inputData.getAttribute("validate-type");

                    //转换成实际的验证规则
                    var regExp = this.regex[regExpKey]

                    //获取父节点
                    var parentNode = inputData.parentNode;
                    if(regExp.test(value)){
                        //成功
                        this.successValidate(parentNode)
                    }else{
                        //失败
                        this.errorValidate(parentNode, this.message[regExpKey.replace("Regex", "Error")]);
                    }
                },

                    /**
                     * 成功验证之后的处理
                     * @param {Object} parentNode 父元素节点
                     */
                successValidate : function (parentNode){
                    //删掉失败的div
                    this.hideMessage(parentNode, "validate-error");
                    //成功Div 无
                    this.showMessage(parentNode, "validate-success");
                },

                    /**
                     * 错误验证之后的处理
                     * @param {Object} parentNode  父元素节点
                     * @param {Object} result      错误信息
                     */
                errorValidate :	function (parentNode, result){
                    //删掉成功的div
                    this.hideMessage(parentNode, "validate-success");
                    //显示目前的文字(div)
                    this.showMessage(parentNode, "validate-error", result);
                },

                    /**
                     * 隐藏不满足条件的信息
                     * @param {Object} parentNode  父元素节点
                     * @param {Object} className   应该删除的Div的类名
                     */
                hideMessage : function(parentNode, className){
                    for(var i = 0;i < parentNode.children.length;i++){
                        if(parentNode.children[i].className === className){
                            parentNode.removeChild(parentNode.children[i]);
                        }
                    }
                },

                    /**
                     * 展示满足条件的信息
                     * @param {Object} parentNode  父元素节点
                     * @param {Object} className   应该显示的Div的类名
                     * @param {Object} result	     应该显示的信息
                     */
                showMessage : function(parentNode, className, result){
                    //判断有没有成功div
                    for(var i = 0;i < parentNode.children.length;i++){
                        if(parentNode.children[i].className === className){
                            return
                        }
                    }
                    //如果有return
                    //如果无 createElement("div")
                    var oDiv = document.createElement("div");
                    var oText;
                    if(className === "validate-success"){
                        oDiv.setAttribute("class", "validate-success");
                        oText = document.createTextNode(this.message.success);
                    }else{
                        oDiv.setAttribute("class", "validate-error");
                        oText = document.createTextNode(result);
                    }

                    oDiv.appendChild(oText);
                    parentNode.appendChild(oDiv);
                }

            }

            //暴露方法给对应的加载文件,并调用该方法的js
            window.Validate = Validate;
        })(window, document)

			window.Validate();
		</script>
	</body>
</html>
