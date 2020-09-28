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






