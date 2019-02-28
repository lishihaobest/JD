;(function(){
	/* 加载头脚 */
	$('#tou').load('top.html');
	$("#jiao").load('footer.html');
})()
;(function(){
	function goodslist(id,count){
		$.ajax({
			url:'../php/cart.php',//获取所有的接口数据
			dataType:'json'
		}).done(function(data){
			$.each(data,function(index,value){
				if(id==value.sid){//遍历判断sid和传入的sid是否相同，方便将那条数据设置到渲染的商品列表中。
					var $clonebox=$('.goods-item:hidden').clone(true,true);
					$clonebox.find('.goods-pic').find('img').attr('src',value.url);
					$clonebox.find('.goods-pic').find('img').attr('sid',value.sid);
					$clonebox.find('.goods-d-info').find('a').html(value.title);
					$clonebox.find('.b-price').find('strong').html(value.pricenum);
					$clonebox.find('.quantity-form').find('input').val(count);
					//计算每个商品的价格。
					$clonebox.find('.b-sum').find('strong').html((value.pricenum*count).toFixed(2));
					$clonebox.css('display','block');
					$('.item-list').append($clonebox);
					priceall();//计算总价的
				}
			});
		})
	}
	if(getcookie('cookiesid') && getcookie('cookienum')){
		var s=getcookie('cookiesid').split(',');//数组sid
		var n=getcookie('cookienum').split(',');//数组num
		$.each(s,function(i,value){
			goodslist(s[i],n[i]);
		});
	}
	
	//3.如果购物车为空，显示empty-cart盒子(购物车空空的)
	kong();
	function kong(){
		if(getcookie('cookiesid') && getcookie('cookienum')){
			$('.empty-cart').hide();//cookie存在，购物车有商品，隐藏盒子。
		}else{
			$('.empty-cart').show();
		}
	}
	
	//4.计算总价和总的商品件数，必须是选中的商品。
	function priceall(){
		var $sum=0;
		var $count=0;
		$('.goods-item:visible').each(function(index,element){
		  if($(element).find('.cart-checkbox input').prop('checked')){
		  	$sum+=parseInt($(element).find('.quantity-form').find('input').val());
			$count+=parseFloat($(element).find('.b-sum').find('strong').html());
		  }
		});
		
		$('.amount-sum').find('em').html($sum);
		$('.totalprice').html('￥'+$count.toFixed(2));
	}
	
	//5.全选操作
	$('.allsel').on('change',function(){
		$('.goods-item:visible').find(':checkbox').prop('checked',$(this).prop('checked'));
		$('.allsel').prop('checked',$(this).prop('checked'));
		priceall();//取消选项，重算总和。
	});
	
	var $inputs=$('.goods-item:visible').find(':checkbox');
	$('.item-list').on('change',$inputs,function(){//事件的委托的this指向被委托的元素
		if($('.goods-item:visible').find('input:checkbox').length==$('.goods-item:visible').find('input:checked').size()){
			$('.allsel').prop('checked',true);
		}else{
			$('.allsel').prop('checked',false);
		}
		priceall();//取消选项，重算总和。
	});
	
	//6.数量的改变
	//改变商品数量++
	$('.quantity-add').on('click', function() {
	    var $count = $(this).parents('.goods-item').find('.quantity-form input').val();//值
	    $count++;
	    if ($count >= 99) {
	        $count = 99;
	    }
	    $(this).parents('.goods-item').find('.quantity-form input').val($count);//赋值回去
	 	$(this).parents('.goods-item').find('.b-sum').find('strong').html(singlegoodsprice($(this)));//改变后的价格
	    priceall();//重新计算总和。
	    setcookie($(this));//将改变的数量重新添加到cookie
	
	});
	
	//改变商品数量--
	$('.quantity-down').on('click', function() {
	    var $count = $(this).parents('.goods-item').find('.quantity-form input').val();
	    $count--;
	    if ($count <= 1) {
	        $count = 1;
	    }
	    $(this).parents('.goods-item').find('.quantity-form input').val($count);
	    $(this).parents('.goods-item').find('.b-sum').find('strong').html(singlegoodsprice($(this)));//改变后的价格
	    priceall();
	    setcookie($(this));
	});
	
	//直接输入改变数量
	$('.quantity-form input').on('input', function() {
	    var $reg = /^\d+$/g; //只能输入数字
	    var $value = parseInt($(this).val());
	    if ($reg.test($value)) {//是数字
	        if ($value >= 99) {//限定范围
	            $(this).val(99);
	        } else if ($value <= 0) {
	            $(this).val(1);
	        } else {
	            $(this).val($value);
	        }
	    } else {//不是数字
	        $(this).val(1);
	    }
	    $(this).parents('.goods-item').find('.b-sum').find('strong').html(singlegoodsprice($(this)));//改变后的价格
	    priceall();
	    setcookie($(this));
	});
	
	//7.计算数量改变后单个商品的价格
	function singlegoodsprice(obj) { //obj:当前元素
	    var $dj = parseFloat(obj.parents('.goods-item').find('.b-price').find('strong').html());//单价
	    var $cnum = parseInt(obj.parents('.goods-item').find('.quantity-form input').val());//数量
	    return ($dj * $cnum).toFixed(2);//结果
	}
	
	//8.将改变后的数量的值存放到cookie
	//点击按钮将商品的数量和id存放cookie中
	var arrsid=[]; //商品的id
	var arrnum=[]; //商品的数量
	//提前获取cookie里面id和num
	function cookietoarray(){
		if(getcookie('cookiesid') && getcookie('cookienum')){
			arrsid=getcookie('cookiesid').split(',');//cookie商品的sid  
			arrnum=getcookie('cookienum').split(',');//cookie商品的num
		}
	}
	function setcookie(obj) { //obj:当前操作的对象
		cookietoarray();//得到数组
	    var $index = obj.parents('.goods-item').find('img').attr('sid');//通过id找数量的位置
	    arrnum[$.inArray($index,arrsid)] = obj.parents('.goods-item').find('.quantity-form input').val();
	    addcookie('cookienum', arrnum.toString(), 7);
	}
	
	//9.删除操作
	//删除cookie
	function delgoodslist(sid, arrsid) {//sid：当前删除的sid，arrsid:cookie的sid的值
	    var $index = -1;
	    $.each(arrsid,function(index,value){//删除的sid对应的索引位置。 index:数组项的索引
	    	if(sid==value){
	    		$index=index;//如果传入的值和数组的值相同，返回值对应的索引。
	    	}
	    });
	    arrsid.splice($index, 1);//删除数组对应的值
	    arrnum.splice($index, 1);//删除数组对应的值
	    addcookie('cookiesid', arrsid.toString(), 7);//添加cookie
	    addcookie('cookienum', arrnum.toString(), 7);//添加cookie
	}
	
	//删除单个商品的函数(委托)
	$('.item-list').on('click', '.b-action a', function(ev) {
		cookietoarray();//得到数组,上面的删除cookie需要。
	    if(confirm('你确定要删除吗？')){
	     	$(this).first().parents('.goods-info').remove();//通过当前点击的元素找到整个一行列表，删除
	    }
	    delgoodslist($(this).first().parents('.goods-info').find('img').attr('sid'), arrsid);
	    priceall();
	});
	
	
	//删除全部商品的函数
	$('.operation a:first').on('click', function() {
		cookietoarray();//得到数组,上面的删除cookie需要。
		if(confirm('你确定要全部删除吗？')){
		    $('.goods-item:visible').each(function() {
		        if ($(this).find('input:checkbox').is(':checked')) {//复选框一定是选中的
		            $(this).remove();
		            delgoodslist($(this).find('img').attr('sid'), arrsid);
		        }
		    });
		    priceall();
		}
	});
	$('#pricetips').hover(function(){
		$('#pricetipstxt').show();
	},function(){
		$('#pricetipstxt').hide();
	})
})();
	
	
	