<?php
	require_once('./connect.php');
	$query='select * from goods';//定义sql语句
	$result=mysql_query($query);
	$arr=array();
	for($i=0;$i<mysql_num_rows($result);$i++){
		$arr[$i]=mysql_fetch_array($result,MYSQL_ASSOC);
	}
	echo json_encode($arr);///转json格式并输出
	
?>