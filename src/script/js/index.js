//地理位置
//wukuang  为css中  挡住二级导航的样式类
$('#ttbar-mycity ').hover(function(){
	$('#ttbar-mycity .adress').addClass("wukuang");
	$('#ttbar-mycity  .dd').css("display","block");
},function(){
	$('#ttbar-mycity  .dd').css("display","none");
	$('#ttbar-mycity  .adress').removeClass("wukuang");	
});
//点击地理位置切换文字
//selected 为CSS中 选中地址加红色背景
$('#ttbar-mycity .adressbox a').on('click',function(){
	$('#ttbar-mycity .adressbox a').removeClass('selected');
	$(this).addClass('selected');
	$('#ttbar-mycity .adresstext').html($(this).html());
	$('#ttbar-mycity  .dd').css("display","none");
})
//顶部导航触摸效果
$('#myjd').hover(function(){
	$('#myjd .dt').addClass("wukuang");
	$('#myjd .dd').css("display","block");
	
},function(){
	$('#myjd .dd').css("display","none");
	$('#myjd .dt').removeClass("wukuang");	
});
$('#serv').hover(function(){
	$('#serv .dd').css("display","block");
	//$('#serv .dt').css({"background":"white","height":"30px","border":"1px solid #ccc","border-bottom":"1px solid #fff"});
	$('#serv .dt').addClass("wukuang");
},function(){
	$('#serv .dd').css("display","none");
	$('#serv .dt').removeClass("wukuang");
	
});
$('#navs').hover(function(){
	$('#navs .dd').css("display","block");
	$('#navs .dt').addClass("wukuang");
	
},function(){
	$('#navs .dd').css("display","none");
	$('#navs .dt').removeClass("wukuang");
	
});
/* $('a').hover(function(){
	$(this).css("color","#FF0000");
},function(){
	$(this).css("color","#999");
}); */
$('#navitems a').hover(function(){
	$(this).css("color","#FF0000");
},function(){
	$(this).css("color","#333");
});
/* $('.address').hover(function(){
	$(this).css("background","#fff");
},function(){
	$(this).css("background","#e3e4e5");
	
}); */
//购物车触摸效果
$('#settleup').hover(function(){
	$('#settleup .dropdown-layer').css("display","block");
	$('#settleup .cw-icon').addClass("cartborder");
	cw-icon
},function(){
	$('#settleup .dropdown-layer').css("display","none");
	$('#settleup .cw-icon').removeClass("cartborder");
});
/*搜索框*/
//获取淘宝接口
$.ajax({ url: "https://suggest.taobao.com/sug?code=utf-8&q=啊啊啊啊啊啊啊&callback=text", 
	dataType:'jsonp',
	type:"get",
	success: function(data){
    console.log(data);
}});
/* function jd(data){
	var $arr=data.result;
	var $html='';
	for(var $i=0;$i<$arr.length;$i++){		
		$html+='<li><a href="https://search.jd.com/Search?keyword='+arr[i][0]+'%E7%94%B5%E6%B1%A0&enc=utf-8&suggest=1.def.0.V04&wq=aaaa&pvid=d6346556e6ea4ee084d83c28b04c954e">'+arr[i][0]+'</a></li>';
	}
	$('#search .from #ul').html($html);
}
$('#search .from .text').input=function(){
			var $cs=document.createElement('script');
			$cs.src='https://dd-search.jd.com/?terminal=pc&newjson=1&ver=2&zip=1&key='+$(this).value+'&pvid=d6346556e6ea4ee084d83c28b04c954e&t=1519121545823&curr_url=www.jd.com%2F&callback=jd';
			document.body.appendChild($cs);
	} */
