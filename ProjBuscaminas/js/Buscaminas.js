function minasAleatorias() {

    var minas = 5; // número de minas que queremos jugar
    var aleatorios = [] // array que almacena los números aleatorios que se corresponderán con los ID de la tabla (td's)
    
    // Bucle que comprobará que los número aleatorios que almacenará el array no estarán duplicados.
    while (aleatorios.length < minas) {
    
        var numeroAleatorio = Math.ceil(Math.random() * 25); // generamos aleatorio
        var existe = false; // empezamos en falso ya que no hay número duplicado (aún)
    
        for (var i = 0; i < aleatorios.length; i++) {
    
            if (aleatorios[i] == numeroAleatorio) { // comprobamos que el array[] no contiene un número como el aleatorio
    
                existe = true; // si detecta un número duplicado en el array, ponemos el semaforo en true para el siguiente if
    
                break; // salimos del for
            }
        }
    
        if (!existe) { // comprobamos que el semaforo está en false
    
            aleatorios[aleatorios.length] = numeroAleatorio; // si el semaforo está en false, almacenamos el aleatorio    }
        }
    }
    

    for (var i = 0; i < aleatorios.length; i++) {

        document.getElementById(aleatorios[i]).value = "Mina";
    }
}

// console.log("números aleatorios: " + aleatorios);


