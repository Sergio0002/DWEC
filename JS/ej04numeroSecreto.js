// NÚMERO SECRETO

function numeroSecreto() {

    let aleatorio = Math.floor(Math.random(1, 100) * 100);
    alert(aleatorio);

    let num = parseInt(prompt("Introduce el número secreto: "));
    let intentos = 1;

    while (num != aleatorio || !Number.isInteger(num)) {

        if (num < aleatorio) {
            alert("Más alto");
        } else if (num > aleatorio) {
            alert("Más bajo");
        }

        num = parseInt(prompt("Introduce el número secreto: "));

        if (num == aleatorio) {
            alert("Has acertado!");
        }
        intentos++;
    }

    if (confirm("Quieres jugar más?")) {
        numeroSecreto();
    } else
        alert("Hasta la próxima!");

    document.write("Lo has conseguido en " + intentos + " intentos!<br>");


}

numeroSecreto();




