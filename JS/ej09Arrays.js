class Tablero2 {

    constructor(filas, columnas, minas) {

        this.filas = filas;
        this.columnas = columnas;
        this.minas = minas;

        this.crearTableron();
        this.colocarMinasn();
    }

    crearTableron() {

        this.arrayTablero = [];

        for (let fila = 0; fila < this.filas; fila++) {
            this.arrayTablero[fila] = [];

            for (let columna = 0; columna < this.columnas; columna++) {
                this.arrayTablero[fila][columna] = "";
            }
        }
        
    }

    dibujarTableron() {

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

    colocarMinasn(){

        let contadorMinas = 0;
        let posFila;
        let posColumna;

        while(contadorMinas < this.minas){

            posFila = Math.floor(Math.random() * this.filas);
            posColumna = Math.floor(Math.random() * this.columnas);

            if (this.arrayTablero[posFila][posColumna] != 'Mina') {
                this.arrayTablero[posFila][posColumna] = 'Mina';
                contadorMinas++;
            }
        }
    }
}

let juego = new Tablero2(4, 4, 5);
juego.dibujarTableron();
console.log(juego.arrayTablero);
 