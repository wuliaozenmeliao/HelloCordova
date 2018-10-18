cordova.define("toast_plugin.Toast", function(require, exports, module) {
var exec = require('cordova/exec');
var device = function(){};
//showT与js中action一致
//device.prototype.方法名，是对外部提供的方法
device.prototype.showT = function (success, error, arg0) {
/*
 *Toast文件名称
 *showToast 文件中方法名称
 *[arg0] 传递的数据
 */
console.log("2");
exec(success, error, 'Toast', 'showToast', [arg0]);
               
}
               
               
//new一个device的类对象，并赋值给module.exports
var Toast = new device();
module.exports = Toast;
});
