<?php
require_once('connect.php');
if(isset($_POST['usernamea'])){
	$user=$_POST['usernamea'];
	$result=mysql_query("select * from user where username = '$user'");
	if(mysql_fetch_array($result,MYSQL_ASSOC)){//存在
		echo false;
	}else{//不存在
		echo true;
	}
};
?>