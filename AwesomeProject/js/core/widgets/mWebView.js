import Constant from '../utils/constant';
import Header from './mHeader';

import React,{Component} from 'react';
import {WebView,View,StyleSheet} from 'react-native';

export default class MWebView extends React.Component{
    render(){
        console.log(this.props.url);
        var obj = this.props.initObj;

         alert('obj : '+JSON.stringify(obj));
         console.log('obj : '+JSON.stringify(obj));
        return(
            <WebView
                startInLoadingState={true}
                source={{uri:obj.url}}
                domStorageEnabled={true}
                javaScriptEnabled={true}/>
        );
    }
}

const styles = StyleSheet.create({
  webView:{
    // width:Constant.screen_size.width,
    // height:Constant.screen_size.height - Constant.navigationHeight - 44,
    width:70,
    height:300,
    backgroundColor:'#dfdfdf'
  },
});