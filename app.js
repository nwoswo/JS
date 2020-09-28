
//todos los objetos son pasados por referencia menos los tipos primitivos

//---------------------------------------Por valor y por Referencia 

var a = 10;
var b = a;

console.log("a:", a);
console.log("b:", b);

a= 20;

var c = {
    nombre: "Juana"
}

var d = c;

console.log("c:", c);
console.log("d:", d);

c.nombre = "Maria";

console.log("c:", c);
console.log("d:", d);


let peter ={nombre: 'Peter'};
let tony = cambiaNombre(peter);
console.log({peter,tony});  // tony, tony

const cambiaNombre = (vrpersona) => {
    vrpersona.nombre = 'tony';
    return vrpersona;
}
//-
let juan = {nombre: 'Juan'};
let ana = juan;
ana.nombre = 'Ana';
console.log({juan, ana}); // Ana, Ana

const frutas =['Manzana', 'Pera'];
const otrasFrutas = frutas;
otrasFrutas.push('Mango');
console.log(frutas,otrasFrutas); // iguales

 
//----------------Anty valor Referencia

let juan = { nombre: 'Juan' };
let ana = { ...juan };
//rompe la referencia, poder trabajar objetos y hacer igualaciones que apunten  a diferentes espacios en memoria

ana.nombre = 'Ana';
console.log({ juan, ana }); // Juan, Ana
//-

let peter = { nombre: 'Peter' };
let tony = cambiaNombre(peter);
console.log({ peter, tony });  // Peter, tony

const cambiaNombre = ({...vrpersona}) => {
    vrpersona.nombre = 'tony';
    return vrpersona;
}

const frutas = ['Manzana', 'Pera'];
const otrasFrutas = [...frutas];
otrasFrutas.push('Mango');
console.log(frutas, otrasFrutas); // iguales






//------------------------------------------Funciones ------------------------
//-Siempre regresan un valor
//- las funciones son objetos

function primeraFuncion(){
    console.log(a);
}

primeraFuncion();  //print  undefined

//-
function primeraFuncion() {
    console.log("invocada");
}
var miFuncion = primeraFuncion;


miFuncion();  //print  invocada

//-
function imprimir(nombre,apellido){
    apellido = apellido || 'xxx';
    console.log(nombre + ' ' + 'xxx');
}

imprimir('juan');

//- 

function imprimirObj(nombre){
    console.log(nombre);
}
imprimirObj( {nombre:"Juan", apellido: "Padilla"} );

//-
function imprimir(fn){
    fn();
}

imprimir( function() {
    console.log('funcion anonima');
})

//-

function imprimir(fn) {
    fn();
}

var miFuncion = function () {
    console.log('funcion no anonima');
}
//-
function imprimir(fn1){
    console.log(fn1); //si imprime algo no imprime un indifenied imprime la estructura de una fucion
}
imprimir(function () {
  
})

//-arguments

function saludar(nombre){
    console.log(arguments);
    console.log('hola:',nombre);    
}

saludar('Eder', 40,true);

//-----------------------------Retorno return de Funciones

//las funciones pueden crear objetos

function creaFuncion(){
    return function(){
        console.log("Me crearon !!!");
    }
}

var nuevaFuncion = creaFuncion();
nuevaFuncion();

//-
function creaPersona(nombre, apellido){
    return { nombre: nombre, apellido: apellido }
}
var persona = creapersona("Maria","Paz");



//-------------------------- Desestructuracion  Retorno funciones
//-
imprimeArg2 = (edad, ...args) => {
    console.log({edad,args});
}

imprimeArg2(10,true,false,'hola');


//-
imprimeArray = (edad, ...args) => {
    return args
}

const [edad,vivo,casado, nombre] = imprimeArray(10, true, false, 'hola');

//-
const crearPersona = (nombre,apellido) =>  ({nombre,apellido});
const {apellido} = crearPersona('Fernando','Herrera');
console.log(apellido);

//-



var mpersona = {
    nombre: "Juana",
    apellido: "Herrera",
    edad: 25,

    direccion: {
        pais: "Costa Rica",
        edificio: {
            nombre: "Edificio Principal"
        }
    },
    metodo: () => {
        console.log('metodo');
    },

    metodo2: function () {
        console.log('metodo2');
    },

    hola() {
        console.log('hola');
    },
}

const imprimePropiedades = (mpersona) => {
    console.log(persona.nombre);
    console.log(persona.apellido);
}

const imprimePropiedadesD = ({nombre,apellido,edad=15}) => {
    edad = edad || 0;
    console.log(nombre);
    console.log({apellido});
}

imprimePropiedadesD(mpersona)







//------------------------ Funciones de Primera Clase

//funciones de Primera Clase es un objeto 
// 


