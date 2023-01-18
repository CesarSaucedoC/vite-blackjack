

/**
 * Dibuja una la carta que se toma del deck en el jugador correspondiente
 * @param {String} carta 
 * @param {Number} turno Turno del jugador
 * @param {HTMLElement} divCartasJugadores Referencia para dibujar la carta
 */
export const crearCarta = ( carta, turno, divCartasJugadores) => {
    if ( !carta ) throw new Error('carta es necesaria');
    if ( turno === undefined ) throw new Error ('turno es necesario');
    if ( !divCartasJugadores ) throw new Error('divCartasJugadores es necesario');


    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugadores[turno].append( imgCarta );
}


