let num = prompt("Introduce un número entero positivo");

if (!Number.isInteger(num) == true && num > 0) {

    // ANGULO 90º
    for (let i= 0; i <= num; i++) {
        for (let j=1; j<=i; j++) {
            document.write("* ");
        }  
        document.write("<br>");
    }

    document.write("<br>");


    for (let i= num; i>0; i--) {
        for (let j=1; j<=i; j++) {
            document.write("* ");
        }  
        document.write("<br>");
    }

    // TRIÁNGULO MÁS EFICIENTE Y SIN ESTILOS.
    for (let i = 1; i <= num; i++) {
        for (let j = i; j <= num; j++) {
            document.write("&nbsp;");
        }
        for (let j = 1; j <= i; j++) {
            document.write(" * ");
        }
        document.write("<br>");
    }

    document.write("<br>");


    for (let i = num; i > 0; i--) {
        for (let j = i; j <= num; j++) {
            document.write("&nbsp;");
        }
        for (let j = 1; j <= i; j++) {
            document.write(" * ");
        }
        document.write("<br>");
    }






    for (let fila = 0; fila < num; fila++) {

        for (let columna = fila; columna < num; columna++) {
            document.write("<span style='color:white'>*</span>");
        }

        for (let columna = 0; columna < fila; columna++) {

            document.write("<span style='color:blue'>*</span>");

        }

        document.write("<span style='color:red'>*</span>");

        for (let columna = 0; columna < fila; columna++) {

            document.write("<span style='color:red'>*</span>");

        }

        document.write("<br>");

    }

    document.write("<br>");


    for (let fila = 1; fila <= num; fila++) {

        for (let columna = 1; columna <= fila; columna++) {
            document.write("<span style='color:white'>*</span>");
        }

        for (let columna = fila; columna < num; columna++) {
            document.write("<span style='color:red'>*</span>");
        }

        document.write("<span style='color:blue'>*</span>");

        for (let columna = fila; columna < num; columna++) {
            document.write("<span style='color:blue'>*</span>");
        }



        document.write("<br>");

    }



}
