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

			});