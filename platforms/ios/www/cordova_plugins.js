cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "toast_plugin.Toast",
    "file": "plugins/toast_plugin/www/Toast.js",
    "pluginId": "toast_plugin",
    "clobbers": [
      "cordova.plugins.Toast"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "toast_plugin": "1.0.0"
};
// BOTTOM OF METADATA
});