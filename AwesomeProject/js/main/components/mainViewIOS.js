'use strict'

import React,{Component} from 'react';
import {
    Navigator,
    StyleSheet,
    view,
    Text,
    Image,
    TabBarIOS
} from 'react-native';
import {connect} from 'react-redux';

import CountView from '../../components/counter/containers/app';
import MusicView from '../../components/music/containers/app';


class MainViewAndroid extends React.Component{

    constructor(props){
        super(props);
        return{
            selectedTab:'home',
            lastTab:'home',
            showIndex:{
                height:0,
                opacity:0
            },
        };
    }

    _selectTab(newTabName){
        var currentTab = this.state.selectedTab;
        if(currentTab !== newTabName){
            this.setState({
                lastTab:currentTab,
            });
        }
        this.setState({
            selectedTab:newTabName,
        })
    }

    _search(){
        this._selectTab('search');
    }

    _scan(){
        this._selectTab('scan');
    }

    _addNavigator(component,title){
        var data = null;
        if(this.state.selectedTab === 'home' || this.state.selectedTab === 'market'){
            return(
                <NavigatorIOS
                    style={{flex:1}}
                    barTintColor='#6bb967'
                    titleTextColor='#fff'
                    tintColor='#fff'
                    translucent={false}
                    initialRoute={{
                        component:component,
                        title:title,
                        rightButtonTitle:'搜索',
                        onRightButtonPress:()=>this._search(),
                        leftButtonTitle:'扫一扫',
                        onLeftButtonPress:()=>this._scan(),
                        passProps:{data:data}
                    }}
                />
            )
        }
        return(
            <NavigatorIOS
                style={{flex:1}}
                barTintColor='#6bb967'
                titleTextColor="#fff"
                tintColor="#fff"
                translucent={false}
                initialRoute={{
                    component: component,
                    title: title,
                    rightButtonTitle:"",
                    passProps:{data: data}
                }} 
            />
        )
    }

    _renderNewTab(component, title){
        var lastTab = this.state.lastTab;
        return(
            <NavigatorIOS
                style={{flex:1}}
                barTintColor='#6bb967'
                titleTextColor='#fff'
                tintColor='#fff'
                translucent={false}
                initialRoute={{
                    component:component,
                    title:title,
                    onLeftButtonPress:()=>this._selectTab(lastTab),
                    leftButtonTitle:'返回',
                    // passProps:{data:this.state.store_id}
                }}
            />
        )
    }


   render(){
       if(this.state.selectedTab === 'search'){
           return this._renderNewTab(Search,'搜索');
       }else if(this.state.selectedTab === 'scan'){
           return this._renderNewTab(Scan,'扫一扫');
       }

       return (
           <TabBarIOS>
                <TabBarIOS.Item
                    title='music'
                    selected={this.props.tab === 'music'}
                    onPress={this.onTabSelected.bind(this,'music')}
                    icon={require('../images/home_normal.png')}
                    renderAsOriginal={true}
                    selectedIcon={require('../images/home_focus.png')}>
                    {this._addNavigator(MusicView,'首页')}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title='book'
                    selected={this.props.tab === 'book'}
                    onPress={this.onTabSelected.bind(this,'book')}
                    icon={require('../images/category_normal.png')}
                    renderAsOriginal={true}
                    selectedIcon={require('../images/category_focus.png')}>
                    {this._addNavigator(CountView,'首页')}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title='movie'
                    selected={this.props.tab === 'movie'}
                    onPress={this.onTabSelected.bind(this,'movie')}
                    icon={require('../images/faxian_normal.png')}
                    renderAsOriginal={true}
                    selectedIcon={require('../images/faxian_focus.png')}>
                    {this._addNavigator(CountView,'首页')}
                </TabBarIOS.Item>
           </TabBarIOS>
       );
   }
}

function select(store){
    return{
        tab:store.navigation.tab,
    };
}

function actions(dispatch){
    return{
        onTabSelected:(tab) => dispatch(switchTab(tab)),
    }
}

module.exports = connect(select, actions)(MainViewAndroid);