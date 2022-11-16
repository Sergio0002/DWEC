class Tablero3 {

    constructor(filas, columnas, numMinas) {
        this.filas = filas;
        this.columnas = columnas;
        this.numMinas = numMinas;

        this.crearTablero3();
        this.colocarMinas3();
        this.colocarNumMinas3();
    }

    crearTablero3() {
        this.arrayTablero = []; // crea tablero virtual...
        for (let fila = 0; fila < this.filas; fila++) {
            this.arrayTablero[fila] = [];

            for (let columna = 0; columna < this.columnas; columna++) {

                this.arrayTablero[fila][columna] = "";
            }
        }
    }

    dibujarTablero3() {
        document.write("<table>");
        for (let i = 0; i < this.filas; i++) {

            document.write("<tr>");
            for (let j = 0; j < this.columnas; j++) {

                document.write(`<td>${this.arrayTablero[i][j]}</td>`);
            }
            document.write("</tr>");

        }
        document.write("</table>");

    }

    colocarMinas3() {
        let contadorMinas = 0;
        let posFilas;
        let posColumnas;

        while (contadorMinas < this.numMinas) {
            posFilas = Math.floor(Math.random() * this.filas);
            posColumnas = Math.floor(Math.random() * this.columnas);

            if (this.arrayTablero[posFilas][posColumnas] != 'Mina') {
                this.arrayTablero[posFilas][posColumnas] = 'Mina';
                contadorMinas++;
            }
        }
    }

    colocarNumMinas3() {
        let numMinasAlrededor;

        for (let fila = 0; fila < this.filas; fila++) {

            for (let columna = 0; columna < this.columnas; columna++) {
                numMinasAlrededor = 0;

                if (this.arrayTablero[fila][columna] != 'Mina') {

                    for (let cFila = fila - 1; cFila <= fila + 1; cFila++) {

                        if (cFila >= 0 && cFila < this.filas) {

                            for (let cColumna = columna - 1; cColumna <= columna + 1; cColumna++) {

                                if (cColumna >= 0 && cColumna < this.columnas &&
                                    this.arrayTablero[cFila][cColumna] == 'Mina') {
                                    numMinasAlrededor++;
                                }
                            }
                        }
                        this.arrayTablero[fila][columna] = numMinasAlrededor;
                    }
                }
            }
        }
    }


}

let juego2 = new Tablero3(4, 4, 5);
juego2.dibujarTablero3();
console.log(juego2.arrayTablero3);
