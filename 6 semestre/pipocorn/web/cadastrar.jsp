<%
    String lgemail=request.getParameter("lgemail");
    String lgsenha=request.getParameter("lgsenha");
    String nome=request.getParameter("nome");
    String senha=request.getParameter("senha");
    String email=request.getParameter("email");
    String sair=request.getParameter("sair");
    
    request.getSession();
    if(session.getAttribute("usuario") == null){
        
        session.setAttribute("usuario","");
    
    }
    
    if(sair != null){
        
        session.setAttribute("usuario","");
        
    }else{
        
        if(session.getAttribute("usuario") != "" && session.getAttribute("usuario") != null){
        
            response.sendRedirect("listaFilmes.jsp");
        
        }
        
    }
 
    UsuarioController usuController = new UsuarioController();  
    
    
                
    if(lgemail != null){ 
                   
        Usuario usuario = usuController.Logar(lgemail,lgsenha);
                   
        if(usuario.getNome() == ""){
            out.print("<script type='text/javascript'>alert('Email ou senha incorretos');</script");
                       
        }else{
            
            session.setAttribute("usuario",usuario);  
            response.sendRedirect("listaFilmes.jsp");
            
        }
    }

    if(nome != null){
        Usuario usuario = new Usuario(nome,email,senha,"");
                        
        usuController.NovoUsuario(usuario);
        
        session.setAttribute("usuario",usuario);  
        response.sendRedirect("listaFilmes.jsp");
                        
   }

%>

<%@page import="Controller.UsuarioController"%>
<%@page import="dao.ConexaoDb"%>
<%@page import="model.Usuario"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
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
    <body >
    <header>
        <div id="logo"></div>   
    </header>
        <div id="main">

            <form class="forms" id="fmCadastro" method="post" action="#" >
                <input type="text" name="nome" value="" class="form-control" placeholder="Nome:"><br /><br />
                <input type="text" name="email" value="" class="form-control" placeholder="E-mail:"><br /><br />
                <input type="password" name="senha" value="" class="form-control" placeholder="Senha:"><br /><br />
                <input  class="btn btn-danger"  id="btnCadastro" type="submit" value="Cadastrar">
            </form>
            </div>
        </div>
    </body>
</html>