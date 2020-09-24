
function Jugador(nombre){

    this.nombre = nombre;
    this.pv = 100;
    this.sp = 100;

    this.curar = function(jugadorObjetivo) {
        if(this.sp >= 40)
        {
            this.sp -= 40;
            jugadorObjetivo.pv += 20;
        }else{
            console.log(this.nombre + 'no tiene sp');
            
        }

       this.estado(jugadorObjetivo);
        
    }
    this.tirarFlecha = function(jugadorObjetivo){
        
        if(jugadorObjetivo.pv > 40){
            jugadorObjetivo.pv -= 40;
        }else{
            jugadorObjetivo.pv =0;
            console.error(jugadorObjetivo.nombre + 'murio ! ');
            
        }
        
        this.estado(jugadorObjetivo);
    }

    this.estado = function (jugadorObjetivo) {
        
        console.info(this);
        console.log(jugadorObjetivo);
    }

};



var gandalf = new Jugador('gandalf');
var legolas = new Jugador('legolas');

console.log(gandalf);
console.log(legolas);



function imprimir() {
    console.log(gandalf);
    console.log(legolas);
}


