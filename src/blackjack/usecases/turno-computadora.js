
import { pedirCarta, acumularPuntos, crearCarta, determinarGanador } from "./index";

/**
 * Ejecuta el turno de la computadora en el juego
 * @param {Array<String>} deck
 * @param {Number} puntosMinimos Puntos minimos que necesita la computadota para ganar
 * @param {Array<Number>} puntosJugadores Arreglo con los puntos de todos los jugadores
 * @param {HTMLElement} puntosHTML Referencia para mostrar los puntos de la computadora
 * @param {HTMLElement} divCartasJugadores Referencia para mostrar las cartas de los jugadores
 */
export const turnoComputadora = (deck, puntosMinimos, puntosJugadores, puntosHTML, divCartasJugadores) =>{

    if( !puntosMinimos || puntosMinimos === 0 ) throw new Error ('puntosMinimos es necesario');

    let puntosComputadora = 0;
    do{
        const carta = pedirCarta( deck );
        puntosComputadora =  acumularPuntos( carta, puntosJugadores.length - 1, puntosJugadores, puntosHTML );
        crearCarta(carta, puntosJugadores.length - 1, divCartasJugadores);
    
       
    } while( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );
    determinarGanador(puntosJugadores);
}