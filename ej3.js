/*
Node.js
Express - PHP

Pasos NODE.JS:
    Extension Code Runner. Ejecuto desde VSC el codigo.
NO Asincrono:
    Las tareas se realizan paso a paso(una a la ves), donde la siguiente tarea esta esperando a la anterior.
    Es un HILO que hace todas las tareas juntas.
Asincrono:
    Las tareas se realizan asincronicamente, o sea puede trabajar varias tareas a la ves. Quiere decir que la 2da tarea puede realizarse sin esperar a que la 1ra termina. De esa forma ambas tareas se realizan al mismo tiempo.
*/

// Forma de resolver el EJ anterior  con callback

function sumar(a, b, callback) { // callback -> va a ser funcion.
    let suma;

    setTimeout(() => {
        try {
            if(typeof a === "number" && typeof b === "number") {
                suma = a + b;
                callback(suma); // Le pasamos a la funcion/delegado la suma
            } else {
                throw Error("Parametros invalidos para la suma.");
            }
        } catch (error) {
            console.log(error.message);
        }
    }, 2000);
}

function cuadrado(a, callback) {
    let cuad;

    setTimeout(() => {
        try {
            if(typeof a === "number") {
                cuad = a * a;
                callback(cuad);
            } else {
                throw Error("Parametros invalidos para la suma.");
            }
        } catch (error) {
            console.log(error.message);
        }
    }, 1500);
}

function multiplicar(a, b, callback) {
    let mult;

    setTimeout(() => {
        try {
            if(typeof a === "number" && typeof b === "number") {
                mult = a * b;
                callback(mult);
            } else {
                throw Error("Parametros invalidos para la suma.");
            }
        } catch (error) {
            console.log(error.message);
        }
    }, 1000);
}

function restar(a, b, callback) {
    let rest;

    setTimeout(() => {
        try {
            if(typeof a === "number" && typeof b === "number") {
                rest = a - b;
                callback(rest);
            } else {
                throw Error("Parametros invalidos para la suma.");
            }
        } catch (error) {
            console.log(error.message);
        }
    }, 2000);
}

function informar(resultado) {
    console.log("El resultado es: " + resultado);
}

console.log("Inicio"); // Se ejecuta 1ro

sumar(4, 7, (suma) => { 
    cuadrado(suma, (cuad) => {
        multiplicar(cuad, "10", (mult) => {
            restar(mult, 2, (resultado) => {
                informar(resultado); // Se ejecuta 3ro
            });
        });
    });
});

console.log("Fin"); // Se ejecuta 2do

// La mejor forma de trabajar esto es con PROMESAS