function a(){
    console.log('funcion a');
}

a();

a.nombre = 'Maria';
a.direccion = {
        pais: 'Costa Rica',
        ciudad: 'San Jose',
        edificio: {
            piso: '8vo'
        }
}

//------------------------- new Function() Objeto
//es un objeto vacio de Tipo Persona es crearnos un espacio en memoria para trabajar
//, juan responde a Persona agarra una forma muy parecida a una clase normal 

function Persona(nombre) {
    this.nombre = nombre;
    this.apellido = 'Ortega';
    console.log('paso por aqui');
    this.imprimirPersona = function() {
        return this.nombre+ ' ' + this.apellido
    }
}

var juan = new Persona('Eder'); // todo el contexto Persona() es creado

console.log(juan.imprimirPersona());


//----------------------Prototipos  ,  Prototype
//esto puede agregar funciones y propiedades nos permite hacer eso extender
//es el ADN del objeto

function Persona(nombre) {
    this.nombre = nombre;
    this.apellido = 'Ortega';
    console.log('paso por aqui');
    this.imprimirPersona = function () {
        return this.nombre + ' ' + this.apellido
    }
}

Persona.prototype.pais = 'Costa Rica';

var juan = new Persona('Eder'); 


///--------------------------------- Objetos Literales

//--------------------------------Notacion de punto y corchetes 
//Objeto literal
var persona = {
    nombre: "Juana",
    apellido: "Herrera",
    edad: "25",
    direccion: {
        pais: "Costa Rica",
        edificio: {
            nombre: "Edificio Principal"
        }
    }
}



console.log(persona);
console.log(persona.direccion.pais);

//corchetes
console.log(persona["nombre"]);


//mas detalles
persona.direccion.zipcode = 11001;

var edificio = persona.direccion.edificio;
edificio.nropiso = "8vo piso";

delete persona.direccion.zipcode;

const entriesPares = Object.entries(persona);
console.log(entriesPares);


Object.freeze(persona);  //bloquea para que no puedan agregar nuevos elementos 

Object.getOwnPropertyNames(persona);  //0:nombre,1,apellido




//----------------------Funciones Anonimas / auto Ejecutan / Patron Modulo
//para evitar que fuentes externas cambien nuestras propiedades
//crea contextos 
// las variables var no se registran en window

(function () { })();

// se ejecuta sola

var myApp = (function () {
    var foo = 'Hello World';
    return {
        foo: foo
    }
})();

console.log(myApp.foo); // Hello World

var numero =1;
(function(numero) {
    return function(){ console.log(numero);
     }
})(numero)

// Con este diseño, buscamos que la función invocada devuelva un objeto que represente la interfaz pública 
// para un determinado bloque de código.Básicamente la idea es distinguir entre métodos públicos y privados 
// buscando un comportamiento similar a las clases de aquellos lenguajes orientados a objetos más tradicionales.

//---------- Arreglos
var arr = [5,4,3,2,1]
arr.reverse();
arr = arr.map();
arr = arr.join('|'); // une todo
arr = arr.split('|'); // convierte a un array 
arr.push('6'); //pone atras
arr.unshift('0'); // pone adelante
var elminine = arr.pop();
arr.splice(1, 2);  //elimina
arr.splice(1,0,'10','20','30'); //agrega
arr = arr.slice(0,2);  // corta del 0 hasta la posicion 2

arr.indexOf('10'); // -1 cuando no lo encuentra 


//-------------------------------------------Tiempo

setTimeout(function () {
    console.log('Paso un segundo');
    
}, timeout);


//-
var segundos = 0;

var intervalo = setInterval(function() {
    segundos++;

    if (segundos == 3) {
        clearInterval(intervalo);
    }
}, 1000);

var juan = {
    nombre: "Juan",
    edad: 30,
    imprimir: function () {
        // setTimeout(function () { //error
        setTimeout(() => {
            console.log(this);
            console.log(this.nombre, this.edad);
        }, 1000);

    }

}

juan.imprimir();

addEventListener("keypress",  )



//---------------- IF ELSe


const diasLetras = {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miércoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sábado',
}

const diasLetras2 = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado',];


// día de la semana
console.log(diasLetras2[dia]);

const soyundefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'hola' && 150; // 150
const a1 = false && 'hola' && 150; // false
const a1 = 'mundo' && 'hola'; // hola
const a1 = 'mundo' && 'hola' && soyFalso; // falso

const a3 = soyFalso || 'ya no soy falso'; //  yano soy falso
const a4 = soyFalso || soyundefined || soyNull || 'hola' || true; // hola
const a5 = soyFalso || soyundefined || true || 'hola' || true; // true


//------------------------Clases
// persona = {}   /  persona = new Function Persona();
// los dos al asignar persona2 = persona    son valor por referencia
// persona2 ! x= persona   use new 

