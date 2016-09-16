'use strict'

import React,{Component} from 'react';
import {
    Navigator,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    DrawerLayoutAndroid,
} from 'react-native';

export default class MainViewAndroid extends React.Component{

    // constructor(props){
    //     super(props);
    //     this.renderNavigationView = this.renderNavigationView.bind(this);
    //     this.openDrawer = this.openDrawer.bind(this);
    // }

    openDrawer(){
        this.drawer.openDrawer();
    }

    render(){
        var navigationView = (
            <View style={styles.navigationView}>
                <Image source = {{uri:'http://img.hb.aicdn.com/735afbfa2f6fee24d1a10e1a22b23c63f707ea82281c3-ajdFRe_fw658'}} 
                        style={{ height:300 }}/>
                <Text style={[styles.text_1]}>导航的标题栏</Text>
                <Text style={[styles.text_2]}>主页</Text>
                <Text style={[styles.text_2]}>发现</Text>
                <Text style={[styles.text_2]}>搜藏</Text>
                <Text style={[styles.text_2]}>设置</Text>
            </View>
        );
        return(
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.left}
                renderNavigationView={()=>navigationView}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <View>
                        <View style={[styles.titleView]}>
                            <TouchableOpacity onPress={this.openDrawer}>
                                <Image source={require('../images/menu_icon.png')} style={{height:20,widht:20}}/>
                            </TouchableOpacity>
                            <Text style={{fontSize:18,color:'#484848'}}>主页</Text>
                            <Image source={require('../images/search_top.png')} style={{height:20,widht:20}}/>
                        </View>

                            <Image source= {{ uri: 'http://img.hb.aicdn.com/cbf3ebcae08ef62ef02dd61aa2407414dc64e794150313-KRUD1s_fw658' }}
                            style={{ height: 220, margin: 20}}  />
                            <Text style={{ fontSize:16,  color:'#484848', alignSelf:'center' }}>HOT PRODUCTS</Text>
                            <View style={ styles.photoRow }>
                            <View>
                            <Image source= {{ uri: 'https://gw.alicdn.com/bao/uploaded/TB1YQAPKVXXXXa9XFXXwu0bFXXX.png_270x270Q90.jpg' }}
                                style={ styles.photoItem }  />
                                <Text style={styles.photoName }>TEL ORGES</Text>
                                <Text style={styles.photoPrice }>$99</Text>
                            </View>
                            <View>
                            <Image source= {{ uri: 'https://gw.alicdn.com/bao/uploaded/TB1DteFKVXXXXXQapXXSutbFXXX.jpg_270x270Q90.jpg' }}
                                style={  styles.photoItem  }  />
                                <Text style={styles.photoName}>ARFL JUYHS</Text>
                                <Text style={styles.photoPrice }>$34.2</Text>
                            </View>
                            <View>
                            <Image source= {{ uri: 'https://gw.alicdn.com/bao/uploaded/TB1dQGTKVXXXXaaXVXXSutbFXXX.jpg_270x270Q90.jpg' }}
                                style={ styles.photoItem  }  />
                                <Text style={styles.photoName}>TKLL ORGES</Text>
                                <Text style={styles.photoPrice }>$182</Text>
                            </View>
                            </View>

                    </View>
                </ScrollView>
            </DrawerLayoutAndroid>
        )
    }
    
}

const styles = StyleSheet.create({
    text_1:{
        margin: 10,
        color:'#fff',
        fontSize: 15, 
        textAlign: 'center'
    },
    text_2:{
        marginTop: 10,
        marginLeft:20,
        color:'#000',
        fontSize: 17, 
        textAlign: 'left'
    },
    text_3:{
        margin: 10, 
        fontSize: 15, 
        textAlign: 'right'
    },
    content:{
        flex: 1, 
        alignItems: 'center'
    },
    navigationView:{
        flex:1,
        backgroundColor:'#dfdfdf'
    },
    titleView:{
        backgroundColor: '#f4ec34',
        height:54,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft: 20,
        paddingRight:20,
    },
    photoRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:20,
        paddingRight:20,
        marginTop:10,
    },
    photoItem:{
        height:120,
        width:90,
        alignItems:'stretch',
        alignSelf:'center'
    },
    photoName:{
        fontSize:14,
        color:'#f39d7f',
        alignSelf:'center'
    },
    photoPrice:{
        fontSize:12,
        color:'#484848',
        alignSelf:'center'
    }
});