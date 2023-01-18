// import _ from 'underscore';

// import { crearDeck as crearNuevoCeck} from './usecases/crear-deck';
// import  crearDeck, { hola }  from './usecases/crear-deck';
import { crearDeck, pedirCarta, turnoComputadora, acumularPuntos, crearCarta  } from './usecases';

//Patron modulo
const miModulo = (() => {
  'use strict'


  let deck         = [];
  const tipos      = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];

  let puntosJugadores =[];

  // Referencias del HTML
  const btnPedir   = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo = document.querySelector('#btnNuevo');


  const divCartasJugadores = document.querySelectorAll('.divCartas'),
        puntosHTML = document.querySelectorAll('small');

  // esta funcion inicialza el juego
  const inicializarJuego = ( numJugadores = 2 ) => {
      deck = crearDeck( tipos, especiales );

      puntosJugadores = [];
      for (let i = 0; i < numJugadores; i++){
          puntosJugadores.push(0);
      }
      
      puntosHTML.forEach( elem => elem.innerText = 0 );
      divCartasJugadores.forEach( elem => elem.innerHTML = '' );

      btnDetener.disabled = false;
      btnPedir.disabled = false;
  
  }

  // Eventos
  btnPedir.addEventListener('click', () => {
      const carta = pedirCarta( deck ),
            puntosJugador = acumularPuntos( carta, 0, puntosJugadores, puntosHTML);

      crearCarta( carta, 0, divCartasJugadores )
      
      if ( puntosJugador > 21 ){
          btnDetener.disabled = true;
          btnPedir.disabled = true;
          turnoComputadora(deck, puntosJugador, puntosJugadores, puntosHTML, divCartasJugadores);

      }else if( puntosJugador === 21 ){
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora( deck, puntosJugador, puntosJugadores ,puntosHTML, divCartasJugadores);
      }
  });

  btnDetener.addEventListener('click', () =>{
      btnPedir.disabled = true;
      btnDetener.disabled = true;

      turnoComputadora( deck, puntosJugadores[0], puntosJugadores, puntosHTML, divCartasJugadores );
  });


  btnNuevo.addEventListener('click', () => {
      inicializarJuego();
  });


  return {
      nuevoJuego: inicializarJuego
  };
})();








