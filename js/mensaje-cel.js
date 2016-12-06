var apiKey="a1ed5e85";
 var apiSecret="70a11388d27db06d";

$("#enviar-mensaje").click(function(e){
    e.preventDefault();

    var celular = "51" + $("#to").val();
    var urlRequest = "https://api.nexmo.com/verify/json";

    var data = {
      api_key: apiKey,
      api_secret: apiSecret,
      number: celular,
      brand: 'NexmoVerifyTest'
    }

    $.ajax({
        dataType: "json",
        url: urlRequest,
        data: data,
        type: 'GET',
        success: function(data){
            //console.log(data);
            requestId = data.request_id;
            //alert('SUCCESS');
            window.location.href = "login-sms.html";
            //window.open("login-sms.html?id=".requestId);
        },
        error: function(error){
          //alert('error');
          //console.log(error);
          window.location.href = "login-sms.html";
        }
    });

});

$("#confirmar").click(function(e){
    e.preventDefault();

    var codigo = $("#codigo").val();
    var requestId = getUrlParameter("id");

    var urlVerify = "https://api.nexmo.com/verify/check/json?api_key="+apiKey+"&api_secret="+apiSecret+"&request_id=1&code="+codigo;

    $.ajax({
        dataType: "json",
        url: urlVerify,
        success: function(data){
            if (data.status == 0){
                window.location.href = "home.html";
            }
        },
        error: function(error){
          window.location.href = "home.html";
        }
    });
});
var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;
        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    };