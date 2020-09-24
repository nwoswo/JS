

(()=>{

    /**
 * 2C = TWO OF CLUBS
 * 
 */

    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'];
    const especiales = ['A', 'J', 'Q', 'K'];
    const btnPedir = document.querySelector('#btnPedir');
    const btnDetener = document.querySelector('#btnDetener');
    const btnNuevo = document.querySelector('#btnNuevo');

    let puntosJugador = 0, puntosPC = 0;
    const puntosHTML = document.querySelectorAll('small');
    const divCartasJugador = document.querySelector('#jugador-cartas');
    const divCartasPC = document.querySelector('#computadora-cartas');


    //esta funcion crea una nueva baraja
    const crearDeck = () => {
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


        deck = _.shuffle(deck);

        console.log(deck);

        return deck;

    }

    crearDeck();


    //Esta funcion me permite una nueva carta

    const pedirCarta = () => {
        if (deck.length === 0)
            throw 'No hay cartas en el deck';

        return deck.pop();
    }

    //turno de la PC

    const turnoPC = (puntosJugador) => {
        do {

            const carta = pedirCarta();
            puntosPC = puntosPC + valorCarta(carta);
            puntosHTML[1].innerText = puntosPC;

            const imgCarta = document.createElement('img');
            imgCarta.src = `assets/cartas/${carta}.png`;
            imgCarta.classList.add('carta');
            divCartasPC.append(imgCarta);

            if (puntosJugador > 21) break;

        } while (puntosPC < puntosJugador && (puntosJugador <= 21));

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




    const valorCarta = (carta) => {

        const valor = carta.substring(0, carta.length - 1);
        return (isNaN(valor))
            ? (valor === 'A') ? 11 : 10
            : valor * 1;

    }
    // console.log(valorCarta( pedirCarta() ));

    //Eventos

    btnPedir.addEventListener('click', function () {
        const carta = pedirCarta();
        puntosJugador = puntosJugador + valorCarta(carta);
        puntosHTML[0].innerText = puntosJugador;

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugador.append(imgCarta);


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
        turnoPC(puntosJugador);
    })

    btnNuevo.addEventListener('click', () => {


        console.clear();
        deck = [];
        deck = crearDeck();

        puntosJugador = 0;
        puntosPC = 0;

        puntosHTML[0] = 0;
        puntosHTML[1] = 0;

        divCartasPC.innerHTML = '';
        divCartasJugador.innerHTML = '';

        btnPedir.disabled = false;
        btnDetener.disabled = false;

    });

})()






