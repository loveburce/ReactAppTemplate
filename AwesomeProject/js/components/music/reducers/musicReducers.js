import * as types from '../actions/actionTypes';

const initState={
    musicSource:[],
    keywords:''
};

export default function musicReducers(state=initState,action={}){
    switch(action.type){
        case types.INIT_MUSIC:{

            console.log(' 1 : '+action.dataList);
            return{
                ...state,
                musicSource:action.dataList
            }
        }
        default:
            return state;
    }
}