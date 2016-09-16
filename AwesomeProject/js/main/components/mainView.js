'use strict'
import React,{ Component } from 'react';
import {AppRegistry,StyleSheet,Text,Image,View} from 'react-native';


import TabNavigator from 'react-native-tab-navigator';
import HomeView from '../../components/counter/containers/app';
import MusicView from '../../components/music/containers/app';

const HOME = 'home';
const HOME_NORMAL = require('../images/home_normal.png');
const HOME_FOCUS = require('../images/home_focus.png');
const CATEGORY = 'category';
const CATEGORY_NORMAL = require('../images/category_normal.png');
const CATEGORY_FOCUS = require('../images/category_focus.png');
const AFTERMARKET = 'aftermarket';
const FAXIAN_NORMAL = require('../images/faxian_normal.png');
const FAXIAN_FOCUS = require('../images/faxian_focus.png');
const CART = 'cart';
const CART_NORMAL = require('../images/cart_normal.png');
const CART_FOCUS = require('../images/cart_focus.png');
const PERSONAL = 'personal';
const PERSONAL_NORMAL = require('../images/personal_normal.png');
const PERSONAL_FOCUS = require('../images/personal_focus.png');

export default class MainView extends React.Component{
    constructor(props){
        super(props);
        this.state = {selectedTab:HOME}
    }

    renderTabItem(img,selectedImg,tag,childview){
        return(
            <TabNavigator.Item
                selected={this.state.selectedTab === tag}
                renderIcon={() => <Image style={styles.tabIcon} source={img}/>}
                renderSelectedIcon={() => <Image style={styles.tabIcon} source={selectedImg}/>}
                onPress={() => this.setState({selectedTab: tag})}>
                {childview}
            </TabNavigator.Item>
        );
    }

    static createChildView(tag){
        return(
            <View style={styles.childview}>
                <Text style={{fontSize:22}}>{tag}</Text>
            </View>
        )
    }

    render(){
        return(
            <View style={{flex:1}}>
             <TabNavigator hidesTabTouch={true} tabBarStyle={styles.tab}>
              {this.renderTabItem(HOME_NORMAL, HOME_FOCUS, HOME, <MusicView/>)}
              {this.renderTabItem(CATEGORY_NORMAL, CATEGORY_FOCUS, CATEGORY, <HomeView/>)}
              {this.renderTabItem(FAXIAN_NORMAL, FAXIAN_FOCUS, AFTERMARKET, <HomeView/>)}
              {this.renderTabItem(CART_NORMAL, CART_FOCUS, CART, <HomeView/>)}
              {this.renderTabItem(PERSONAL_NORMAL, PERSONAL_FOCUS, PERSONAL, <HomeView/>)}
            </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  tab: {
    height: 52,  
    backgroundColor: '#333333',  
    alignItems: 'center'  
  },
  tabIcon: {
      width: 30,
      height: 35,
      resizeMode: 'stretch',
      marginTop: 12.5
  },
  childview:{
      flex:1,
      backgroundColor:'#00baff',
      alignItems:'center',
      justifyContent:'center'
  }
});