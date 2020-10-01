<?php
	//Make a connection at bd
	include "connection.php";

	//checks if the elements exist and send
	// this is for team
	if(isset($_POST['send'])){

		$name=$_POST['name'];
		$color=$_POST['color'];
		$date=$_POST['date'];
		

					//sends the data to bank
					//the NOW show us the time of created and update
					$sql="insert into team(name_team,color_emblem,date_creation,created_at) values ('".$name."','".$color."','".$date."',NOW())";
					//connection whit bank
					mysqli_query($con,$sql);

					echo('
					<script>
						alert("Cadastro do time feito");
					</script>
				');

				}
					//checks if the elements exist and send
					// this is for player

				if(isset($_POST['mail'])){

					$names=$_POST['names'];
					$last=$_POST['last'];
					$number=$_POST['number'];
					$time=$_POST['time'];


					 //sends the data to ban 
					 //the NOW show us the time of created and update
					 $sql="Insert into player(name_player,last_name_player,number_shirt,codteam,created_at) values ('".$names."','".$last."','".$number."',".$time.",NOW())";

					//connection whit bank
					mysqli_query($con,$sql);

					echo('
					<script>
						alert("Cadastro do jogador completo");
					</script>
				');


				
			}


?>

	<!--Start the html-->

	<!DOCTYPE html>

	<html>

		<head>
		<title>Cadastrar</title>	

		<link rel="shortcut icon" href="img/soccer.ico" type="image/x-png"/>
		<!--Link to icon -->
		<a href="Menu.php"><img  src="img/fut.png" class="img1" ></a>	

		<!-- Link to css -->

		<link rel="stylesheet" href="css/create/create.css" type="text/css"/>

		</head>

			<body>
				
			
				
			<h4>Cadastre o time</h4>
			<!--makes a refresh of the page-->
			<form action="#" name="form" method="post" enctype="multipart/form-data">
				<!--used to write and send to bank-->
			<p class="name">Nome do time: <input class="txt" type="text" name="name" size="40"></input></p>
			<!--the NAME has to be the same name the put at $sql-->
			<p class="name">Cor de Emblema: <input class="txt2" type="text" name="color" size="40"></input></p>
			
			<p class="name">Data de criação:<input name="date" class="txt3" type="date" placeholder="xxx/DD/xxx/MMx/xx/YYYY"></input></p>


			<!--Button to sand-->

			<button type="submit"  name="send" value="Send">Enviar</button>

			</form>
			
			<div>
			
			<h4>Inclua o jogador</h4>

			<form action ="#" name="form" method="post" enctype="multipart/form-data">

			<p class ="name">Nome:<input class="tx" type="text" name="names" size="40"></input></p>

			<p class ="name">Sobrenome:<input class="tx2" type ="text" name="last" size ="40"></input></p>

			<p class="name">Número:<input class="tx3" name="number" type="number" ></input></p>

			<!--call the team table-->
			<?php
			$query=mysqli_query($con,"select * from team");
			?>
			<!--Tittle-->
			<p class ="name">Time do jogador:
			<!--creates a picker-->
			<select  name="time">

			<!--here this code catch the names of team table and  put at player table-->	
			<?php 
	
			while($times=mysqli_fetch_array($query)){
			?>
			<option value="<?php echo($times['codteam']); ?>"><?php echo($times['name_team']); ?></option>
			<?php
			}
			?>
			</select>

			</p>

			<!--Button to sand-->
			<button type="submit"  name="mail" value="mail">Mandar</button>	


			</form>

	</div>
			

			</body>

	</html>