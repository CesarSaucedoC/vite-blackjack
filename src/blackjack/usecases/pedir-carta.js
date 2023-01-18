 
 /**
  * Extrae una carta de la parte superior del deck
  * @param {Array<String>} deck Deck del que se extraera la carta
  * @returns {String} Carta obtenida
  */
 
 export const pedirCarta = (deck) => {
    if(!deck || deck.length === 0){
        throw new Error('El deck no existe o no hay cartas en el');
    }
    return deck.pop();
}