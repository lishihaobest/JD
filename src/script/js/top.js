;
(function() {
	//地理位置
	//wukuang  为css中  挡住二级导航的样式类
	$('#ttbar-mycity ').hover(function() {
		$('#ttbar-mycity .adress').addClass("wukuang");
		$('#ttbar-mycity  .dd').css("display", "block");
	}, function() {
		$('#ttbar-mycity  .dd').css("display", "none");
		$('#ttbar-mycity  .adress').removeClass("wukuang");
	});
	//点击地理位置切换文字
	//selected 为CSS中 选中地址加红色背景
	$('#ttbar-mycity .adressbox a').on('click', function() {
		$('#ttbar-mycity .adressbox a').removeClass('selected');
		$(this).addClass('selected');
		$('#ttbar-mycity .adresstext').html($(this).html());
		$('#ttbar-mycity  .dd').css("display", "none");
	})
	//顶部导航触摸效果
	$('#myjd').hover(function() {
		$('#myjd .dt').addClass("wukuang");
		$('#myjd .dd').css("display", "block");

	}, function() {
		$('#myjd .dd').css("display", "none");
		$('#myjd .dt').removeClass("wukuang");
	});
	$('#serv').hover(function() {
		$('#serv .dd').css("display", "block");
		//$('#serv .dt').css({"background":"white","height":"30px","border":"1px solid #ccc","border-bottom":"1px solid #fff"});
		$('#serv .dt').addClass("wukuang");
	}, function() {
		$('#serv .dd').css("display", "none");
		$('#serv .dt').removeClass("wukuang");

	});
	$('#navs').hover(function() {
		$('#navs .dd').css("display", "block");
		$('#navs .dt').addClass("wukuang");

	}, function() {
		$('#navs .dd').css("display", "none");
		$('#navs .dt').removeClass("wukuang");

	});

	$('#navitems a').hover(function() {
		$(this).css("color", "#FF0000");
	}, function() {
		$(this).css("color", "#333");
	});

})();
(function() {
	if (getcookie('username')) {
		let name = getcookie('username');
		$('#login').hide();
		$('#login1').show();
		$('#login1 .user1').html(name + '，欢迎登陆');
	}
	$('#login1 .close1').on('click', function() {
		delcookie('username');
		window.location.reload();
	})

})();
