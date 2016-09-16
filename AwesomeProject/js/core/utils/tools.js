module.exports={
    get(url,successCallback, failCallback){
        fetch(url)
        .then((response) => response.text())
        .then((responseText) =>{
            console.log(responseText);
            successCallback(JSON.parse(responseText));
        })
        .catch(function(err){
            failCallback(err);
        });
    }
}