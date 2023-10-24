/*

Promesas en JS --> Promesa "En algun momento del futuro cuando lo tengas pasamelo" EJ Moso esperando al cocinero la comida.

Promesas --> 

*/

// COnstructor pide...
/**
 * No devuleve nada.
 * 1. Recibe un CALLBACK (funcion)
 *      A. Recibe resolve - Sabe que hacer cuando obtenga el resultado. A quien llamar cuando la promesa se cumple.
 *      B. Recibe Reject - Sabe que hacer cuando pincho. A quien llamar cuando la promesa no se cumple.
 * 
 * Las funciones Asincronas retornan PROMESAS. Ya que las tareas asincronas prometen dar(devolver algo).
 * Mientras estamos esperando a que termine la promesa, este esta pendiente.
 * Cuando ya termine la promesa, FULFILLED. (Significa CUMPLIDO).
 * Si no cumplio entonces, REJECTED. (Promesa Rechazada).
 * 
 */
// Si sale todo bien.
    // Llamo a RESOLVE()
// SI no
    // Llamo a REJECT()

function preguntarSigno(numero) {
    return new Promise( (resolve, reject)=>{

        setTimeout( () => { // Este lo puse para que tarde en realizarse la promesa.s
            if(!isNaN(numero)) {
                let respuesta = "Negativo";
                if(numero >= 0) {
                    respuesta = "Positivo";
                }
        
                resolve(respuesta); // Esta todo bien. Pasar el resultado.
            } else {
                reject("Eso no es un numero"); // Salio mal. Pasar la razon de por que esta mal.
            }
        }, 3000);

        
    } );
}

console.log("Inicio");

/**
 * resolve - then() --> Entonces... (Hace tal cosa)
 * reject - catch()
 */
/*let promesa = preguntarSigno(34); // No se hace asi.
promesa.*/ // El ultimo punto accedemos a los atributos de la promesa
// Otra forma...
preguntarSigno("a")
    .then( (respuesta) => {
        console.log(respuesta);
    } )
    .catch( (error) => {
        console.log(error);
    } );

console.log("Fin");