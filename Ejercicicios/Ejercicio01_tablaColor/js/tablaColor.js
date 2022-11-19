// function coloresAleatorios() {
//     let red = Math.floor(Math.random() * 256);
//     let green = Math.floor(Math.random() * 256);
//     let blue = Math.floor(Math.random() * 256);
//     return "rgb(" + red + "," + green + "," + blue + ")";
// }

for (let i = 0; i < 20; i++) {

    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    document.write("<tr>");

    for (let j = 0; j < 1; j++) {
        document.write(`<td>${red}</td><td>${green}</td><td>${blue}</td>`);
        document.write(`<td style='background-color: rgb(${red},${green},${blue})'></td>`)
    }
    document.write("</tr>");
}
