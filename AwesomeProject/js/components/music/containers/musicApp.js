'user  strict'
import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import MusicView from '../components/musicList';
import * as musicActions from '../actions/musicActions';

class MusicApp extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const{state, action} = this.props;
        return(
            <MusicView {...this.props}/>
        );
    }
}

export default connect(
    state =>({
        state:state.musicReducers
    }),
    (dispatch) =>({
        actions:bindActionCreators(musicActions, dispatch)
    })
)(MusicApp);