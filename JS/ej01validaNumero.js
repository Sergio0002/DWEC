let numero = prompt("Introduce un número");

// VALIDA SI ES NÚMERO

if (!isNaN(numero)) {
    alert(numero + " sí es un número");
    document.write(numero);
} else
    alert(numero + " No es un número");