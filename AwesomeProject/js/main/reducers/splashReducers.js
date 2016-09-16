'user strict'
import * as types from '../actions/actionTypes'; 

const initState={
     inSplash:true,
};

export default function SplashReducers(state=initState,action={}){
    switch(action.type){
        case types.MAIN_ENTRY:{

            console.log(' 1 : '+action.dataList);
            return{
                ...state,
                inSplash: false,
            }
        }
        default:
            return state;
    }
}