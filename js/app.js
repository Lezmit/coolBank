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

})