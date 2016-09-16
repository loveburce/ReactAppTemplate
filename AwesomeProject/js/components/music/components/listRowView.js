import React,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import Utils from '../../../core/utils/constant';

export default class ListRowView extends React.Component{
    render(){
        let row = this.props.row;
        return(
            <TouchableOpacity style={[styles.row,styles.item]} {...this.props}>
                <View style={[styles.center]}>
                    <Image source={{uri: row.image}} style={styles.book_img}/>
                </View>
                <View style={styles.content}>
                    <View>
                        <Text style={{flex:1}} numberOfLines={1}>{row.title}</Text>
                    </View>
                    <View style={{marginTop:10}}>
                        <Text style={[styles.publisher,{flex:1}]} numberOfLines={1}>{row.id}</Text>
                    </View>
                    <View style={{marginTop:10}}>
                        <Text style={[styles.publisher,{flex:1}]} numberOfLines={1}>{row.alt}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    row:{
        flexDirection:'row'
    },
    item:{
        height:120,
        borderTopWidth:Utils.pixel,
        borderBottomWidth:Utils.pixel,
        marginTop:5,
        marginBottom:5,
        borderColor:'#ccc'
    },
    book_img:{
        width:80,
        height:100,
        resizeMode:Image.resizeMode.contain
    },
    center:{
        justifyContent:'center',
        alignItems:'center'
    },
    content:{
        flex:1,
        marginTop:10,
        marginLeft:10,
        marginRight:10,
    },
    publisher:{
        color:'#a3a3a3',
        fontSize:13
    },
    price:{
        color:'#2bb2a3',
        fontSize:16
    },
    pager:{
        marginLeft:10,
        color:'#a7a0a0'
    }
});