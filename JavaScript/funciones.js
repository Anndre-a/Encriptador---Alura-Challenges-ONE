/*a - ai
e - enter
i - imes 
o - ober 
u - ufat
::::::::
e - enter
o - ober 
i - imes 
a - ai
u - ufat*/

function encriptar() {
    var texto = document.getElementById("textInput").value.toLowerCase();
    var txtCifrado = texto.replace(/e/igm, "enter");
    txtCifrado = txtCifrado.replace(/o/igm, "ober");
    txtCifrado = txtCifrado.replace(/i/igm, "imes");
    txtCifrado = txtCifrado.replace(/a/igm, "ai");
    txtCifrado = txtCifrado.replace(/u/igm, "ufat");

    document.getElementById("img_panel_derecho").style.display = "none";
    document.getElementById("texto__1").style.display = "none";
    document.getElementById("texto__2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "block";
}

function desencriptar() {
    var texto = document.getElementById("textInput").value.toLowerCase();
    var txtDescifrado = texto.replace(/enter/igm, "e");
    txtDescifrado = txtDescifrado.replace(/ober/igm, "o");
    txtDescifrado = txtDescifrado.replace(/imes/igm, "i");
    txtDescifrado = txtDescifrado.replace(/ai/igm, "a");
    txtDescifrado = txtDescifrado.replace(/ufat/igm, "u");

    document.getElementById("img_panel_derecho").style.display = "none";
    document.getElementById("texto__1").style.display = "none";
    document.getElementById("texto__2").innerHTML = txtDescifrado;
    document.getElementById("copiar").style.display = "block";
}

function copiar() {
    var contenido = document.getElementById("texto__2");
    var texto = contenido.textContent || contenido.innerText; 

    var textarea = document.createElement("textarea"); 
    textarea.value = texto; 
    document.body.appendChild(textarea); 
    textarea.select(); 
    document.execCommand("copy");
    document.body.removeChild(textarea);

    alert("Texto copiado al portapapeles");
}

