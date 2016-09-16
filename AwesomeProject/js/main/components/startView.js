'use strict'

import React,{component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    TextInput,
    View,
    Navigator
} from 'react-native';

import SplashView from './splashView';

export default class StartView extends React.Component{
    render(){
        var defaultName = 'SplashView';
        var defaultComponent = SplashView;
        return(
            <Navigator
                /*指定了默认的页面，也就是启动app后第一个会看到的第一屏，需要两个参数，name 和 component*/
                initialRoute={{name:defaultName,component:defaultComponent}}
                configureScene={(route) =>{
                    //跳转的动画
                    return Navigator.SceneConfigs.FadeAndroid;
                }}
                renderScene={(route, navigator) =>{
                    let Component = route.component;
                    if(route.component){
                        return <Component navigator={navigator}/>
                    }
                }}/>
        );
    }
}
