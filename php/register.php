<?php
  //表单数据
  require_once('connect.php');
	if(isset($_POST['sub'])){
    $username=mysql_real_escape_string($_POST['username']);
    $password=mysql_real_escape_string($_POST['password']);
	  $password=md5($password);
    $email=mysql_real_escape_string($_POST['email']);
		$sql="insert into `user`(`username`,`password`,`email`) VALUES('{$username}','{$password}','{$email}')";
		$row=mysql_query($sql);
		if($row){
		  echo "<script>
		        alert('注册成功！正在进入登录页面...');
		        window.location.href='../src/login.html';
		    </script>";
		}
	};
	if(isset($_POST['usernamea'])){
		$user=$_POST['usernamea'];
		echo true;
		$result=mysql_query("select * from user where username = $user");
		
		if(mysql_fetch_array($result,MYSQL_ASSOC)){//存在
			echo false;
		}else{//不存在
			echo true;
		}
	};
//文本框内容
?>