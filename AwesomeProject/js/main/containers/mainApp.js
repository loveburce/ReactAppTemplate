'use strict';

import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import MainView from '../components/mainView';
import StartView from '../components/startView';
import * as actionList from '../actions';

class MainApp extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {state,action} = this.props;
        return(
            <StartView {...this.props}/>
        );
    }
}

export default connect(state =>({
        state: state
    }),
    (dispatch) =>({
        actions: bindActionCreators(actionList, dispatch)
    })
)(MainApp);