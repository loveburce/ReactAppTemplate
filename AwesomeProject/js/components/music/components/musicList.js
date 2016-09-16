import React,{Component} from 'react';
import {StyleSheet, 
        View, 
        Text, 
        Image, 
        ListView,
        PropTypes,
        TouchableOpacity,
        } from 'react-native';

import ListRowView from './listRowView';
import CutomListView from '../../../core/widgets/mListView';
import SearchView from '../../../core/widgets/mSearch';
import Constant from '../../../core/utils/constant';
import MusicDetail from './musicDetail';

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class MusicList extends React.Component{
    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.actions.initMusicData();
    }
    
    renderRow(row){
        return (
            <ListRowView row={row} onPress={this.loadPage.bind(this,row)}/>
        );
    }

    render(){
        const {state,actions} = this.props;
        const {musicSource,keywords} = state;
       
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        if(musicSource == null||musicSource.length==0){
            console.log(' 5: ');

            return(
                <View>
                    <Text>hello world ！！！</Text>
                </View>
            ); 
        }else{
            console.log(' 6: ');

            return(
                // <View style={[styles.flex_1,{marginBottom:44}]}>
                    // <View style={[styles.search, styles.row]}>
                    //     <View style={[styles.flex_1]}>
                    //         <SearchView placeholder='请输入查询关键字' onChangeText={this.changeText} defaultValue={this.state.keywords}/>
                    //     </View>
                    //     <TouchableOpacity style={styles.btn} onPress={this.search}>
                    //         <Text style={styles.fontFFF}>搜索</Text>
                    //     </TouchableOpacity>
                    // </View>

                    <ListView
                        dataSource={ds.cloneWithRows(musicSource)} 
                        renderRow={this.renderRow.bind(this)}/>
                // </View>
                  

            );
        }
        
    }

   
    changeText(){
        alert('文字改变');
        
    }

    search(){
        alert('search');
    }

    loadPage(row){

        alert(JSON.stringify('(this.props) : '+this.props));
        const {navigator} = this.props;
       
       alert('(navigator) : '+(navigator)+' : '+row.mobile_link);
        if (navigator) {

            alert('navigator : '+navigator);

            navigator.push({
                name:'MusicDetail',
                component:MusicDetail,
                passProps:{
                message:row.mobile_link
            }
            })
        }
    }

    performClick(){
        alert('performClick');
        // var onClick = this.props.onClick;
        // if(onClick){
        //     onClick();
        // }
    }
}

const styles = StyleSheet.create({
    listViewContainer:{
        flex: 1,
        backgroundColor: '#FFF',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    flex_1:{
        flex:1,
    },
    search:{
        paddingLeft:5,
        paddingRight:5,
        marginBottom:5,
        height:40
    },
    btn:{
        width:40,
        backgroundColor:'#0091ff',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:Constant.pixel,
    },
    fontFFF:{
        color:'#fff',
    },
    row:{
        flexDirection:'row',
    },
    img:{
        width:70,
        height:70,
        borderRadius:35,
    },
    center:{
        justifyContent:'center',
        alignItems:'center',
    },
    item:{
        marginTop:10,
        borderTopWidth:Constant.pixel,
        borderBottomWidth:Constant.pixel,
        borderColor:'#ddd',
        paddingTop:10,
        paddingBottom:10
    },
    textWidth:{
        width:120
    },
    goDou:{
        height:35,
        width:60,
        borderWidth:Constant.pixel,
        borderColor:'#3082FF',
        borderRadius:3
    }
});