function Clase() {
    var nombre = "Juan Ramos",
        saludo = "Hola !";

    // Función privada
    function imprimirNombre() {
        console.log("Nombre:" + nombre);
    }

    // Función pública
    function asignarNombre(nuevoNombre) {
        nombre = nuevoNombre;
    }


}



function Persona(nombre) {
    this.nombre = nombre;
    this.apellido = 'Ortega';
    console.log('paso por aqui');
    this.imprimirPersona = function () {
        return this.nombre + ' ' + this.apellido
    }
}

var juan = new Persona('Eder');
