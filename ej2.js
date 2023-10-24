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

// Asincrono
/**
setTimeout( () => {
    tarea a ejecutar asincronicamente.
}, 2000); ---> El 2000 es el tiempo que tarda en ejecutarse la tarea.

JS --> Maneja la sincronica con callback
 */

function sumar(a, b) {
    let suma;

    setTimeout(() => {
        suma = a + b;
    }, 2000); // Esta mal ya que retorna antes de terminar esta tarea. Por lo tanto retorna UNDEFINED

    return suma;
}

function cuadrado(a) {
    let cuad;

    setTimeout(() => {
        cuad = a * a;
    }, 1500);
    
    return cuad;
}

function multiplicar(a, b) {
    let mult;

    setTimeout(() => {
        mult = a * b;
    }, 1000);
    
    return mult;
}

function restar(a, b) {
    let rest;

    setTimeout(() => {
        rest = a - b;
    }, 2000);
    
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