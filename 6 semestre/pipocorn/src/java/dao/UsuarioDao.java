/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import model.Usuario;

public class UsuarioDao {
    Connection con = ConexaoDb.getConexaoDb();
    
    public void NovoUsuario(Usuario usuario){
      
        String sql = "INSERT INTO usuario(nome,senha,email,foto) VALUES(?,?,?,'?')";  
       
        try {  
            PreparedStatement stmt = con.prepareStatement(sql);  

            stmt.setString(1, usuario.getNome());  
            stmt.setString(2, usuario.getSenha());  
            stmt.setString(3, usuario.getEmail());

            stmt.execute();  
            stmt.close();  

        } catch (SQLException u) {  
            throw new RuntimeException(u);  
        }   
        
    }
    
    public Usuario Logar(String email, String senha){
        
        String nomec = "";
        String emailc = "";
        String senhac="";
        String fotoc=""; 
      
        String sql = "select * from usuario where email like '"+email+"' and senha like '"+senha+"'";  

        try {  
            Statement stmt = con.createStatement();
            ResultSet rs;
            rs = stmt.executeQuery(sql);
            while ( rs.next() ) {
                emailc = rs.getString("email");
                senhac=rs.getString("senha");
                nomec = rs.getString("nome");
                fotoc = rs.getString("foto");
            }
            
            Usuario usuario = new Usuario(nomec,emailc,senhac,fotoc);
        
            return usuario;

        } catch (SQLException u) {  
            throw new RuntimeException(u);  
        }   
      
        
    }
    
}
