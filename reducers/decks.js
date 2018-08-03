import { ADD_CARD } from '../actions/decks';

const initialDecksModel = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    }
};

const decks = (state = initialDecksModel, action) => {
    switch (action.type) {
    case ADD_CARD: 
        return {
            ...state, 
            [action.deck]: {
                ...state[action.deck],
                questions: [
                    ...state[action.deck].questions,
                    action.card
                ]
            }
        };
    default:
        return state;
    }
};

export default decks;