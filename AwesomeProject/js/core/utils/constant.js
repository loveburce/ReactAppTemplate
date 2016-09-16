import Dimensions from 'Dimensions';

import React from 'react';
import {PixelRatio,ActivityIndicatorIOS} from 'react-native';

module.export = {
    navigationHeight:44,
    navigationBarBGColor:'#3497ff',
    statusBarHeight:20,

    /*最小线宽*/
    pixel:1 / PixelRatio.get(),

    /*屏幕尺寸*/
    screen_size:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height
    },

    
};