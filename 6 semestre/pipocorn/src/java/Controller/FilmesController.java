/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Controller;

import dao.FilmesDao;
import java.util.ArrayList;
import model.Genero;
import model.Filmes;

public class FilmesController {
    static FilmesDao recDao = new FilmesDao();
    
     public ArrayList<Filmes> ListarFilmes(){
     
         return ListarFilmes();
         
     }
     
     public void NovoFilmes(Filmes filmes){
     
         recDao.NovoFilmes(filmes);
         
     }
     
     public void ExcluirFilmes(int id){
     
         recDao.ExcluirFilmes(id);
         
     }
     
     public ArrayList<Genero> ListarGeneros(){
     
         return ListarGeneros();
         
     }
     
     public void NovoGenero(Genero genero){
     
         recDao.NovoGenero(genero);
         
     }
    
}
