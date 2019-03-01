<?php
	require_once('connect.php');
	if(isset($_POST['username']) && isset($_POST['password'])){
		$user=$_POST['username'];
		$pass=($_POST['password']);
		$pass=md5($pass);
		$result=mysql_query("select * from user where username='$user' and password='$pass' ");
		if(mysql_fetch_array($result)){
			echo true;//登陆成功
		}else{
			echo false;//登陆失败
		}
	}
?>