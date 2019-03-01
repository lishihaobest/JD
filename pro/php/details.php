<?php  
	
	include "connect.php";
	
	$id=$_GET['sid'];
	
	$result=mysql_query("select * from goods where sid=$id ");
	
	$shujuarr=mysql_fetch_array($result,MYSQL_ASSOC);
	
	echo json_encode($shujuarr);

?>