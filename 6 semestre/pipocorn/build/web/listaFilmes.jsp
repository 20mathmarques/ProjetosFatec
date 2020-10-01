
<%@page import="model.Genero"%>
<%@page import="model.Filmes"%>
<%@page import="dao.FilmesDao"%>
<%@page import="Controller.FilmesController"%>
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
    
 String id_filmes =request.getParameter("id_filmes");
    
    FilmesController recController = new FilmesController();
    
    if(id_filmes != null){
        
        recController.ExcluirFilmes(Integer.parseInt(id_filmes));
        
    }
    
     FilmesDao recDao = new FilmesDao();
    ArrayList <Filmes> filme;
    ArrayList <Genero> generos;
    
    filme = recDao.ListarFilmes();
    generos = recDao.ListarGeneros();
    
    String generonome=request.getParameter("generonome");
       
    if(generonome != null){
                       
        Genero genero = new Genero(generonome);
                        
        recController.NovoGenero(genero);
        response.sendRedirect("listaFilmes.jsp");
        
    }
    
   
%>

<head>
        <title>Popcorn</title>
        <meta charset="UTF-8" />
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
                <% for(Filmes filmes : filme) { %>
                <div class="capa">
                    
                    <h2 class="text"><% out.print(filmes.getNome()); %></h2>
                     
                    <a href="<% out.print(filmes.getLink()); %>">
                    <img class="cartaz" src="<% out.print(filmes.getFoto()); %>">
                                                                        
                 </a>
									
                                                                        
                    <h4 class="text"> <% out.print(filmes.getGenero()); %></h4>
                
                    <a class="text" href="listaFilmes.jsp?id_filmes=<%out.print(filmes.getId());%>">Excluir filme</a>
                </div>                                                    
								
     
    
                  <% } %>
                   
        </div>
           
                  
    </body>
</html>
