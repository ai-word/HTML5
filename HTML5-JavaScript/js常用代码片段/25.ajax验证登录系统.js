/**
 *
 */
$(function(){
	$('#sel_user').bind('keypress',function(event){
		if(event.keyCode == '13'){
			$("password").focus();
		}
	});

	$('#password').bind('keypress',function(event){
		if(event.keyCode == '13'){
			login_act();
		}
	});

	$('#loading').hide();
});

/*登录*/
function login_act() {
	var user = $('#sel_user').val();
	if (user == '') {
		alert('用户不能为空');
		$('#userid').focus();
		return;
	}

	var pwd = $.trim($("#password").val());
	if (pwd == '') {
		alert('密码不能为空');
		$('#password').focus();
		return;
	}

	$('#loading').show();

	$.ajax({
		type : "POST",
		url : "login_validate.php",
		data : "act=login" + "&userid=" + user + '&password=' + pwd,
		dataType : "json",
		async : false,
		cache : false,
		success : function(data) {

			$('#loading').hide();

			if (data['ans'] == 'ok') {
//				window.location.href = '../main/index.php';//直接跳转
				//延迟100毫秒 跳转
				setTimeout(function(){
					window.location.href = '../main/index.php';
					return false;//阻止冒泡
					},100);
			} else {
				alert(data['ans']);
				return false;
			}
		},
		error : function(e, jqxhr, settings, exception) {
			$('#loading').hide();
			alert('服务器繁忙');
		}
	});
}