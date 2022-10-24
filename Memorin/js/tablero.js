class Tablero {

    constructor(filas, columnas) {

        this.filas = filas;
        this.columnas = columnas;
        // document.write("<h3>Dentro del constructor</h3><br>");
        this.crearTablero();

    }

    crearTablero() {

        this.arrayTablero = [];

        for (let filas = 0; filas < this.filas; filas++) {
            this.arrayTablero[filas] = [];
            for (let columnas = 0; columnas < this.columnas; columnas++) {
                this.arrayTablero[filas][columnas] = " O_o";
            }
        }
    }

    dibujarTablero() {

        document.write("<table>");
        for (let filas = 0; filas < this.filas; filas++) {
            document.write("<tr>");
            for (let columnas = 0; columnas < this.columnas; columnas++) {
                document.write(`<td>${this.arrayTablero[filas][columnas]}</td>`)
            }
            document.write("</tr>")
        }
        document.write("</table>");
    }

}

do {
    var tableroPar = false;

    let filas = prompt("Introduce las filas del tablero");
    let columnas = prompt("Introduce las columnas del tablero");

    let total = filas * columnas;

    if (total % 2 == 0) {
        tableroPar = true;

        let memorin = new Tablero(filas, columnas);
        memorin.dibujarTablero();
        console.log(memorin.arrayTablero);

    } else {
        alert("Introduce valores pares");
    }

} while (!tableroPar);



