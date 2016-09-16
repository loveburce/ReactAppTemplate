import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware,compose} from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialState) {

  // alert(JSON.stringify(rootReducer));
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk),
    )
  );

  // const store = createStore(rootReducer,initialState)
  // if(module.hot){
  //   module.hot.accept('../reducers',()=>{
  //     const nextReducer = require().default
  //     store.replaceReducer(nextReducer)
  //   })
  // }

  return store;
};