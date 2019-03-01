define(['config'], function(config, mod1) { //定义模块，依赖模块
			//引入配置模块进行开发。
	require(['jquery', 'cookie'], function($) { //加载模块
		;
		(function() {
			/* 加载头脚 */
			$('#tou').load('top.html');
			$("#jiao").load('footer.html');
		})();
		(function() {
			//购物车触摸效果
			$('#settleup').hover(function() {
				$('#settleup .dropdown-layer').css("display", "block");
				$('#settleup .cw-icon').addClass("cartborder");
			}, function() {
				$('#settleup .dropdown-layer').css("display", "none");
				$('#settleup .cw-icon').removeClass("cartborder");
			});
		})()
		/* 顶部LOGO触摸变化 */
		;
		(function() {
			var logotimer = null;
			var logocount = 0;
			/* btn来约束结束方式，btn2来约束事件未结束时无法添加下一个定时器 */
			var logobtn = true;
			var logobtn2 = true;
			$('#logo').hover(function() {
				if (logobtn2 == true) {
					logobtn2 = false;
					logobtn = false;
					logocount = 0;
					logotimer = setInterval(function() {
						logocount++;
						if (logocount > 45 && logobtn == true) {
							$('#logo .logo-a span').hide();
							$('#logo .logo-a').css('background-image', 'url(img/sprite.head.png)')
							clearInterval(logotimer);
							logobtn2 = true;
						}
					}, 100)
					/* 解决GIF图片 因为缓存之加载一次的在路径后拼接随机数 */
					$('#logo .logo-a').css('background-image', `url(img/5b5ede77Nb463ad3c.gif?${Math.random()})`)
					$('#logo .logo-a span').delay(2000).show(0);
				}

			}, function() {
				logobtn = true;
			});
		})()
		/*搜索框*/
		//获取淘宝接口  
		;
		(function() {
			$('#search input').on('input', function() {
				$.ajax({
					url: "https://suggest.taobao.com/sug?code=utf-8&q=" + $('#search input').val() + "&callback=text",
					dataType: 'jsonp',
					type: "get",
					success: function(data) {
						//console.log(data.result);
						$('#ul1').find('li:not(#offsearch)').remove();
						$.each(data.result, function(i, val) {
							$('#ul1').prepend('<li><span>' + val[0] + '</span><span>约' + val[1] + '个商品</span></li>');
						})
						$('#ul1').show();
					},
				});
			})
			/* 点击关闭  关闭搜索下拉 */
			$('#ul1 #offsearch span').on('click', function() {
				$('#ul1').hide();
			});
			/* 点击生成的列表 让输入框中的文字等于那个 */
			$('#ul1').on('click', 'li:not(#offsearch)', function() {
				var str = $(this).find('span:first').html();
				$('#search input').val(str);
			})
			/* 时间委托 点击搜索下拉 搜索框内容改变*/
			/* $('ul').delegate('li:not(#offsearch)', 'click', function() {
	var str = $(this).find('span:first').html();
	$('#search input').val(str);

	}); */
			/* 解决瞬间失去焦点无法触发上面的事件委托定时器模拟异步 */
			$('#search input').on('blur', function() {
				var timer = setTimeout(function() {
					$('#ul1').hide();
					clearTimeout(timer);
				}, 200);

			});
		})()

		/*轮播图和左右*/
		;
		(function() {
			/* 二级导航 */
			/* 轮播透明切换 */
			var $box = $('.fs_col2');
			var $btns = $('.banner .btn span');
			var $pics = $('.banner .scroll img');
			var $left = $('.banner .prev');
			var $right = $('.banner .next');
			var $timer = null;
			var $autoplaytimer = null;
			var $num = 0;
			/* 自动轮播 */
			$box.hover(function() {
				$('.banner a').css("display", "block");
				clearInterval($autoplaytimer);
			}, function() {
				$('.banner a').css("display", "none");
				$autoplaytimer = setInterval(function() {
					$right.click();
				}, 3000);
			});
			$('.banner a').hover(function() {
				$(this).css("background-position-x", "left");
			}, function() {
				$(this).css("background-position-x", "right");
			});
			/* 小圆圈触摸 */
			function change() {
				$btns.eq($num).addClass('hover1').siblings('span').removeClass('hover1');
				$pics.eq($num).animate({
					opacity: 1
				}).siblings('img').animate({
					opacity: 0
				});
			}
			$btns.hover(function() {
				$num = $(this).index(); //当前的索引
				$timer = setTimeout(function() {
					change();
				}, 400)
			}, function() {
				clearTimeout($timer);
			});
			$right.on('click', function() {
				$num++;
				if ($num > $btns.length - 1) {
					$num = 0;
				}
				change();
			});
			$left.on('click', function() {
				$num--;
				if ($num < 0) {
					$num = $btns.length - 1;
				}
				change();
			});
			$autoplaytimer = setInterval(function() {
				$right.click();
			}, 3000);
			/* 轮播右边TAB切换 */
			var $tab1 = $('#J_news .mod_tab .news_first');
			var $tab2 = $('#J_news .mod_tab .news_last');
			var $tab1a = $('#J_news .mod_tab_content div:first');
			var $tab2a = $('#J_news .mod_tab_content div:last');
			var $tabline = $('#tabline');
			$tab1.on('click', function() {
				$tab1a.show();
				$tab2a.hide();
				$tabline.css('margin-left', 13)
			});
			$tab2.on('click', function() {
				$tab2a.show();
				$tab1a.hide();
				$tabline.css('margin-left', 67)
			});
		})()


		//顶部固定搜索框	
		;
		(function() {
			$(window).scroll(function() {
				if ($(window).scrollTop() >= 400) {
					$('#search-box').css('display', 'block')
				} else {
					$('#search-box').css('display', 'none')
				}
			});
		})();
		(function() {
			//倒计时
			var nowTime = new Date();
			var futureTime = new Date('2019-6-20 16:37:00');
			var a = parseInt((futureTime - nowTime) / 1000);
			var shi = document.querySelector('#shi');
			var fen = document.querySelector('#fen');
			var miao = document.querySelector('#miao');

			function daojishi(times) {
				var timer = null;
				timer = setInterval(function() {
					var hour = 0;
					var minute = 0;
					var second = 0; //时间默认值
					if (times > 0) {
						day = Math.floor(times / (60 * 60 * 24));
						hour = Math.floor(times / (60 * 60)) - (day * 24);
						minute = Math.floor(times / 60) - (day * 24 * 60) - (hour * 60);
						second = Math.floor(times) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
					}
					if (hour <= 9) hour = '0' + hour;
					if (minute <= 9) minute = '0' + minute;
					if (second <= 9) second = '0' + second;
					shi.innerHTML = hour;
					fen.innerHTML = minute;
					miao.innerHTML = second;
					times--;
				}, 1000);
				if (times <= 0) {
					clearInterval(timer);
				}
			}
			daojishi(a);
		})()
		/* 秒杀效果 */
		;
		(function() {


			//中间无缝切换  跳转要写在animate 的回调函数中  不然异步先执行了
			$('#skright').on('click', function() {
				var aleft = $('.sk_list .sk_list_inner').position().left;
				aleft -= 800;
				$('.sk_list .sk_list_inner').animate({
					left: aleft,
				}, 400, function() {
					if (aleft <= -3200) {
						aleft = -800;
						$('.sk_list .sk_list_inner').css('left', aleft)
					}
				});
			})
			$('#skleft').on('click', function() {
				var aleft = $('.sk_list .sk_list_inner').position().left;
				aleft += 800;
				$('.sk_list .sk_list_inner').animate({
					left: aleft,
				}, 400, function() {
					if (aleft >= 0) {
						aleft = -2400;
						$('.sk_list .sk_list_inner').css('left', aleft)
					}
				});
			})
			//右边自动轮播
			var num = 0;
			var libtimer = null

			function lbqh() {
				lbtimer = setInterval(function() {
					num--;
					$('#miaoshalb').animate({
						left: num * 180,
					}, 400, function() {
						if (num <= -2) {
							num = 0;
							$('#miaoshalb').css('left', num * 180);
							$('#miaosha2').addClass('miaoshabg');
							$('#miaosha1').removeClass('miaoshabg');
						} else {
							$('#miaosha1').addClass('miaoshabg');
							$('#miaosha2').removeClass('miaoshabg');
						};
					});
				}, 2000);
			}
			lbqh();
			$('.slider_indicators #miaosha1').hover(function() {
				clearInterval(lbtimer);
				num = 0;
				$('#miaosha1').addClass('miaoshabg');
				$('#miaosha2').removeClass('miaoshabg');
				$('#miaoshalb').animate({
					left: 0,
				}, 400);
			}, function() {
				lbqh();
			});
			$('.slider_indicators #miaosha2').hover(function() {

				clearInterval(lbtimer);
				num = -1
				$('#miaosha2').addClass('miaoshabg');
				$('#miaosha1').removeClass('miaoshabg');
				$('#miaoshalb').animate({
					left: -180,
				}, 400);
			}, function() {
				lbqh();
			});

		})()
		/* 小模块tab切换 */
		;
		(function() {
			//alert(123);
			var $taba = $('#xiaotab1 .tab_head_item a');
			var $tabb = $('#xiaotab2 .tab_body_item');

			$taba.hover(function() {
				//console.log($taba.index($(this)));
				$(this).css('color', '#e33333')
				$tabb.hide();
				$tabb.eq($taba.index($(this))).show();
			}, function() {
				$taba.css('color', '#666')
			})
		})()
		/*楼梯效果*/

		;
		(function() {
			var $tops = [];
			$.each($('.floors>div'), function(i, val) {
				$tops.push($(this).offset().top);
			});
			//console.log($tops);
			var $smalllouti = $('.louti li').not('.louti-last-li');
			$smalllouti.on('click', function() {
				var $index = $(this).index();
				var $top = $tops[$index];
				$('body,html').animate({
					scrollTop: $top - 50
				}, 400);
			});
			/* 滚动加类 */
			$(window).on('scroll', function() {
				var $top1 = $(window).scrollTop() + 400;
				var $top2 = $(window).scrollTop();
				if ($top2 > 400) {
					$('.louti').show();
				} else {
					$('.louti').hide();
				}
				$.each($tops, function(i) {
					//console.log($tops[i]);
					if ($top1 > $tops[i]) {
						$smalllouti.eq(i).addClass('bg-red').siblings().removeClass('bg-red');
					} else if ($top1 < $tops[0] + 400) {
						$smalllouti.eq(0).addClass('bg-red').siblings().removeClass('bg-red');
					}
				});
			});

			//返回顶部
			$('.louti-last-li').on('click', function() {
				$('html,body').animate({
					scrollTop: 0
				}, 400);
			});
		})();

		/*生成商品列表*/
		;
		(function() {
			$.ajax({
				type: 'post',
				url: '../php/goods.php',
				success: function(d) {
					$arr = JSON.parse(d);
					//console.log($arr);
					/*生成商品列表*/
					$.each($arr, function(i, val) {
						$('.more_inner ul').append('<li><a href="details.html?sid=' + $arr[i].sid +
							'"><img class="lazy" data-original="' + $arr[i].url + '"/><div class="xuanran"><p>' + $arr[i].title +
							'</p></div><em>' + $arr[i].price + '</em></a></li>'
						);
					});
					/* for (var i = 0; i < $arr.length; i++){
						
					} */
					$('.more_inner ul li img').css({
						'width': '170px',
						'height': '170px',
						'margin': '20px auto'
					});
					/* $('.more_inner ul li .lazy').lazyload({
						effect: "fadeIn"
					}); */
					/* 渲染文字超过两行用省略号 */
					$(".more_inner ul li .xuanran").each(function(i) {
						var divH = $(this).height();
						var $p = $(this).find('p');
						while ($p.outerHeight() > divH) {
							$p.text($p.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
						};
					});
					$('.more_inner ul li').hover(function() {
						$(this).css({
							'box-sizing': 'border-box',
							'border': '1px solid red'
						})
					}, function() {
						$(this).css('border', 'none');
						$(this).css({
							'border-bottom': '1px solid #f4f4f4',
							'border-right': '1px solid #f4f4f4'
						});
					})
				}
			})
		})();
		/* 图片触摸亮暗 */
		;
		(function() {

			$('.floors img').hover(function() {
				$(this).addClass('viewgray');
			}, function() {
				$(this).removeClass('viewgray');
			})
		})()
		/* 登陆推出 */
		;
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

		})()
		require(['jqlazy'], function() { //加载模块
			$('.more_inner ul li .lazy').lazyload({
				effect: "fadeIn"
			});
		})
	})
	
	return { //自执行
	}
});
