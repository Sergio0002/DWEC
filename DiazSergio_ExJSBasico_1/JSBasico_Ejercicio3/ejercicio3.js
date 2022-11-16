let numeros = [];

for (let i = 0; i < 15; i++) {
    let aletorio = Math.floor(Math.random() * 10 + 1);
    numeros[i] = aletorio;
}

// TO DO: crear for para mostrar los números aleatorios...
for (let i = 0; i < numeros.length; i++) {

    document.write((numeros[i]) + ", ");

}

document.write("<br>");

for (let i = 0; i < numeros.length; i++) {

    document.write((i + 1) + "-");

    for (let j = 0; j < numeros[i]; j++) {
        document.write("*");
    }
    document.write("<br>");
}