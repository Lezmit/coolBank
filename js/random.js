function calculandoAleatorio() {
	var longClick = $("#to").val().length;
	if(longClick == 9 ){
	    // var numAleatorio = Math.round(Math.random()*899+100);
			var numAleatorio = Math.round(Math.random()*899+100);
	    // numAleatorio;
	    var codigo = "SCOTIA-"+ numAleatorio;
	    alert(codigo);
	    localStorage.setItem("codigoAleatorio",numAleatorio);
	    localStorage.setItem("codigoLab",codigo);

	    location.href="login-sms.html"
	}
	else{
	    alert("ingrese 9 digitos ...");
	}
}  
    
var btn = document.getElementById("enviar-mensaje");
btn.addEventListener("click", function(e){
	e.preventDefault();
	calculandoAleatorio();
});

// var confirmar = document.getElementById("confirmar");
// confirmar.addEventListener("click", function(e){
// 	e.preventDefault();
// 	var codigoValidar = document.getElementById("codigo").value;
// 	if(codigoValidar == localStorage.getItem("codigoAleatorio")){
// 		location.href="home.html"
// 	}
// 	// alert(localStorage.getItem("codigoAleatorio"));
// });

// var confirmar = document.getElementById("confirmar");
// confirmar.addEventListener("click", function(e){
// 	e.preventDefault();
// 	var codigoValidar = document.getElementById("codigo");
// 	if(codigoValidar == localStorage.getItem("codigoAleatorio")){
// 		location.href="home.html"
// 	}
// });









































// $(document).ready( function(){;
//   // numberUser.keyup(codigoNext);
//   // numberUser.keydown(validandoCodigoNext);
//   $("#enviar-mensaje").click(codigo);
// });  


// function codigo(e){
// 	// this.disabled = true;
// 	e.preventDefault();
// 	// var numberUser =$("#to")
// 	var numberUser = $("#to");
// 	var length = $(numberUser).val().length();
// 	if (length == 9){
// 		// function myFunction() {
// 		//   var x = document.getElementById("demo")
// 		//   x.innerHTML = Math.floor((Math.random() * 10000) + 1);

// 		  alert(Math.floor((Math.random() * 10000) + 1));
// 		// }
// 	}else{
// 		alert("escribe bien el numero de cel")
// 	}
// }

// // function codigoNext(e){
// // 	e.preventDefault();
// //   var cod = $(this).val().length;
// //   var numeroAscii = e.keyCode;         
// //   if(cod==1){
// //       $(this).next().focus();
// //   }
// //   else if(numeroAscii==8){
// //       $(this).prev().focus();
// //   }
// // }


// // function validandoCodigoNext(e){
// //     var numeroAscii = e.keyCode;
// //     if(numeroAscii==8 || (numeroAscii>=48 && numeroAscii<= 57)){
// //         return true;
// //     }
// //     else{
        
// //         return false;
// //     }
// //  }
// // function validarCodigoAleatorio(){
// //     var codigoRecibido = localStorage.getItem("codigoLab");
// //     var cod1 = $("#codForm1").val();
// //     var cod2 = $("#codForm2").val();
// //     var cod3 = $("#codForm3").val();
// //     var codigoTotal = "LAB-"+cod1+cod2+cod3;
// //     if( codigoRecibido==codigoTotal){
// //         $(this).attr("href","register.html");
// //     }
// //     else{
// //         alert("Error de codigo , por favor ingrese codigo nuevamente")
// //     }
// // }


