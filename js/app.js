var telefonos = new Array();

$(document).ready(function(){
	$("#next").click(validandoAporte);
	$("#agregar-pata").click(agregarPata);

	function validandoAporte() {
		var longitud = $("#aporte").val().length;
		if (longitud <= 5 && longitud >= 2) {
			$("#next").attr("href", "nueva-junta-paso3.html");
		} else {
			alert("Puedes aportar entre 10 y 99999") 
		}
	}

	function agregarPata(){
		var telefono = prompt("¿Cuál es el teléfono de tu pata?");
		
		if (telefono != null) {
			telefonos.push(telefono);
			var template='<div class="num-personal-junta"><span class="text-junta-left">Pata</span><input type="number" value="'+telefono+'" class="text-junta-right"></input></div>';
		    
		    $("#invitados").append(template);
		}	
	}

})