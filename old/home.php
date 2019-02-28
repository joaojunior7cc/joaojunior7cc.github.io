<html>
	<head>
		<title>HOMEPAGE®JJR</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="./css/w3.css">
        <?/*<script src="./css/w3.css"></script>*/?>

        <?
        include('./modulos/home/backgroundHome.php');
        include('./bd/ConexaoMyHome.php');
        //include('./ferramentas/LerArquivo.php');
        include ('./ferramentas/alerta.html');
        include('./bd/Comandos.php');
        include('./conf/shortcut.php');
        //include('./modulos/aminacao.php');

        ?>
	</head>

	<body name="home"  bgcolor="#696969" >
		 <form name="home" method="POST" action="">
             <center>
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                    <td colspan="3"><?php include('./modulos/home/topoImgHome.php');?>
                                    </td>
                    <tr>
                    <td><?php include('./modulos/slide.php'); ?>
                        <?php include('./modulos/latMenu.php'); ?>
                        <?php include('./modulos/latCalendario.php'); ?>
                        <?php include('./modulos/latGIF2.php'); ?>
                        <?php include('./modulos/latScrap.php'); ?>
                        <br></br>
                        <br></br>

                    </td>

                    <td><?php include('./modulos/home/topoMenu.php'); ?>
                        <?php include('./modulos/home/centro.php'); ?>
                        <?php include('./modulos/home/centro.php'); ?>
                        <?php include('./modulos/baixo.php'); ?></td>

                    <td>
                        <?php include('./modulos/latMedia.php'); ?>
                        <?php include('./modulos/latPublicidade.php'); ?>
                        <?php include('./modulos/latNuvem.php'); ?>
                        <?php include('./modulos/latServidores.php'); ?>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </td>

                    </tr>
                </table>
                 <?php include('./modulos/animacao.php'); ?>
            </center>
         </form>
	</body>
</html>
<?
/*cor na janela:
 * <div style='background:#363636;'>
 * </div>
 * 
 * ou
 * <body bgcolor="#363636">
 * </body>
 * 
 * 
 * */

?>
