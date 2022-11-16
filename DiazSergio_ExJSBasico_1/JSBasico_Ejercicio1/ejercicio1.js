let num = prompt("Introduce un número entre el 1 y el 10");

while (num < 1 || num > 10) {

    alert("El número está fuera de rango. Vuelve a introducirlo")
    num = prompt("Introduce un número entre el 1 y el 10");
}


function numAleatorio(num) {

    let aleatorio = Math.floor(Math.random(1, 10) * 10);
    let aletorioCoincide = false;

    if (num == aleatorio) {
        aletorioCoincide = true;
    }

    if (aletorioCoincide) {
        alert("¡Enhorabuna, has acertado!");
    } else {
        alert("Lo sentimos, NO has acertado.")
    }
}

numAleatorio(num);
