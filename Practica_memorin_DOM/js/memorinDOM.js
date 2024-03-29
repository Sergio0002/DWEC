class Tablero {

    constructor(filas, columnas) {
        this.filas = filas;
        this.columnas = columnas;
        this.crearTablero();
    }


    crearTablero() {

        this.arrayTablero = [];

        for (let fila = 0; fila < this.filas; fila++) {
            this.arrayTablero[fila] = [];
            for (let columna = 0; columna < this.columnas; columna++) {
                this.arrayTablero[fila][columna] = '';
            }
        }
    }


    // dibujarTableroHtml() {

    //     document.write("<table>");
    //     for (let filas = 0; filas < this.filas; filas++) {
    //         document.write("<tr>");
    //         for (let columnas = 0; columnas < this.columnas; columnas++) {
    //             document.write(`<td>${this.arrayTablero[filas][columnas]}</td>`);
    //         }
    //         document.write("</tr>")
    //     }
    //     document.write("</table>");
    // }

    dibujarTablero() {
        // Creamos el tablero en DOM
        let tabla = document.createElement('table');
        let fila;
        let columna;
        let img;

        for (let i = 0; i < this.filas; i++) {
            fila = document.createElement('tr');
            tabla.appendChild(fila);

            for (let j = 0; j < this.columnas; j++) {
                columna = document.createElement('td');
                img = document.createElement('p')
                columna.id = `f${i}_c${j}`;
                columna.dataset.fila = i;
                columna.dataset.columna = j;
                fila.appendChild(columna);
                columna.appendChild(img);
                img.innerHTML = this.arrayTablero[i][j];

                console.log(this.arrayTablero[i][j])
            }
        }

        document.body.appendChild(tabla);
    }


}



class Memorin extends Tablero {
    totalCasillas = this.filas * this.columnas;
    imagenes = ["&#128512;", "&#128513;", "&#128514;", "&#128515;", "&#128517;", "&#128520;", "&#128525;", "&#128526;", "&#128531;", "&#128536;"];
    // imagenes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    imagenesDesordenadas = [];

    constructor(filas, columnas) {
        super(filas, columnas);
        this.crearParejas(this.imagenes);
        this.pintaParejas(this.imagenesDesordenadas);
    }


    desordenarImagenes(arrayImagenes) {

        for (let i = 0; i < this.totalCasillas; i++) {
            arrayImagenes = arrayImagenes.sort(function () { return Math.random() - 0.5 });
        }

        return arrayImagenes;
    }

    // Recibe array con imágenes, las desordena y crea parejas.
    crearParejas(arrayImagenes) {
        arrayImagenes = this.desordenarImagenes(arrayImagenes);
        let indice = 0;

        while (this.imagenesDesordenadas.length < this.totalCasillas) {
            this.imagenesDesordenadas.push(arrayImagenes[indice]);
            this.imagenesDesordenadas.push(arrayImagenes[indice]);
            indice++;

            if (indice == arrayImagenes.length) {
                indice = 0;
            }
        }
    }

    // Recibe array desordenado por parejas. Se desordenan las parejas y se pinta. 
    pintaParejas(arrayDesordenado) {

        arrayDesordenado = this.desordenarImagenes(arrayDesordenado);
        let indice = 0;

        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.arrayTablero[i][j] = arrayDesordenado[indice];
                indice++;

            }
        }
    }

}



// Se comprueba que los datos recibidos son correctos, y se inicia el programa.


do {
    var valoresOk = false;
    let filas = 4 //parseInt(prompt("Introduce las filas del tablero"));
    let columnas = 4 // parseInt(prompt("Introduce las columnas del tablero"));
    let total = filas * columnas;

    if (Number.isInteger(filas) && Number.isInteger(columnas) && filas != 0 && columnas != 0 && filas > 1 && columnas > 1) {

        if (total % 2 == 0) {
            valoresOk = true;
            let memorin = new Memorin(filas, columnas);
            memorin.dibujarTablero();

        } else {
            alert("Introduce al menos un número par");
        }
    } else {
        alert("Escribe un número positivo");
    }
} while (!valoresOk);

