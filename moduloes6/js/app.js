// dos pormas de exportar

// -Default 
// exportar un modulo

// -Name exports
// varias exportaciones por mudulo 

//------------------- Default
export default function saludar(nombre) {
    return `Hola ${nombre}`;
}


import saludar from "./default/mi-modulo.js";

console.log(saludar('Juan'));


//------------------ Named
//modulo.js
export function nombre(nombre) {
    return `Hola ${nombre}`;
}

export function vehiculo(nombre) {
    return `Hola ${nombre} placa: ${placa()}`;
}

export default class Cuadrado {

    constructor(lado) {
        this.lado = lado;
    }

    get area() {
        return this.lado * this.lado;
    }
}



var x = 777;

function placa() {
    return x;
}



//principal.js
import Cuadrado, { nombre as name, vehiculo } from "./mi-modulo.js";

console.log(name('Juan'));
console.log(vehiculo('Juan'));
const cuadrado = new Cuadrado(10);
console.log(cuadrado.area);


