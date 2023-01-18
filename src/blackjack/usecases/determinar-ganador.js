

/**
 * Determina al ganador del juego
 * @param {Array<Number>} puntosJugadores Puntos de todos los jugadores
 */
export const determinarGanador = (puntosJugadores) => {

    if(!puntosJugadores || puntosJugadores === undefined ) throw new Error ('puntosJugadores es necesario');

    const [ puntosMinimos, puntosComputadora ] = puntosJugadores;

    setTimeout(()=>{
        alert ( (puntosComputadora === puntosMinimos) ? 'Nadie gana' :
            (puntosMinimos > 21)  ? 'La computadora gana' :
            (puntosComputadora > 21) ? 'Jugador gana':
            'Computadora gana');
    }, 100);
    
}
