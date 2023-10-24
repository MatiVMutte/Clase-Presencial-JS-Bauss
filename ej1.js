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

// No ASINCRONO

function sumar(a, b) {
    let suma;

    suma = a + b;

    return suma;
}

function cuadrado(a) {
    let cuad;

    cuad = a * a;
    
    return cuad;
}

function multiplicar(a, b) {
    let mult;

    mult = a * b;
    
    return mult;
}

function restar(a, b) {
    let rest;

    rest = a - b;
    
    return rest;
}

function informar(resultado) {
    console.log("El resultado es: " + resultado);
}

console.log("Inicio");

let suma = sumar(4, 7);
let cuad = cuadrado(suma);
let prod = multiplicar(cuad, 10);
let resultado = restar(prod, 2);
informar(resultado);

console.log("Fin");