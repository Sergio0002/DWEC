function minasAleatorias() {
    
//   |
//   |
//   v

}

var minas = 5;
var aleatorios = []

while (aleatorios.length < minas) {

    var numeroAleatorio = Math.ceil(Math.random() * 25);
    var existe = false;

    for (var i = 0; i < aleatorios.length; i++) {

        if (aleatorios[i] == numeroAleatorio) {

            existe = true;

            break;
        }

    }
    if (!existe) {

        aleatorios[aleatorios.length] = numeroAleatorio;
    }

}

console.log("números aleatorios: " + aleatorios);


