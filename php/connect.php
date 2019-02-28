<?php
  header("content-type:text/html;charset=utf-8");
	$con=mysql_connect("localhost","root","");
	if($con){
		$db=mysql_select_db("jd");
    mysql_query("set names utf8");
	}
 ?>
