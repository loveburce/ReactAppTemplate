import Utils from '../utils/constant';

import React,{Component} from 'react';
import {StyleSheet,View} from 'react-native';

export default class MLeftIcon extends React.Component{
    render(){
        return(
            <View>
                <View style={styles.go}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    go:{
        borderLeftWidth: 4 * Utils.pixel,
        borderBottomWidth: 4 * Utils.pixel,
        width:15,
        height:15,
        transform: [{rotate: '45deg'}],
        borderColor:'#FFF',
        marginLeft:10
    }
})