let maxFilas = prompt("¿Cuántas filas quieres?");
let maxColumnas = prompt("¿Cuántas columnas quieres?");
let numMinas = prompt("¿Cuántas minas quieres introducir?");

// document.write("<h1>Buscaminas</h1>");

// document.write("<table id='buscaminas'>");

// for (let i = 0; i < maxFilas; i++) {

//     document.write("<tr>");

//     for (let j = 0; j < maxColumnas; j++) {

//         document.write("<td></td>");

//     }

//     document.write("</tr>");
// }
// document.write("</table>");

// Crear array bidimensional para guardar las minas

let arrayTablero = [];
let contadorMinas = 0;
let posFila;
let posColumna;

for (let fila = 0; fila < maxFilas; fila++) {

    arrayTablero[fila] = [];

    for (let columna = 0; columna < maxColumnas; columna++) {

        arrayTablero[fila][columna] = "";
    }
}

while (contadorMinas < numMinas) {

     posFila = Math.floor(Math.random() * maxFilas);
     posColumna = Math.floor(Math.random() * maxColumnas);

    if (arrayTablero[posFila][posColumna] != "Mina") {
        arrayTablero[posFila][posColumna] = "Mina";
        contadorMinas++;
    }

    console.log(arrayTablero);
    console.log(contadorMinas);

}