class Nif {

    constructor(numero, letra) {
        this.numero = numero;
        this.letra = letra;
    }


    esCorrecto() {
        document.write("Dentro del método");

        // TERMINAR ESTE EJERCICIO

        // if (largo == length(this.numero)) { 
        //     return alert("Es correcto");

        // } else {
        //     return alert("No es correcto");
        // }


    }

}

dni = new Nif(1234567, 'A');

document.write(dni.esCorrecto());