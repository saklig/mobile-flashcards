export const ADD_CARD = 'ADD_CARD';
export const ADD_DECK = 'ADD_DECK';

export const addCard = (deck, card) => ({
    type: ADD_CARD, 
    deck, 
    card,
});

export const addDeck = (deck) => ({
    type: ADD_DECK, 
    deck: deck,
});