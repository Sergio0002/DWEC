// CONDICIONALES IF, ELSE IF...

nombre = prompt("Introduce nombre: ");
apellidos = prompt("Introduce apellidos: ");
edad = prompt("Introduce tu edad: ");
salario = prompt("Introduce el salario");

function datos() {

    document.write("Empleado: " + nombre + ", " + apellidos + ", edad: " + edad + ", salario: " + salario + "€");
}

if (salario >= 1000 && salario <= 2000) {

    if (edad > 45) {
        salario = Number(salario) + Number(salario * 0.03);
    } else if (edad <= 45) {
        salario = Number(salario) + Number(salario * 0.10);
    }
} else if (salario < 1000) {

    if (edad < 30) {
        salario = 1100;
    } else if (edad >= 30 && edad <= 45) {
        salario = Number(salario) + Number(salario * 0.03);

    } else if (edad > 45) {
        salario = Number(salario) + Number(salario * 0.15);
    }
}

datos(nombre, apellidos, edad, salario);
