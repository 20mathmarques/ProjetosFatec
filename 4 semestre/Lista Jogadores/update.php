<?php


	//Make a connection at bd
    require_once('connection.php'); 

	if(isset($_GET['cod'])){
		//catches the datas and change

		$sql = "select * from ".$_GET['tbl']." where ".$_GET['cl']." = ".$_GET['cod'];

		$query=mysqli_query($con,$sql);
		//makes the change in query
		$record=mysqli_fetch_array($query);

	}
	
	if(isset($_POST['send'])){

		if($_GET['tbl']=="team"){

			$name=$_POST['name'];
			$color=$_POST['color'];
			$date=$_POST['date'];

			mysqli_query($con,"update team set name_team='".$name."',color_emblem='".$color."',date_creation='".$date."',updated_at=NOW() where codteam=".$_GET['cod']);
			header("location:list.php");


		}else{

					$names=$_POST['names'];
					$last=$_POST['last'];
					$number=$_POST['number'];
					$time=$_POST['time'];

					$sql="update player set name_player='".$names."',last_name_player='".$last."',number_shirt=".$number.",codteam = ".$time.",updated_at=NOW() where id=".$_GET['cod'];


			mysqli_query($con,$sql);
			header("location:list.php");
		}

	}




?>

<!--Start the html-->

<!DOCTYPE html>

<html>

	<head>
	<title>Editar</title>	
	<link rel="shortcut icon" href="img/soccer.ico" type="image/x-png"/>	
	<!--Link to icon -->
	<a href="Menu.php"><img  src="img/fut.png" class="img1" ></a>

	

	<!-- Link to css -->
	<link rel="stylesheet" href="css/update/Update.css" type="text/css"  media="screen and (min-width: 1052px)" />
	
	

	</head>

		<body>

	
		<?php 
		//show which table is

		if($_GET['tbl'] == "team"){ ?>
		<h4>Editar o time</h4>

		<!--makes a refresh of the page-->
		<form action="#" name="form" method="post" enctype="multipart/form-data">

			<!--used to write and send to bank-->
		<p class="name">Nome do time: <input class="txt" value="<?php echo($record['name_team']); ?>" type="text" name="name" size="40"></input></p>
																

		<p class="name">Cor de Emblema: <input class="txt2" value="<?php echo($record['color_emblem']); ?>" type="text" name="color" size="40"></input></p>
		
		<p class="name">Data de criação:<input name="date" class="txt" value="<?php echo($record['date_creation']); ?>" type="date" placeholder="xxx/DD/xxx/MMx/xx/YYYY"></input></p>




		<button type="submit"  name="send" value="Enviar">Enviar</button>

			</form>

				<?php }else{ ?>
				<div>
				
				<h4>Editar o jogador</h4>

				<form action ="#" name="form" method="post" enctype="multipart/form-data">

				<p class ="name">Nome : <input class="txt" value="<?php echo($record['name_player']); ?>" type="text" name="names" size="40"></input></p>

				<p class ="name">Sobrenome:<input class="txt3" value="<?php echo($record['last_name_player']); ?>" type ="text" name="last" size ="40"></input></p>

				<p class="name">Número:<input class="txt" value="<?php echo($record['number_shirt']); ?>" name="number" type="number" ></input></p>
			
				<?php
				$query=mysqli_query($con,"select * from team");
				?>

				<p class ="name">Time do jogador:
				<select  name="time">
				<?php 
				
				while($times=mysqli_fetch_array($query)){
				?>
				<option value="<?php echo($times['codteam']); ?>"><?php echo($times['name_team']); ?></option>
				<?php
				}
				?>
				</select>
			</p>

			<button type="submit"  name="send" value="Enviar">Enviar</button>	


				</form>
				<?php } ?>
		</div>
		

		</body>

</html>