class Persona {
    _nombre;
    constructor(nombre = 'opcional'){
        this._nombre = nombre;
    }

    set setNombre( nombre){
        this._nombre = nombre;
    }
}

const spiderman = new Persona();
spiderman.setNombre='Eder';
spiderman.nombre = 'HOla';







//---------------------------------------   CLASES 2 --------------

class Persona {
    static _conteo = 0;
    nombre;
    constructor(nombre = 'opcional') {
        this.nombre = nombre;
        Persona._conteo++;
    }
    set setNombre(nombre) {
        this.nombre = nombre;
    }
    get getNombre() { return this.nombre; }
    static get conteo() { return Persona._conteo;}

    static mensaje(){
        //no puedes tomar las propiedades de la clase
        console.log(this.nombre); // undefined   
    }
    quienSoy(){
        console.log(`Soy ${this.nombre}`);
        
    }
}
 
//manejarlo como obj literal
Persona.propiedadExterna = 'Hola Mundo'; //es una propiedad statica


const spiderman = new Persona();
const iroMan = new Persona();
const blackPanter = new Persona();
spiderman.setNombre = 'Eder';

//problema yo puedo cambiar la propiedad del objeto sin set 
spiderman.nombre = 'HOla';




// ------------------------------------------ Extends 

class Heroe extends Persona{
    clan = 'sin clan';
    constructor(nombre, codigo, frase) {
        super(nombre, codigo, frase);
        this.clan = 'Los Avengers';
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} clan: ${this.clan}`);

        //si quiero llamar el otro quienSoy
        super.quienSoy();
    }


    
}


const herospiderman = new Heroe();
herospiderman.quienSoy();

//------------------------------------------ clases Privadas

class Rectangulo { 
    #area =0 ;
    parea = 0;
    constructor(base = 0, altura =0){
        this.base = base;
        this.altura = altura;
        this.#area = base * altura;
        this.parea = base * altura;
    }

    calcularArea() {
        console.log(this.#area*2);
        
    }
}

const rectangulo = new Rectangulo(10,15);
//Problema yo puedo cambiar las propiedades
// rectangulo.#area = 100;
rectangulo.parea = 100;
rectangulo.calcularArea();

console.log(rectangulo);


//----------------------------------Singleton


class MySingleton{
    static instancia;
    nombre = ';'
    
    constructor(nombre = ''){
        if (!!MySingleton.instancia){
            return MySingleton.instancia;
        }

        MySingleton.instancia = this;
        this.nombre = nombre;
    }
}

const instancia1 = new MySingleton('IronMan');
const instancia2 = new MySingleton('Thor');

console.log(`Nombre 1 : ${instancia1.nombre}`);
console.log(`Nombre 2 : ${instancia2.nombre}`);
//output Ironman
//output Ironman

//-
class MyClass {
    nombre = ';'
    constructor(nombre='') {
        if (MyClass._instance) {
            return MyClass._instance
        }
        MyClass._instance = this;
        this.nombre = nombre;
    }
}

var instanceOne = new MyClass('IronMan')
var instanceTwo = new MyClass('Thor')

console.log(`Nombre 1 : ${instanceOne.nombre}`);
console.log(`Nombre 2 : ${instanceTwo.nombre}`);

//-
var Singleton = (function () {
    var instance;
 
    function createInstance() {
        var object = new Object("I am the instance");
        return object;
    }
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();
 
function run() {
 
    var instance1 = Singleton.getInstance();
    var instance2 = Singleton.getInstance();
 
    alert("Same instance? " + (instance1 === instance2));  
}

//----------------------- Multiples constructores

class MPersona {

    static porObjeto({ nombre, apellido, pais }) {
        return new MPersona(nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo() {
        console.log(`info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }
}

const nombre1 = 'Melissa',
    apellido1 = 'Flores',
    pais1 = 'Honduras';

const fher = {
    nombre: 'Fernando',
    apellido: 'Herrera',
    pais: 'Costa Rica'
}

const persona1 = new MPersona(nombre1, apellido1, pais1);
const persona2 = MPersona.porObjeto(fher);


persona1.getInfo();
persona2.getInfo();







//-------------------------MODULOS ------
// Cartas esta desarrollado con el patron modulo tmb es un ejemplo mas extenso

var myApp = (function () {
    var foo = 'Hello World';
    return {
        foo: foo
    }
})();


//------------------- ES6 

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


//----------------------------Fetch
const URL_API_RANDOM_IMAGE = 'https://dog.ceo/api/breeds/image/random';
const response = await fetch(URL_API_RANDOM_IMAGE);
const data = await response.json();

const urlImage = data.message;
content.innerHTML = `<img src="${urlImage}">`;