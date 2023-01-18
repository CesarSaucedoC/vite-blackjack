
/**
 * Retorna el valor de una carta dada
 * @param {String} carta Carta de la cual se extraera su valor
 * @returns {number} Valor obtenido
 */
export const valorCarta = (carta) =>{
    if ( carta === 0 || !carta) throw new Error('El valor de la carta debe ser mayor a cero');

    const valor = carta.substring(0, carta.length - 1);
    return  ( isNaN( valor ) ) ?  
            ( valor === 'A' ) ? 11 : 10
            : valor * 1 ;
}