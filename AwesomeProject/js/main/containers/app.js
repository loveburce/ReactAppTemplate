import React,{Component} from 'react';
import { View, Text,Navigator,Alert} from 'react-native';
import configureStore from '../store/configureStore';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';

import myCenterReducers from '../reducers';
import MainApp from './mainApp';

const store = configureStore();

export default class App extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <MainApp />
            </Provider>
        );
    }
}

