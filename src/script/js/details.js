;(function(){
	/* 加载头脚 */
	$('#tou').load('top.html');
})()
;(function(){
	//购物车触摸效果
	$('#settleup').hover(function() {
		$('#settleup .dropdown-layer').css("display", "block");
		$('#settleup .cw-icon').addClass("cartborder");
	}, function() {
		$('#settleup .dropdown-layer').css("display", "none");
		$('#settleup .cw-icon').removeClass("cartborder");
	});
})()
;
(function() {
	var picid = location.search.substring(1).split('=')[1];
	//2.将当前的id传给后端获取对应的数据
	$.ajax({
		url: '../php/details.php',
		type: 'get',
		data: {
			sid: picid
		},
		dataType: 'json',
		success: function(data) {
			//console.log(data.result);
			//console.log(data);
			var $shujuarr = data.alt.split(',');
			//console.log($shujuarr);
			//console.log(data.url);
			$('.sp').find('img').attr('src', data.url);
			$('.bf').find('img').attr('src',data.url);
			$('.v-price i').html(data.pricenum);
			$('.g-title b').html(data.title);
			$('.stag-num').html(Math.round(data.pricenum/3));
			$.each($shujuarr, function(i, val) {
				//console.log(val);
				$('.list1').append(`<li><img src="${val}"></li>`);
			});
			$(document).ready(function() {
				
				var $liwidth = $('.list1 li').eq(0).width();
				var $sfw = ($('.bf').width()) * ($('.sp').width()) / ($('.bp').width());
				var $sfh = ($('.bf').height()) * ($('.sp').height()) / ($('.bp').height());
				$('.sf').width($sfw);
				$('.sf').height($sfh);
				var $bili = ($('.bp').width()) / ($('.sp').width());
				$('.sp').hover(function() {
					$('.sf').show();
					$('.bf').show();
					$(document).on('mousemove', function(ev) {
						var ev = ev || window.event;
						sfMove(ev);
					})
				}, function() {
					$('.sf').hide();
					$('.bf').hide();
				});
			
			
				function sfMove(ev) {
					var $l = ev.pageX - $('.sp')[0].offsetLeft - $('.sf')[0].offsetWidth / 2 - 2;
					var $t = ev.pageY - $('.sp')[0].offsetTop - $('.sf')[0].offsetHeight / 2 - 2;
					if ($l <= 0) {
						$l = 0;
					} else if ($l >= $('.sp').width() - $('.sf').width() - 2) {
						$l = $('.sp').width() - $('.sf').width() - 2;
					}
					if ($t <= 0) {
						$t = 0;
					} else if ($t >= $('.sp').height() - $('.sf').height() - 2) {
						$t = $('.sp').height() - $('.sf').height() - 2;
					}
					$('.sf')[0].style.left = $l + 'px';
					$('.sf')[0].style.top = $t + 'px';
					$('.bp')[0].style.left = -$l * $bili + 'px';
					$('.bp')[0].style.top = -$t * $bili + 'px';
					//console.log($('.sf')[0].style.offsetTop);
				}
			
				$('.list1 li').each(function(i) {
					$('.list1 li').eq(i).hover(function() {
						$(this).css('border-color', 'red');
						var $url = $(this).find('img')[0].src;
						$('.sp').find('img').attr('src', $url);
						$('.bp').attr('src', $url);
					}, function() {
						$(this).css('border-color', '#e1e1e1');
					})
				})
			
				var $numcc = 0;
				/* li的个数*/
				var $numbb = $('.list1 li').length;
				$('.list1').width(($liwidth + 13) * $('.list1 li').length);
				//console.log( $('.list1').width());
				//console.log( $('.list1 li').length);
				//console.log($liwidth);
				if ($('.list1 li').length < 4) {
					$('.img-list .right')[0].style.color = '#fff';
					$('.img-list .right')[0].style.cursor = 'not-allowed';
				}
				$('.img-list .left')[0].style.color = '#fff';
				$('.img-list .left')[0].style.cursor = 'not-allowed';
				$('.right').on('click', function() {
					if ($numbb > 4) {
						//console.log($liwidth);
						$numbb--;
						$numcc++;
						$('.list1').animate({
							left: $('.list1').position().left - ($liwidth + 10)
						}, 500);
						$('.img-list .left')[0].style.color = 'gray';
						$('.left')[0].style.cursor = 'pointer';
						if ($numbb <= 4) {
							$('.img-list .right')[0].style.color = '#fff';
							$('.right')[0].style.cursor = 'not-allowed';
						}
					}
			
				})
				$('.left').on('click', function() {
					if ($numcc > 0) {
						$numcc--;
						$numbb++;
			
						$('.list1').animate({
							left: $('.list1').position().left + ($liwidth + 10)
						}, 500);
						$('.img-list .right')[0].style.color = 'gray';
						$('.right')[0].style.cursor = 'pointer';
					}
					if ($numcc <= 0) {
						$('.img-list .left')[0].style.color = '#fff';
						$('.left')[0].style.cursor = 'not-allowed';
					}
				});
			})
		}
	});
})()
;(function(){
	var $jia=$('.num-box .add');
	var $jian=$('.num-box .reduce');
	var $input=$('.num-box .sku-num');
	var $num=$input.val();
	$jia.on('click',function(){
		$num++
		if($num>10){
			alert('购物需谨慎')
			$num=10	
		}
		$input.val($num);
	});
	$jian.on('click',function(){
		$num--
		if($num<1){
			alert('买不起看啥')
			$num=1
		}
		$input.val($num);
	});
})()
/* 添加cookie */
;(function(){
	var arrsid = []; //商品的sid
	var arrnum = []; //商品的数量
	function cookietoarray() {
		if(getcookie('cookiesid') && getcookie('cookienum')) {//判断商品是第一次存还是多次存储
			arrsid = getcookie('cookiesid').split(','); //cookie商品的sid  
			arrnum = getcookie('cookienum').split(','); //cookie商品的num
		}
	}
	$('#buybtn').on('click',function(){
		var $sid =location.search.substring(1).split('=')[1];
		//console.log($sid);
		cookietoarray();//获取已经存在的cookie值。
		if($.inArray($sid, arrsid) != -1) { //商品存在，数量叠加 
			var num = parseInt(arrnum[$.inArray($sid, arrsid)]) + parseInt($('.num-box .sku-num').val());
			arrnum[$.inArray($sid, arrsid)] = num;
			addcookie('cookienum', arrnum.toString(), 10); //数组存入cookie
		
		} else { //不存在，第一次添加。将商品的id和数量存入数组，再存入cookie.
			arrsid.push($sid); //将当前的id存入数组
			addcookie('cookiesid', arrsid.toString(), 10); //数组存入cookie
			arrnum.push($('.num-box .sku-num').val());
			addcookie('cookienum', arrnum.toString(), 10); //数组存入cookie
		}
	})
})()
