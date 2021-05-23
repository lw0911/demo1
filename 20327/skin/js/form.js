function check(form) {

	if (form.name.value == '') {
		alert("请输入姓名!");
		form.name.focus();
		return false;
	}
	if ($("#tel").val() == '') {
		alert("请添加手机！");
		return false;
	}
	if (!$("#tel").val().match(/^((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)$/)) {
		alert("手机格式错误！");
		return false;
	}
	if ($("#email").val() == '') {
		alert("请添加邮箱！");
		return false;
	}
	if (!$("#email").val().match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)) {
		alert("邮箱格式错误！");
		return false;
	}
	if (form.content.value == '') {
		alert("请输入内容!");
		form.content.focus();
		return false;
	}
	if (form.validate.value == '') {
		alert("请输入验证码!");
		form.validate.focus();
		return false;
	}
	return true;
} 