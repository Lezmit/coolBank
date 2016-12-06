var telefonos = new Array();

$(document).ready(function(){

	var fechaSeleccionada = localStorage.getItem("fecha-inicio");
	var total = localStorage.getItem("num-invitados")*localStorage.getItem("aporte");

	$("#agregar-pata").click(agregarPata);
	$("#btn-fecha").click(seleccionarFecha);
	$("#aqui-fecha").text(fechaSeleccionada);
	$("#total").text(total);
	$("#btn-aporte").click(paso2);
	$("#btn-confirmacion").click(paso3);

	function agregarPata(){
		var telefono = prompt("¿Cuál es el teléfono de tu pata?");
		
		if (telefono != null) {
			telefonos.push(telefono);
			var template='<div class="num-personal-junta"><span class="text-junta-left">Pata</span><input type="number" value="'+telefono+'" class="text-junta-right"></input></div>';
		    
		    $("#invitados").append(template);
		}	
	}

	function seleccionarFecha(){
		var select = $(".nueva-junta option:selected").next().text();
	   	localStorage.setItem("fecha-inicio", select);
	}

	function paso2(){
		var longitud = $("#aporte").val().length;
		if (longitud <= 5 && longitud >= 2) {
			$("#btn-aporte").attr("href", "nueva-junta-paso3.html");

			var text = $("#aporte").val();
		   	localStorage.setItem("aporte", text);

		} else {
			alert("Puedes aportar entre 10 y 99999");
		}
	}

	function paso3(){
		var numInvitados = telefonos.length+1;

		localStorage.setItem("num-invitados", numInvitados);
	}

})