/*轮播图*/
/* var timer=setInterval($fn,3000);
$('.fs_col2').hover(function(){
    		$('.banner a').css("display","block");
    		clearInterval(timer);
    	},function(){
    		$('.banner a').css("display","none");
    		timer=setInterval($fn,3000);
 });
 
  $('.banner .prev').click($fn)
    	
    	
    	function $fn(){
    		co(1);
    		$('.banner .scroll img').each(function(){
    			if($(this).css("left")=="0px"){
    				$(this).animate({
    					left:-520
    				},function(){
      					$(this).css("left","590px")
    				})
    				if($('.banner .scroll img').index($(this))==7){
    					$('.banner .scroll img').eq(0).animate({
    						left:0
    					})
    				}
    				else{
    					//$(this).next().css("left","520px")
    					$(this).next().animate({
    					left:0
    				})
    				}
    			}
    		})
    		}
 		
    	$('.banner .next').click(function(){
    		co(-1);
    		$('.banner .scroll img').each(function(){
    			if($(this).css("left")=="0px"){
    				$(this).prev().css("left","-590px")
    				$(this).animate({
    					left:590
    				})
    				if($('.banner .scroll img').index($(this))==0){
    					$('.banner .scroll img').eq(7).css("left","-590px")
    					$('.banner .scroll img').eq(7).animate({
    						left:0
    					})
    				}
    				else{
    					$(this).prev().animate({
    					left:0
    				})
    				}
    			}
    		})
			})
    	function co(a){
    		$('.banner .btn span').css("background-color","#666")
    		$('.banner .scroll img').each(function(){
    			if($(this).css("left")=="0px"){ 
    				if($('.banner .scroll img').index($(this))==0&&a<0){
    					$('.banner .btn span').eq(7).css("background-color","#fff");
    				}else if($('.banner .scroll img').index($(this))==7&&a>0){
    					$('.banner .btn span').eq(0).css("background-color","#fff");
    				}
    				else{
    					$('.banner .btn span').eq($('.scroll img').index($(this))+a).css("background-color","#fff");
    				}
    			}
    		})
    	}
    	
    	$('.banner .btn span').click(function(){
    		$('.banner .btn span').css("background-color","#666");
    		$(this).css("background-color","#fff");
    		var $in=$('.banner .btn span').index($(this));   		
    		var $ie=0;   		
    		$('.banner .scroll img').each(function(){
    			if($(this).css("left")=="0px"){ 
    				$ie=$('.banner .scroll img').index($(this));
    			}});
    		if($in<$ie){
    			$('.banner .scroll img').eq($in).css("left","-590px");
    			$('.banner .scroll img').eq($in).animate({
    				left:0,
    			});
    			$('.banner .scroll img').eq($ie).animate({
    				left:590,
    			})
    		}else if($ie<$in){
    			$('.banner .scroll img').eq($in).css("left","590px");
    			$('.banner .scroll img').eq($in).animate({
    				left:0,
    			});
    			$('.banner .scroll img').eq($ie).animate({
    				left:-590,
    			})
    		}
    	}) */
    //顶部固定搜索框	
$(window).scroll(function(){
			if($(window).scrollTop()>=400){
				$('#search-box').css('display','block')
			}else{
				$('#search-box').css('display','none')
			}
		}
		);


/*楼梯效果*/
  
  var $tops=[];
      $.each($('.floors>div'),function(i,v){
        $tops.push($(this).offset().top);
      });
      //console.log($tops);
        //解决滚动条事件问题:到达不了最后一个楼梯
        $tops.push(10000);
$('louti a').hover(function(){
	$(this).css("color","#FF0000");
},function(){
	$(this).css("color","white");
});


      var $smalllouti=$('.louti li').not('.louti-last-li');
      $smalllouti.on('click',function(){
        var $index=$(this).index();
        // $(this).addClass('bg-red').siblings().removeClass('bg-red');
        var $top=$tops[$index];
        // $(window).scrollTop($top-50);
        $('body,html').animate({
          scrollTop:$top-50
        },400);
      });


      var firstfloor=$('.floor-one').offset().top;
      $(window).on('scroll',function(){

        var $top=$(this).scrollTop()+400;
        if($top>firstfloor){
          $('.louti').show();
        }else{
          $('.louti').hide();
        }

        $.each($tops,function(i){
          if($top>$tops[i]&&$top<$tops[i+1]){
            $smalllouti.eq(i).addClass('bg-red').siblings().removeClass('bg-red');
          }
        });
      });

      //返回顶部
      $('.louti-last-li').on('click',function(){
        $('html,body').animate({
          scrollTop:0
        },400);
      });
      /*生成商品列表*/
// (function() {
// 	$.ajax({
// 		type: 'post',
// 		url: '../php/goods.php',
// 		success: function(d) {
// 			$arr = JSON.parse(d);
// 			console.log($arr);
// 			/*生成商品列表*/
// 			for(var j=0;j<11;j++){
// 				for(var i=0;i<5;i++){
// 					$('.more_inner ul').append('<li><a><dl><dt><img src="'+$arr[i].url+'"/></dt><dd></dd></dl><p class="line2"><span>评价2</span><span>收藏：2510</span></p><p class="line3"><span></span><em>￥3000</em><i>月售4笔</i></p></a></li>');
// 				}
// 			}
// 			$('.more_inner ul li img').css({'width':'228px','height':'250px'})
// 			$('.more_inner ul li').hover(function(){
// 				$(this).css({'box-sizing':'border-box','border':'1px solid red'})
// 			},function(){
// 				$(this).css('border','none');
// 				$(this).css({'border-bottom': '1px solid #f4f4f4','border-right':'1px solid #f4f4f4'});
// 			})
// 					}
// 				})
// })();

