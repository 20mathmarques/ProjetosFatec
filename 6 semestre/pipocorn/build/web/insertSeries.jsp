
<%@page import="java.util.ArrayList"%>
<%@page import="dao.SeriesDao"%>
<%@page import="model.Genero"%>
<%@page import="Controller.SeriesController"%>
<%@page import="model.Series"%>
<%@page import="Controller.UsuarioController"%>
<%@page import="dao.ConexaoDb"%>
<%@page import="model.Usuario"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
     request.getSession();
    if(session.getAttribute("usuario") == null){
        
        session.setAttribute("usuario","");
    
    }
    
    String nome=request.getParameter("nome");
       
    if(nome != null){
        String link=request.getParameter("link");
        String genero=request.getParameter("genero");
        String foto=request.getParameter("foto");
        
                       
        Series series = new Series(nome,link,genero,foto);
                        
       SeriesController recController = new SeriesController();
        recController.NovoSeries(series);
        response.sendRedirect("listaSeries.jsp");
        
    }
    
    SeriesDao recDao = new SeriesDao();
    ArrayList <Genero> generos;
    
    generos = recDao.ListarGeneros();

%>



<!DOCTYPE HTML>

<html>
  <head>
        <title>Popcorn</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" 
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="padrao.css"/>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
        <script type="text/javascript" src="js/jquery.js"></script>
        <script type="text/javascript" src="js/drop.js"></script>

</head>
    <body id="top">
    
    <header>
        <div id="logo"></div>
    </header>
        
        <nav>
            <ul  id="menu">
               
                <li >
                 <a href="listaFilmes.jsp">Filmes</a>
                </li>
                
                <li>
                 <a href="insertFilmes.jsp">Adcionar Filmes</a>
                </li>
                
                <li>
                 <a href="listaSeries.jsp">Series</a>
                </li> 
                
                
                <li>
                 <a href="insertSeries.jsp">Adcionar Series</a>
                </li> 
                
            </ul>
        
        </nav>
    <!-- Main -->
        <div id="main">

            <form class="forms" method="post" action="#">
                <input type="text" name="nome" value="" class="form-control" placeholder="Nome da serie" > <br /><br />

                <input type="text" name="link" class="form-control" placeholder="link do site">
                <br />

                <input type="text" name="foto" class="form-control" placeholder="link da foto"><br /><br />
                
                    <select name="genero" class="form-control">
                       <% for(Genero genero : generos) { %>
                       <option value="<% out.print(genero.getNome()); %>"><% out.print(genero.getNome()); %></option>
                       <% } %>
                    </select> <br /><br />
                <input class="btnForm" id="btnCadastro" type="submit" value="adcionar serie">
            </form>
        </div>
    </body>
</html>