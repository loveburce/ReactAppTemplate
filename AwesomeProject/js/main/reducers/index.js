import counterReducers from '../../components/counter/reducers/counter';
import musicReducers from '../../components/music/reducers/musicReducers';
import splashreducers from './splashReducers';

import {combineReducers} from 'redux';


const reducesList = combineReducers({
    counterReducers,
    musicReducers,
    splashreducers
})

export default reducesList

// var { combineReducers } = require('redux');

// module.exports = combineReducers({
//   counterReducers: require('../../components/counter/reducers'),
// });