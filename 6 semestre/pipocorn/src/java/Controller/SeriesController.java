/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Controller;

import dao.SeriesDao;
import java.util.ArrayList;
import model.Genero;
import model.Series;

public class SeriesController {
    static SeriesDao recDao = new SeriesDao();
    
     public ArrayList<Series> ListarSeries(){
     
         return ListarSeries();
         
     }
     
     public void NovoSeries(Series series){
     
         recDao.NovoSeries(series);
         
     }
     
     public void ExcluirSeries(int id){
     
         recDao.ExcluirSeries(id);
         
     }
     
     public ArrayList<Genero> ListarGeneros(){
     
         return ListarGeneros();
         
     }
     
     public void NovoGenero(Genero genero){
     
         recDao.NovoGenero(genero);
         
     }
    
}
