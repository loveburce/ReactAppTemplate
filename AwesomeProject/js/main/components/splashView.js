'user strict'
import React,{Component} from 'react';
import {
    Image,
    View,
    Text,
    Animated,
    StyleSheet,
    Platform,
    TouchableOpacity,
    TouchableHighlight,
    ToastAndroid,
    ViewPagerAndroid,
} from 'react-native';

// import MainView from './mainViewAndroid';
import MainView from './mainView';
import MusicView from '../../components/music/containers/app';
import MButton from '../../core/widgets/mButton';

export default class SplashView extends React.Component{
    /*实例化时候调用，以后不再调用，初始化固定值，以后不再改变*/
    // getDefaultProps(){
    //     return;
    // }

    /*初始化状态值，用于改变组件状态*/
    // getInitialState(){
    //     return;
    // }

    constructor(props){
        super(props);
        this.state={anim : new Animated.Value(0),};
        this.onAnimatedCompleted = this.onAnimatedCompleted.bind(this);
    }

    componentDidMount(){
        Animated.timing(this.state.anim,{toValue:3000,duration:3000}).start();
        this.state.anim.addListener(this.onAnimatedCompleted);
    }

    componentWillUnmount(){
        this.state.anim.removeAllListeners();
    }

    onAnimatedCompleted(value){
        if(value.value === 3000){
            // this.props.dispatch(enterMainPage());
            this.pressButton.bind(this);
        }
    }

    /*render 是一个组件必须有的方法，形成为一个函数，
    ＊并返回jsx或其他组件来构成dom，和android的xml布局，
    ＊wpf 的xaml 布局类似，只能返回一个顶级元素
    ＊注意：在render函数中，只能通过this.state和this.props来访问在之前函数中初始化的数据
    */
    render(){
        if(Platform.OS === 'android'){
           return(
                <ViewPagerAndroid
                    style={styles.viewPager}
                    initialPage={0}>
                    <View style={styles.pageStyle}>
                        <Image source={require('../images/guide1.png')} style={styles.image}/>
                    </View>
                    <View style={styles.pageStyle}>
                        <Image source={require('../images/guide2.png')} style={styles.image}/>
                    </View>
                    <View style={styles.pageStyle}>
                        <Image source={require('../images/guide3.png')} style={styles.image}/>
                        <MButton
                            onPress={this.pressButton.bind(this)}
                            text='进入主页'
                            style={styles.button1}/>
                    </View>
                </ViewPagerAndroid>
            );
        }else{
            return(

                <Animated.Image style={[styles.container, this.fadeIn(0,0)]}
                    source={require('../images/splash_background.png')}>
                    <View style={{flex:1}}/>
                    <View>
                        <Animated.Image style={[styles.marvellogo, this.fadeIn(2000,20)]}
                            source={require('../images/marvel_logo.png')}/>
                        <Animated.Text style={[styles.marvelinfo, this.fadeIn(2000,20)]}>
                            Data provided by marvel. @2016 Marvel
                        </Animated.Text>
                    </View>
                </Animated.Image>
            );
        }
        
    }

    pressButton(){
        alert('跳转');
        const {navigator} = this.props;
        if(navigator){
            navigator.push({
                name:'MainView',
                component:MainView
            });
        }
    }

    fadeIn(delay, from=0){
        const {anim} = this.state;
        return{
            opacity:anim.interpolate({
                inputRange:[delay,Math.min(delay + 500, 3000)],
                outputRange:[0,1],
                extrapolate:'clamp'
            }),
            transform:[{
                translateY:anim.interpolate({
                    inputRange:[delay, Math.min(delay+500, 3000)],
                    outputRange:[from,0],
                    extrapolate:'clamp',
                })
            }],
        };
    }
}

//react native组件的生命周期，经历mount->update->unmount这三大过程，即从创建到销毁的过程

const styles = StyleSheet.create({
    viewPager:{
        flex:1,
        backgroundColor:'#f5f5f5',
    },
    pageStyle:{
        flex:1,
        alignItems:'stretch',
        justifyContent:'center',
        position:'relative',
    },
    image:{
        flex:1,
        justifyContent:'flex-end',
        paddingBottom:40,
    },
    button1:{
        width:200,
        alignSelf:'flex-start',
        flexDirection:'row',
    },
    messageText:{
        fontSize:27,
        fontWeight:'500',
        padding:15,
        marginTop:50,
        marginLeft:15,
    },
    button:{
        
        backgroundColor:'#FFF',
        padding:15,
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderBottomColor:'#cdcdcd',
        alignSelf:'center',
    },
    container:{
        flex:1,
        backgroundColor:'transparent',
        width:undefined,
        height:undefined,
        flexDirection:'column',
    },
    marvellogo:{
        alignSelf:'center',
        alignItems:'center',
        marginBottom:10,
    },
    marvelinfo:{
        marginBottom:24,
        fontSize:12,
        color:'#032250',
        textAlign:'center'
    }
});