'user strict'
import * as types from './actionTypes';
import * as url from '../../../core/config/url';
import * as Utils from '../../../core/utils/tools';

export function initMusicData(){
    let musicName = 'only love';
    let musicUrl = url.music_search + '?count=10&q=' + musicName;
    // let cookie = '';
    // alert('json musicUrl: '+musicUrl);
    // console.log('json musicUrl : '+musicUrl);

    return async function(dispatch){
        // fetch(musicUrl,{
        //     method:'POST',
        //     headers:{'Cookie':cookie}
        // })
        // .then(response => response.text())
        // .then(json =>{
        //     console.log('json json : '+JSON.stringify(json));
        //     alert('json : '+JSON.stringify(json));
        //     var dataList = JSON.parse(json);
        //     dispatch(refreshData(dataList));
        // }).catch(error =>{
        //     console.log('error:${error}');
        // });

        Utils.get(musicUrl, function(data){
            if(!data.musics || !data.musics.length){
                return alert('服务出错');
            }
            var musicsList = data.musics;
            alert('在initMusicData 查看数据'+JSON.stringify(musicsList));
            console.log(' 2 : '+musicsList);

            dispatch(refreshData(musicsList));
        }, function(err){
            alert(err);
        });
    }  
}

export function refreshData(musicsList){
    console.log(' 3 : '+musicsList);

    return {
        type:types.INIT_MUSIC,
        dataList:musicsList
    }
}