
function factorial(num) {
    
let factorial = num;

for (let i = 1; i < num; i++) {

    factorial = factorial * i;
}

return factorial;

}


let num = parseInt(prompt("Introduce un número"));

document.write(factorial(num));