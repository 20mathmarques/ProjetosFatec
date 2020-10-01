
	<?php
    //Make a connection at bd
    require_once('connection.php'); 

    if(isset($_GET['cod'])){

    		//deletes the teams
    		if($_GET['tbl'] == "team"){

    			mysqli_query($con,"delete from player where codteam=".$_GET['cod']);

    		}
    		//selects the table and columm selected
    		$sql = "delete from ".$_GET['tbl']." where ".$_GET['cl']."=".$_GET['cod'];
    		mysqli_query($con,$sql);
    	   }

    	   //check if the button was clicked, if it was, then go pro sql loop
    if(isset($_POST['search'])){


    	//this code make a search to bank
    
        // the LIKE check an world writed

        $sql="select * from team  where name_team like '%".$_POST['name']."%' and color_emblem like '%".$_POST['color']."%'";

      

		}else{

			$sql="select * from team";

		}

		//check if the button was clicked
		if(isset($_POST['show1'])){


			$sql="select * from player";

		}

		if(isset($_POST['search1'])){



			// this IF show all teams createds
			if($_POST['time'] == 0){

		    /// this code makes a search of data at bank
            // the LIKE check an world writed 
			
				$sql="select * from player  where name_player like '%".$_POST['names']."%'";

			}else{
				

				$sql="select * from player  where name_player like '%".$_POST['names']."%' and codteam=".$_POST['time'];

	
			}
        	

      


		}

	?>

	<!--Start the html-->


	<!DOCTYPE html>

	<html>


	 <head>
			
	 <title>Listar</title>
	 <!--Link to icon -->
	 <link rel="shortcut icon" href="img/soccer.ico" type="image/x-png"/>
			
	 <a href="Menu.php"><img  src="img/fut.png" class="img1" ></a>

	 <!-- Link to css -->

	 <link rel="stylesheet" href="css/list/list.css" type="text/css"  media="screen and (min-width: 1052px)" />

	 </head>

	     <body>
				
				
			<!--Title-->
			<h4>Procure o time </h4>
			<!--Refresh the pag-->
			<form action="#" method="post" name="search" enctype="multipart/form-data">
			
			<!--used to write-->

			<p class="name">Nome do time: <input class="txt" type="text" name="name" size="40" placeholder="Name team..."></input></p>

			<p class="name">Cor do escudo: <input class="txt" type="text" name="color" size="40" placeholder="Color emblem..."></input></p>
				
			<!--Button to click-->

			<input type="submit" name="search" value="pesquisar"/>

			<input class="show" type="submit" name="show" value="Mostrar todos"/>

			</form>

			<div>
			<h4>Procure o Jogador </h4>

			<!--refresh-->
			<form action="#" method="post" name="search" enctype="multipart/form-data">

			<!--Write the name player-->

			<p class="name">Nome do Jogador: <input class="txt" type="text" name="names" size="40" placeholder="Name of player..."></input></p>
			

			<!--List the teams created-->
				<?php
				$query=mysqli_query($con,"select * from team");
				?>
				<!--tittle of the search-->

				<p class ="name">Time do jogador:

				<select  name="time">
								
				<!---Option to show the all teams-->
				<option value='0'>Todos os times</option>

				<?php 
							
				while($times=mysqli_fetch_array($query)){
				?>

				<!--Search the teams searched-->
				<option value="<?php echo($times['codteam']); ?>"><?php echo($times['name_team']); ?></option>
				<?php
				}
				?>
				</select>
				</p>

				 <!--Button of search-->
				 <input type="submit" name="search1" value="search"/>
				 <!--Button of show-->

		   		 <input class="show" type="submit" name="show1" value="Mostrar todos"/>

				</form>
				
				</div>


 
				 <!-- Makes an list-->
				 <?php 
														
				 if(isset($_POST['show']) || isset($_POST['search'])){
				 $query=mysqli_query($con,$sql);
				 while($team=mysqli_fetch_Array($query)){
				 
				 ?>

				 <div class="list">
															
				
			     <table>
				 <p class="title">Time:</p>
				 <?php echo($team['name_team']); ?><a href="list.php?tbl=team&cl=codteam&cod=<?php echo($team['codteam']); ?>"><input class="delet" type="button" value="excluir"></a>
				 <a href="update.php?tbl=team&cl=codteam&cod=<?php echo($team['codteam']); ?>"><input class="edit" type="button" value="editar"></a>
				 </table>
				 </div>
															
				 <?php

				 } 
			}

						 ?>
					     <!--List the players created-->
						 <?php 
						 if(isset($_POST['show1']) || isset($_POST['search1'])){
						 $query=mysqli_query($con,$sql);
						 while($player=mysqli_fetch_Array($query)){

						 ?>

						 <div class="list">
																				
						 <table>
					     <p class="hm">Jogador:</p>

						 <?php echo($player['name_player']); ?><a href="list.php?tbl=player&cl=id&cod=<?php echo($player['id']); ?>"><input  class="delet" type="button" value="excluir"></a>
                         
                         <!--Go to pag update-->

						 <a href="update.php?tbl=player&cl=id&cod=<?php echo($player['id']); ?>"><input class="edit" type="button" value="editar"></a></table>
						 </table>
						 </div>
																				
						 <?php

					 } 
					}

			    			?>




		</body>


	</html>