
import { valorCarta } from './'

// turno: 0 = primer jugador y el ultimo es la computadora

/**
 * Acumula los puntos de cada jugador
 * @param {Number} carta Carta de jugador en turno
 * @param {Number} turno Turno del jugador
 * @param {Array<Number>} puntosJugadores Arreglo de jugadores en el juego
 * @param {NodeListOf<Element>} puntosHTML Referencia para mostrar los puntos del jugador en turno
 * @returns {Number} Retorna los puntos del jugador en turno
 */
export const acumularPuntos =(carta, turno, puntosJugadores, puntosHTML) =>{

    if ( !carta ) throw new Error('carta es necesario');
    if ( turno === undefined ) throw new Error ('turno es necesario');
    if ( !puntosJugadores || puntosJugadores === undefined) throw new Error('puntosJugadores es necesario');
    if ( !puntosHTML ) throw new Error('puntosHTML es necesario');


    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return  puntosJugadores[turno];
}