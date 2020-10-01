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
import java.util.ArrayList;
import model.Genero;
import model.Series;
import model.Usuario;


public class SeriesDao {
    Connection con = ConexaoDb.getConexaoDb();
    
    public ArrayList<Series> ListarSeries(){
        
        String sql="select * from series";
        
        int id = 0;
        String nome = "";
        String link = "";
        String genero = "";
        int id_usuarioc = 0;
        
         try {  
            Statement stmt = con.createStatement();
            ResultSet rs;
            rs = stmt.executeQuery(sql);
            ArrayList <Series> series = new ArrayList();
            while ( rs.next() ) {
                
                
                Series serie;
                serie = new Series(
                        rs.getString("nome"),
                        rs.getString("link"),
                        rs.getString("genero"),
                        rs.getString("foto")
                );
                
                serie.setId(rs.getInt("id"));
                series.add(serie);
                
            }
            
            
            return series;

        } catch (SQLException u) {  
            throw new RuntimeException(u);  
        }
        
    }
    
    public void NovoSeries(Series series){
      
        
       String sql = "INSERT INTO series(nome,link,genero,foto) VALUES(?,?,?,?)";  
       
        try {  
            PreparedStatement stmt = con.prepareStatement(sql);  

            stmt.setString(1, series.getNome());
            stmt.setString(2, series.getLink());
            stmt.setString(3, series.getGenero());
            stmt.setString(4, series.getFoto());


            stmt.execute();
            stmt.close();  

        } catch (SQLException u) {  
            throw new RuntimeException(u);  
        }   
        
    }
    
    public void ExcluirSeries(int id){
      
        
       String sql = "delete from series where id = ?";
        try {  
            PreparedStatement stmt = con.prepareStatement(sql);  

            stmt.setInt(1, id);

            stmt.execute();  
            stmt.close();  

        } catch (SQLException u) {  
            throw new RuntimeException(u);  
        }   
        
    }
    
     public ArrayList<Genero> ListarGeneros(){
        
        String sql="select * from genero";
        
        int id = 0;
        String nome = "";
        
         try {  
            Statement stmt = con.createStatement();
            ResultSet rs;
            rs = stmt.executeQuery(sql);
            ArrayList <Genero> generos = new ArrayList();
            while ( rs.next() ) {
                
                
                Genero genero;
                genero = new Genero(
                        rs.getString("nome")
                );
                
                genero.setId(rs.getInt("id"));
                generos.add(genero);
                
            }
            
            
            return generos;

        } catch (SQLException u) {  
            throw new RuntimeException(u);  
        }
        
    }
     
      public void NovoGenero(Genero genero){
      
        
       String sql = "INSERT INTO genero(nome) VALUES(?)";  
       
        try {  
            PreparedStatement stmt = con.prepareStatement(sql);  

            stmt.setString(1, genero.getNome());


            stmt.execute();  
            stmt.close();  

        } catch (SQLException u) {  
            throw new RuntimeException(u);  
        }   
        
    }
    
    
}
