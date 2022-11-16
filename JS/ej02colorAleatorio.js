// GENERA COLOR RGB ALEATORIO

let red = Math.floor(Math.random() * 255);
let green = Math.floor(Math.random() * 255);
let blue = Math.floor(Math.random() * 255);

document.write("<h3>Código de color rgb(" + red + ", " + blue + ", " + green + ")</h3>")

document.body.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";