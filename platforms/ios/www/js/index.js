function showClick(){
    cordova.plugins.Toast.showT(onSuccess, onFail, "123123123");
}
function onSuccess(msg){
    alert(msg);
    
}
function onFail(msg) {
    alert(msg);
    
}
