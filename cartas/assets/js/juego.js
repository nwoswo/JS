

const miModulo = (()=>{

    /**
 * 2C = TWO OF CLUBS
 * 
 */

    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'],
          especiales = ['A', 'J', 'Q', 'K'];

    const btnPedir = document.querySelector('#btnPedir'),
         btnDetener = document.querySelector('#btnDetener'),
         btnNuevo = document.querySelector('#btnNuevo');

    // let puntosJugador = 0, puntosPC = 0;
    let puntosJugadores = [];
    
    const puntosHTML = document.querySelectorAll('small');

    const divCartasJugadores = document.querySelectorAll('.divCartas');


    //esta funcion crea una nueva baraja
    const crearDeck = () => {
        deck = [];
        for (let i = 2; i < 10; i++) {
            for (const tipo of tipos) {
                deck.push(i + tipo);
            }
        }

        for (const tipo of tipos) {
            for (const esp of especiales) {
                deck.push(esp + tipo);
            }
        }

        return _.shuffle(deck);
    }

    const initJuego = (numJugadores = 2) => {
        deck = crearDeck();    
        puntosJugadores = [];
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }
        console.log(deck);

        puntosHTML.forEach(item =>  item.innerHTML = 0);
        divCartasJugadores.forEach(item => item.innerHTML = '');

        btnPedir.disabled = false;
        btnDetener.disabled = false;  
    }
    


    //Esta funcion me permite una nueva carta

    const pedirCarta = () => {
        if (deck.length === 0)
            throw 'No hay cartas en el deck';
        return deck.pop();
    }

    //turn 0 jugador ultimo PC
    const acumularPuntos = (turno, carta) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        puntosHTML[turno].innerHTML = puntosJugadores[turno];

        return puntosJugadores[turno];
    }

    const crearCarta = (carta,turno) => {
            const imgCarta = document.createElement('img');
            imgCarta.src = `assets/cartas/${carta}.png`;
            imgCarta.classList.add('carta');
            divCartasJugadores[turno].append(imgCarta);
    }

    const determinarGanador = () => {

        const [puntosJugador, puntosPC] = puntosJugadores;

        setTimeout(() => {
            if (puntosJugador == puntosPC) {
                alert('Nadie gana :( ');
            } else if (puntosJugador > 21) {
                alert('Computadora gana');
            } else if (puntosPC > 21) {
                alert('Ganaste !');
            } else {
                alert('Computadora Gana');
            }
        }, 500);
    }

    const turnoPC = (puntosJugador) => {
        let puntosPC = 0;
        do {

            const carta = pedirCarta();
            puntosPC = acumularPuntos(puntosJugadores.length-1,carta);
            crearCarta(carta, puntosJugadores.length - 1);

        } while (puntosPC < puntosJugador && (puntosJugador <= 21));

        determinarGanador();
    }




    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length - 1);
        return (isNaN(valor))
            ? (valor === 'A') ? 11 : 10
            : valor * 1;
   }

    //Eventos

    btnPedir.addEventListener('click', function () {
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(0,carta)

        crearCarta(carta, 0);




        if (puntosJugador > 21) {
            console.warn('Lo siento mucho, perdiste');
            btnPedir.disabled = true;
            turnoPC(puntosJugador);
            btnDetener.disabled = true;
        } else if (puntosJugador === 21) {
            console.warn('21, genial');
            turnoPC(puntosJugador);
            btnDetener.disabled = true;
        }


    });

    btnDetener.addEventListener('click', function () {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        const puntosJugador = puntosJugadores[0];

        turnoPC(puntosJugador);
    })

    // btnNuevo.addEventListener('click', () => {

    //     initJuego();

    // });

    return { start: initJuego };

})()






