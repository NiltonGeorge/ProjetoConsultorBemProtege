/*
function mostrarPreco(dados){
    var dados_ojb = JSON.parse(dados);
    console.log(dados_ojb);
}

function pegarPreco(callback,brandId,vehicleId,yearId){
    var xhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            callback(this.responseText);
        }
    };
    xhttp.open("GET",'http://fipeapi.appspot.com/api/1/carros/veiculo/'+{brandId}+'/'{vehicleId}'/'{yearId}'.json");
    xhttp.send();
}

pegarPreco(mostrarPreco);
*/

$.ajax({
    url: "http://fipeapi.appspot.com/api/1/carros/veiculo/marcas.json",
}).then(sucesso,falha);
function sucesso(valor){
    var elemento;
    elemento = "<h3>";
    $(valor).find('marca').each(function(){
        var nome = $(this).find('marca').text();
        elemento += "</h3>";
    });
}
function falha(){
    $("div#marca").html("falha");
}


