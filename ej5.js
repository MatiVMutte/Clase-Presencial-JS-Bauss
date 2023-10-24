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

// Forma de resolver con funciones asincronas

function sumar(a, b) { // callback -> va a ser funcion.

    return new Promise( (resolve, reject) => {

        setTimeout(() => {
            let suma;

            // Una forma con TRY - CATCH

            try {
                if(typeof a === "number" && typeof b === "number") {
                    suma = a + b;
                    resolve(suma); // Le pasamos a la funcion/delegado la suma
                } else {
                    throw Error("Parametros invalidos para la suma.");
                }
            } catch (error) {
                reject(error.message);
            }
        }, 2000);

    } );
    
}

function cuadrado(a) {

    return new Promise( (resolve, reject) => {
        let cuad;

        setTimeout(() => {
            try {
                if(typeof a === "number") {
                    cuad = a * a;
                    resolve(cuad);
                } else {
                    throw Error("Parametros invalidos para el cuadrado.");
                }
            } catch (error) {
                reject(error.message);
            }
        }, 1500);
    });


}

function multiplicar(a, b) {

    return new Promise( (resolve, reject) => {
        let mult;
    
        // Otra forma
        setTimeout(() => {
            if(typeof a === "number" && typeof b === "number") {
                mult = a * b;
                resolve(mult);
            } else {
                reject("Parametros invalidos para el producto.");
            }
        }, 1000);
    });

}

function restar(a, b) {

    return new Promise( (resolve, reject) => {
        let rest;
    
        setTimeout(() => {
            if(typeof a === "number" && typeof b === "number") {
                rest = a - b;
                resolve(rest);
            } else {
                reject("Parametros invalidos para la resta.");
            }
        }, 2000);
    });

}

function informar(resultado) {
    console.log("El resultado es: " + resultado);
}

async function resolverAsync(a, b) { // Funcion Asincrona
    try {
        let suma = await sumar(a, b); // await --> Bancame a q se resuelva la promesa
        let cuad = await cuadrado(suma);
        let prod = await multiplicar(cuad, 10);
        let rest = await restar(prod, 2);
        informar(rest);
    } catch(error) {
        console.log(error);
    }
}

// otra forma.
// const resolverAsync = async function (a, b) => { // Funcion Asincrona
//     try {
//         let suma = await sumar(a, b); // await --> Bancame a q se resuelva la promesa
//         let cuad = await cuadrado(suma);
//         let prod = await multiplicar(cuad, 10);
//         let rest = await restar(prod, 2);
//         informar(rest);
//     } catch(error) {
//         console.log(error);
//     }
// };

console.log("Inicio"); // Se ejecuta 1ro

resolverAsync(4, 7);

console.log("Fin"); // Se ejecuta 2do

// La mejor forma de trabajar esto es con PROMESAS