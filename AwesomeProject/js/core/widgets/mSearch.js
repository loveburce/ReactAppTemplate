import Utils from '../utils/constant';

import React,{Component} from 'react';
import {StyleSheet,TextInput,View} from 'react-native';

export default class CustomSearch extends React.Component{
    render(){
        return(
            <View style={styles.flex_1}>
                <TextInput 
                    style={[]}
                    autoCapitalize='none'
                    clearButtonMode='while-editing'
                    {...this.props}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flex_1:{
        flex:1
    },
    input:{
        borderWidth:Utils.pixel,
        height:40,
        borderColor:'#dddddd',
        paddingLeft:5
    }
});