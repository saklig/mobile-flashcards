export const ADD_CARD = 'ADD_CARD';

export const addCard = (deck, card) => ({
    type: ADD_CARD, 
    deck, 
    card,
});