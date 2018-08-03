import React, { Component } from 'react';
import { createStackNavigator, } from 'react-navigation';
import { reduxifyNavigator, createReactNavigationReduxMiddleware, createNavigationReducer } from 'react-navigation-redux-helpers';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import decks from './reducers/decks';
import DeckListView from './components/DeckListView';

const MyNavigator = createStackNavigator({
    Home: {
        screen: DeckListView,
    }
});

const navReducer = createNavigationReducer(MyNavigator);

const logger = store => next => action => {
    console.group(action.type);
    console.info('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    console.groupEnd(action.type);
    return result;
};

const appReducer = combineReducers({
    nav: navReducer,
    decks,
});

const reduxMiddleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav,
);

const App = reduxifyNavigator(MyNavigator, 'root');
const mapStateToProps = (state) => ({
    state: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(App);

const store = createStore(
    appReducer,
    applyMiddleware(thunkMiddleware, reduxMiddleware, logger),
);

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}
