<?php
	 require_once('./connect.php');
	$query='select * from goods';//定义sql语句
	$result=mysql_query($query);//执行sql语句。将结果存入变量中
	//echo mysql_num_rows($result);
	$arr=array();
	for($i=0;$i<mysql_num_rows($result);$i++){
		//mysql_fetch_array：获取记录集每一条数据，结果还是数组
		$arr[$i]=mysql_fetch_array($result,MYSQL_ASSOC);
	}
	echo json_encode($arr);///转json格式并输出
	
?>