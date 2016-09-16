'user strict'

import React,{Component} from 'react';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';

import musicReducers from '../reducers';
import MusicApp from './musicApp';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers({musicReducers});
const store = createStoreWithMiddleware(reducer);

export default class App extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <MusicApp {...this.props}/>
            </Provider>
        );
    }
}