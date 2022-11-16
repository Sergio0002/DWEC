function mostraMensaje() {
    event.type= "click";
    console.log("Has cliclado con el ratón");
}

function mostraOtroMensaje() {
    console.log("Has cliclado con el ratón por esso se muestra este mensaje");
}

window.addEventListener("DOMContentLoaded", function (){

    let elDiv1 = document.getElementById("div_principal");
    let elDiv2= document.getElementById("div_secundario");

    elDiv1.addEventListener("click", mostraMensaje, true);
    elDiv2.addEventListener("click", mostraOtroMensaje, false);

})