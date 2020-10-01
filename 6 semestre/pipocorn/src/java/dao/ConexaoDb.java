/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;
                  
import java.sql.Connection; 
import java.sql.DriverManager; 
import java.sql.SQLException; 

public class ConexaoDb {
    public static String status = "Erro na conexão";
 
        public ConexaoDb() {
 
    } 
 
public static java.sql.Connection getConexaoDb() {
 
        Connection connection = null;          
    
try {
  
String driverName = "com.mysql.jdbc.Driver";                        
 
Class.forName(driverName);
 

        String serverName = "localhost";    
 
        String mydatabase = "pipocorn";        
 
        String url = "jdbc:mysql://127.0.0.1:3306/"+ mydatabase;
 
        String username = "root";             
 
        String password = "";      
 
        connection = DriverManager.getConnection(url, username, password);

 
        if (connection != null) {
 
            status = ("STATUS--->Conectado com sucesso!");
 
        } else {
 
            status = ("STATUS--->Não foi possivel realizar conexão");
 
        }
  
        return connection;
 
        
        } catch (ClassNotFoundException e) {  
   
            System.out.println("O driver expecificado nao foi encontrado.");
 
            return null;
 
        } catch (SQLException e) {
 
            System.out.println("Não foi possivel conectar ao Banco de Dados");
 
            return null;
 
        }
    
    }
 
 
    public static String statusConection() {
 
        return status;
 
    }
 
 
    public static boolean FecharConexao() {
 
        try {
 
            ConexaoDb.getConexaoDb().close();
 
            return true;
 
        } catch (SQLException e) {
 
            return false;
 
        }
  
 
    }
 

    public static java.sql.Connection ReiniciarConexao() {
 
        FecharConexao();
 
        return ConexaoDb.getConexaoDb();
 
    }
}
