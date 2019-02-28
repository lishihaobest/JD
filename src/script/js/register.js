
;
(function() {// 中文、字母、数字、_ - 4-20
	var regs = {
		userNameReg: /^(([\u4e00-\u9fa5])|[a-zA-Z0-9-_]){4,20}$/,
		pwdReg: /^.{6,20}$/,
		numReg: /\d/,
		strReg: /[a-zA-Z]/,
		tsReg: /[^\u4e00-\u9fa5a-zA-Z0-9]/
	}
	
	// 用户名字母、数字、_、-、中文  \u4e00-\u9fa5  4-20
	// box   常规 box  出错的时候  box error  正确的时候  box right
	// tip   常规 tip hide  出错的时候  tip error  默认的时候  tip default
	var userName = $("#userName");
	var pwd = $("#pwd");
	var pwd2 = $("#pwd2");
	var email = $("#email");
	var mobile = $("#mobile");
	var btn = $("#btn");
	var chongfubtn = true;
	userName.on('input',function(ev){
		var e = ev || window.event;
		$.ajax({
			type:'post',
			url:'../php/yanzheng.php',
			data:{
				usernamea:userName.val()
			},
			success:function(data){//后端返回的值
				//console.log(data);
				if(data==1){
					chongfubtn = false;
				}else{
					chongfubtn = true;
				}
			/* 异步要放到回调函数里*/
			checkUserName(e);
			}
		});
	})
	function checkUserName(_e) {
		var value = userName.val();
		var box = userName.parent('.box');
		var tip = userName.parent('.box').next('.tip');
		var span = tip.find('span');
		//console.log(chongfubtn);
		if (value == "") {
			box.addClass("error");
			box.removeClass("right");
			tip.addClass("error");
			tip.removeClass("right");
			span.innerHTML = "用户名不能为空";
			return false;
		} else if (regs.userNameReg.test(value) &&!chongfubtn) {
			box.addClass("right");
			box.removeClass("error");
			tip.addClass("right");
			tip.removeClass("error");
			span.html('用户名可以使用');
			return true;
		} else if(regs.userNameReg.test(value) &&chongfubtn){
			box.addClass("error");
			box.removeClass("right");
			tip.addClass("error");
			tip.removeClass("right");
			span.html('用户名存在');
			return false;
		}else {
			box.addClass("error");
			box.removeClass("right");
			tip.addClass("error");
			tip.removeClass("right");
			span.html('格式错误，仅支持汉字、字母、数字、“-”“_”的组合,4-20个字符');
			return false;
		}
	}

	pwd.on('input',function(ev){
		var e = ev || window.event;
		checkPwd(e);
	})
	function checkPwd(_e) {
		var value = pwd.val();
		var box = pwd.parent('.box');
		var tip = pwd.parent('.box').next('.tip');
		var span = tip.find('span');
		if (value == "") {
			box.addClass("error");
			box.removeClass("right");
			tip.addClass("error");
			tip.removeClass("right");
			span.html('密码不能为空');
			return false;
		} else if (regs.pwdReg.test(value)) {
			box.addClass("right");
			box.removeClass("error");
			tip.addClass("right");
			tip.removeClass("error");
			
			var level = getPwdLevel(value);
			switch (level) {
				case 1:
					tip.addClass('ruo');
					tip.removeClass("zhong");
					tip.removeClass("qiang");
					span.html('密码强度弱');
					break;
				case 2:
					tip.addClass('zhong');
					tip.removeClass("ruo");
					tip.removeClass("qiang");
					span.html('密码强度中');
					break;
				case 3:
					tip.addClass('qiang');
					tip.removeClass("ruo");
					tip.removeClass("zhong");
					span.html('密码强度强');
					break;
			}
			return true;
			// 弱  中  强
			// 字母、数字、特殊字符
			// level 1弱 2中  3强
			// tip ruo zhong qiang
		} else {
			box.addClass("error");
			box.removeClass("right");
			tip.addClass("error");
			tip.removeClass("right");
			span.html('密码长度应在6-20个字符之间');
			return false;
		}
	}
	pwd2.on('change',function(ev){
		var e = ev || window.event;
		checkPwd2(e);
	})
	function checkPwd2(_e) {
		
		var value1 = pwd.val();
		var value = pwd2.val();
		var box = pwd2.parent('.box');
		var tip = pwd2.parent('.box').next('.tip');
		var span = tip.find('span');
	
		if (value == "") {
			box.addClass("error");
			box.removeClass("right");
			tip.addClass("error");
			tip.removeClass("right");
			span.html('请再次输入密码');
			return false;
		} else if (value1 == value) {
			box.addClass("right");
			box.removeClass("error");
			tip.addClass("right");
			tip.removeClass("error");
			span.html('密码验证通过');
			return true;
		} else {
			box.addClass("error");
			box.removeClass("right");
			tip.addClass("error");
			tip.removeClass("right");
			span.html('两次密码不一致');
			return false;
		}
	}
	var ck1 = $('input:checked');
	btn.on('click',function(){
		var ck = $('#ck');
		var box = ck.parent('.box');
		var tip = ck.parent('.box').next('.tip');
		var span = tip.find('span');
		var ck1 = $('input:checked');
		if (ck1.length==1) {
			if (checkUserName() && checkPwd() && checkPwd2()) {
				alert("注册成功");
			} else {
				return false;
			}
		} else{
			tip.addClass("error");
			tip.removeClass("right");
			span.html('请同意协议');
			return false;
		}
	})
	function getPwdLevel(pwd) {
		var level = 0;
		var numReg = true,
			strReg = true,
			tsReg = true;
		for (var i = 0; i < pwd.length; i++) {
			if (numReg && regs.numReg.test(pwd[i])) {
				level++;
				numReg = false;
				continue;
			}
			if (strReg && regs.strReg.test(pwd[i])) {
				level++;
				strReg = false;
				continue;
			}
			if (tsReg && regs.tsReg.test(pwd[i])) {
				level++;
				tsReg = false;
			}
		}
		return level;
	}
	
})()
