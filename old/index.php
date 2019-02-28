<?php
//Meu Server no UBUPC: $uri=jjr.webhop.me
//	header('Location:ftp://jjr.myftp.org');
		
	if (!empty($_SERVER['HTTPS']) && ('on' == $_SERVER['HTTPS'])) {
		$uri = '';
	} else {
		$uri = '';
	}
	$uri .= $_SERVER['HTTP_HOST'];
	header('Location:./home.php');
	exit;
?>
Something is wrong with the XAMPP installation :-(
