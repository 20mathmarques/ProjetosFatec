/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Controller;

import dao.UsuarioDao;
import model.Usuario;


public class UsuarioController {
    
    static UsuarioDao usuDao = new UsuarioDao();
    
    public void NovoUsuario(Usuario usuario) {

      usuDao.NovoUsuario(usuario);
        
    }
    
    public Usuario Logar(String email, String senha) {

      return usuDao.Logar(email,senha);
        
    }
}
