define(['config'], function(config, mod1) { //定义模块，依赖模块
			//引入配置模块进行开发。
	require(['jquery', 'cookie'], function($) { //加载模块
		;
		(function() {
			/*点击二维码登录*/
			$('.login-tab-l').click(function() {
				$('.qrcode-login').css({
					'display': 'block',
					'fontWeight': '700',
					'color': '#e4393c'
				});
				$('.login-box').css({
					'display': 'none',
					'fontWeight': '100',
					'color': '#666'
				});
				$('.login-tab-r a').removeClass('checked');
				$('.login-tab-l a').addClass('checked');
		
			})
			/*点击账号登录*/
			$('.login-tab-r').click(function() {
				$('.login-box').css({
					'display': 'block',
					'fontWeight': '700',
					'color': '#e4393c'
				});
				$('.qrcode-login').css({
					'display': 'none',
					'fontWeight': '100',
					'color': '#666'
				});
				$('.login-tab-l a').removeClass('checked');
				$('.login-tab-r a').addClass('checked');
			})
			$('input').focus(function() {
				$(this).css('border-color', 'blue')
			});
			$('input').blur(function() {
				$(this).css('border-color', ' #ddd')
			});
		
		
			$('input').focus(function() {
				$(this).css('border-color', 'blue')
			});
			$('input').blur(function() {
				$(this).css('border-color', ' #ddd')
			});
			// 大写锁定已开
			/* $(window).on('keydown',function(ev){
				ev.which
			}); */
			//登录表单验证
			$('#loginsubmit').on('click', function() {
				var $username = $('#loginname').val();
				var $password = $('#nloginpwd').val();
				$.ajax({
					url: '../php/login.php',
					type: 'post',
					data: {
						username: $username,
						password: $password
					},
					success: function(data) {
						//console.log(data);
						/* php返回false 结果 为空  true为1 */
						if (!data) {
							alert('登陆失败');
							$('#loginname').val(''); 
							$('#nloginpwd').val('');
							$('#loginname').focus();
						} else {
							location.href = 'index.html';
							addcookie('username', $username);
						}
					}
				});
			});
		})()
		
	})
	return { //自执行
	}
});