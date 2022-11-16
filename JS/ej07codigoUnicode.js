

document.write("<table>");

for (let fila = 1; fila <= 1000; fila++) {

    document.write("<tr>");

    for (let columna = 0; columna < 1; columna++) {

        document.write("<td>" + fila + "</td>");
        document.write("<td>" + "&#" + fila + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");