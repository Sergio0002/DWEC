let maxFilas = prompt("¿Cuántas filas quieres?");
let maxColumnas = prompt("¿Cuántas columnas quieres?");
let numMinas = prompt("¿Cuántas minas quieres introducir?");

document.write("<h1>Buscaminas</h1>");

document.write("<table id='buscaminas'>");

for (let i = 0; i < maxFilas; i++) {

    document.write("<tr>");

    for (let j = 0; j < maxColumnas; j++) {

        document.write("<td></td>");

    }

    document.write("</tr>");
}
document.write("</table>");

// Crear array bidimensional para guardar las minas

let arrayTablero = [];
let contadorMinas = 0;
let posFila;
let posColumna;

for (let fila = 0; fila < maxFilas; fila++) {

    arrayTablero[fila] = [];

    for (let columna = 0; columna < maxColumnas; columna++) {

        arrayTablero[fila] = new Array(columna);
    }
}

while (contadorMinas < numMinas) {

    posFila = Math.floor(Math.random() * maxFilas);
    posColumna = Math.floor(Math.random() * maxColumnas);

    if (arrayTablero[posFila][posColumna] != "Mina") {
        arrayTablero[posFila][posColumna] = "Mina";
        contadorMinas++;
    }
}


let fila = 2;
let columna = 1;
let numMinasAlrededor = 0;


for (let fila = 0; fila < maxFilas; fila++) {

    for (let columna = 0; columna < maxColumnas; columna++) {

        if (arrayTablero[fila][columna] != "Mina") {

            for (let cFila = fila - 1; cFila <= fila + 1; cFila++) {

                for (let cColumna = - 1; cColumna <= cColumna + 1; cColumna++) {

                    if (cFila <= 0 || cColumna >= 0 || cFila > maxFilas || cColumna > maxColumnas) {

                        if (arrayTablero[cFila][cColumna] == "Mina") {

                            numMinasAlrededor++;
                        }

                    }
                }
            }

        }

    }
}

arrayTablero[fila][columna] = numMinasAlrededor;
