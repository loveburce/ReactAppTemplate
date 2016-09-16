import Utils from '../utils/constant';
import LeftIcon from './mLeftIcon';

import React from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet
    } from 'react-native';

    export default class CustomHeader extends React.Component{
        render(){
            var obj = this.props.initObj;
            return(
                <View style={[styles.header,styles.row,styles.center]}>
                    <TouchableOpacity style={[styles.row,styles.center]} onPress={this._pop}>
                        <LeftIcon/>
                        <Text style={styles.fontFFF}>{obj.backName}</Text>
                    </TouchableOpacity>
                    <View style={[styles.title, styles.center]}>
                        <Text style={[styles.fontFFF, styles.titlePos]} numberOfLines={1}>{obj.title}</Text>
                    </View>
                </View>
            );
        }

        _pop(){
            this.props.navigator.pop();
        }
    }

    const styles = StyleSheet.create({
        row:{
            flexDirection:'row'
        },
        header:{
            height:Utils.navigationHeight,
            backgroundColor:Utils.navigationBarBGColor,
        },
        fontFFF:{
            color:'#fff',
            fontSize:17,
            fontWeight:'bold'
        },
        title:{
            flex:1
        },
        titlePos:{
            marginLeft:-20,
            width:200,
        },
        center:{
            justifyContent:'center',
            alignItems:'center'
        }
    });