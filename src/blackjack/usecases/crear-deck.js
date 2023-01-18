


import _ from "underscore";


// export const hola ='Hola mundo';


/**
 * Esta funcion crea un nuevo deck
 * @param {array<String>} tiposDeCarta  Ejemplo: ['C', 'D', 'H', 'S']
 * @param {array<String>} tiposEspeciales  Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {array<String>} retorna un nuevo deck de cartas
 */
//  const crearDeck = (tiposDeCarta, tiposEspeciales) => {
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if ( !tiposDeCarta || tiposDeCarta.length === 0) 
    throw new Error('TiposDeCarta es obligatorio como un arreglo de String');
    
    if ( !tiposEspeciales || tiposEspeciales.length === 0) 
    throw new Error('TiposDeCarta es obligatorio como un arreglo de String');
    
    const deck = [];
    for (let i=2; i < 11; i++){
        for( let tipo of tiposDeCarta){
            deck.push(i+tipo);
        }
    }
    
    for(let tipo of tiposDeCarta){
        for(let esp of tiposEspeciales){
            deck.push(esp + tipo);
        }
    }
    return _.shuffle(deck);

}

// export default crearDeck;
