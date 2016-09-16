'user strict'
import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import Utils from '../../../core/utils/constant';
import MHeader from '../../../core/widgets/mHeader';
import MWebView from '../../../core/widgets/mWebView';
// import Url from '../../../core/config/url';
// import BookItem from './bookItem';

export default class MusicDetail extends React.Component{
   constructor(props){
        super(props);
        this.state = {
            message:"",
        };
    }

    componentDidMount(){
        this.setState({
            message:this.props.message,
        });
    }

    render(){
        alert('this.state.message : '+JSON.stringify(this.state.message)+' : ');
        console.log(JSON.stringify(this.state.message)+' : ');
        return(
            <View>
                <MHeader
                    navigator={this.props.navigator}
                    initObj={{
                        backName:'图书',
                        title:''
                    }}/>
                <MWebView
                    navigator={this.props.navigator}
                    initObj={{
                        url:this.state.message
                    }}/>

            </View>
        )
    }
}