function colores() {

    let red = Math.floor(Math.random(1, 255) * 255);
    let green = Math.floor(Math.random(1, 255) * 255);
    let blue = Math.floor(Math.random(1, 255) * 255);

    return red + ", " + green + ", " + blue;
}

function posicion() {
    // 4096 × 2160
    let top = Math.floor(Math.random(1, 1200) * 1200);
    let right = Math.floor(Math.random(1, 2400) * 2400);
    let coord = "top:" + top + "px; right:" + right + "px";

    return coord;
}

for (let fila = 1; fila <= 100; fila++) {

    document.write(`<div style='background-color:rgb(${colores()}); ${posicion()};'> </div>`);
}

