/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){

    var id;

    $(".mostrar").on("click", function() {

            id =$(this).attr('name');

            var mostrar = $("#"+id).attr('title');

            if(mostrar == '0'){

                    $("#"+id).show(200);

                    $("#"+id).attr('title','1');



            }else{

                    $("#"+id).hide(200);

                    $("#"+id).attr('title','0');

            }

    });

$("#btnCriarconta").on("click", function() {

      $("#fmLogin").hide('slow');
      $("#btnCriarconta").hide('slow');
      $("#fmCadastro").show('slow');
      $("#btnVoltar").show('slow')

});
 $("#btnVoltar").on("click", function() {

      $("#fmLogin").show('slow');
      $("#btnCriarconta").show('slow');
      $("#btnVoltar").hide('slow')
      $("#fmCadastro").hide('slow');

    });

});

