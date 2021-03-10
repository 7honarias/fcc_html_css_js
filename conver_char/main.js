var cadena = document.getElementById("campoEntrada");
var pantalla = document.getElementById("pantalla");

function codificar() {
    var caracteres = [];
    valor = cadena.value;
    for (var i = 0; i <  valor.length; i++)
    {
        caracteres[i] = valor.charAt(i).charCodeAt(0);
    }
    pantalla.innerHTML = caracteres.toString();
}

function decodificar() {
    valor = cadena.value;
    if (valor != "")
    {
        var caracteres = valor.split(",");
        for (var i = 0; i < caracteres.length; i++)
        {
            caracteres[i] = String.fromCharCode(caracteres[i]);
        }
        pantalla.innerHTML = caracteres.toString();


    }
    else{
        alert("Porfavor ingresa un valor");
    }
}