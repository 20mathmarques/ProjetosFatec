<?php 
	//Cria a conexão com o banco. No seu projeto, você faz o seguinte: ou cria um novo bd com o nome dblobianco, ou muda o valor de $banco para o banco que você criou. Exclua a tabela filmes e importe a nova que eu fiz.

	$servidor = "localhost";
	$usuario = "root";
	$senha = "";
	//aqui e o nome do banco de dados 
	$banco = "soccer";

	$con = mysqli_connect($servidor, $usuario, $senha, $banco);

?>