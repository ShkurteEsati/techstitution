

 /*console.log(5+6);
console.log("Hello World");
window.alert("You visited Techstituion");



function consoleName(name)
{
console.log("Emri im eshte:",name);	
}

consoleName("Shkurte");

function Paraqitja (Emri,Vendlindja, Universiteti)
{
	console.log ("");
}
Paraqitja("Shkurte Esati","Ferizaj", "FIEK"); */

$(document).ready(function(){
console.log("DOM is ready!")

  $('#border-wait-form').submit(function(event){
       event.preventDefault();

       var pikaKufitare = $('#pika-kufitare').val();
       // vonesat ne hyrje dhe ne dalje
       var hyrjeMinMinuta = $('#hyrje-min-minuta').val();
       var hyrjeMaxMinuta = $('#hyrje-max-minuta').val();
       var daljeMinMinuta = $('#dalje-min-minuta').val();
       var daljeMaxMinuta = $('#dalje-max-minuta').val();

       //kolonat ne hyrje dhe ne dalje
       var hyrjeMinMetra = $('#hyrje-min-metra').val();
       var hyrjeMaxMetra = $('#hyrje-max-metra').val();
       var daljeMinMetra = $('#dalje-min-metra').val();
       var daljeMaxMetra = $('#dalje-max-metra').val();

       console.log("Pika Kufitare:",pikaKufitare,'\n',"Hyrje Min:",hyrjeMinMinuta,'\n',"Hyrje Max:", hyrjeMaxMinuta,'\n',"Dalje Min:",daljeMinMinuta,'\n',"Dalje Max:",daljeMaxMinuta,'\n',"Hyrje Min Metra:",hyrjeMinMetra,'\n',"Hyrje MAx Metra:",hyrjeMaxMetra,'\n',"Dalje Min Metra:",daljeMinMinuta,'\n',"Dalje Max Metra:",daljeMaxMetra,'\n')

  });
  
});