
<%@page import="model.Genero"%>
<%@page import="model.Series"%>
<%@page import="dao.SeriesDao"%>
<%@page import="Controller.SeriesController"%>
<%@page import="java.util.ArrayList"%>
<%@page import="model.Usuario"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<%
    
    request.getSession();
    if(session.getAttribute("usuario") == null){
        
        session.setAttribute("usuario","");
    
    }
    
 String id_series =request.getParameter("id_series");
    
    SeriesController recController = new SeriesController();
    
    if(id_series != null){
        
        recController.ExcluirSeries(Integer.parseInt(id_series));
        
    }
    
     SeriesDao recDao = new SeriesDao();
    ArrayList <Series> serie;
    ArrayList <Genero> generos;
    
    serie = recDao.ListarSeries();
    generos = recDao.ListarGeneros();
    
    String generonome=request.getParameter("generonome");
       
    if(generonome != null){
                       
        Genero genero = new Genero(generonome);
                        
        recController.NovoGenero(genero);
        response.sendRedirect("listaSeries.jsp");
        
    }
    
   
%>

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

    <body >
               
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
        
        <br>        
        <div class="teste">              
                <% for(Series series : serie) { %>
                <div class="capa">
                    
                    <h2 class="text"><% out.print(series.getNome()); %></h2>
                     
                    <a href="<% out.print(series.getLink()); %>">
                    <img class="cartaz" src="<% out.print(series.getFoto()); %>">
                                                                        
                 </a>
									
                                                                        
                    <h4 class="text"> <% out.print(series.getGenero()); %></h4>
                
                    <a class="text" href="listaSeries.jsp?id_series=<%out.print(series.getId());%>">Excluir series</a>
                </div>                                                    
								
     
    
                  <% } %>
                   
        </div>
           
                  
    </body>
</html>
