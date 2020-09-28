const fher = {
    nombre: 'Fernando',
    edad: 30,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`); 
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 30,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

//Problema 1 es dificil mantener la forma del objeto literal




pedro.nombre = 'Eder';
fher.imprimir();
pedro.imprimir();
//Nota aca imprime Fernando, Eder, por que no pusimos pedro = fher
//Solucion mantener forma 

function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

const maria = new Persona('Maria',25);
// let yajaira = maria;
// yajaira.nombre = 'Yajaira';
console.log(maria);
console.log(yajaira);
// Nota aca sigue imprimiento Yajaira Yajaira 






yajaira = new Persona('Yajaira', 25);

yajaira.nombre = 'Liz';
console.log(yajaira);


// No existe una forma de crar objetos literales con New puedes crearlos y son contextos distintos pero no poner un = por que ahi es valor por referencia