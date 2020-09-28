export function nombre(nombre){
    return `Hola ${nombre}`;
}

export function vehiculo(nombre) {
    return `Hola ${nombre} placa: ${placa()}`;
}

export default class Cuadrado{

    constructor(lado){
        this.lado = lado;
    }

    get area(){
        return this.lado * this.lado;
    }
}



var x = 255;

function placa() {
    return x;
}

