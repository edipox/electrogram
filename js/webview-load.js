window.setCustomTheme = function(_, theme){
  var THEME_CONTAINER_ID = "webview_theme_container";
  fs = require('fs');

  var createOrUpdate = function(id, content, type, appender){
    $('#'+id).remove();
    $('<'+type+' id="'+id+'">'+content+'</'+type+'>').appendTo(appender);
  }
  fs.readFile("./themes/"+theme+"/webview.css", 'utf8', function (err, content) {
    createOrUpdate(THEME_CONTAINER_ID, content, "style", "body")
  });
  localStorage.setItem("custom_electron_theme", theme)
}

window.onload = function() {
    var onReady = function() {
      setCustomTheme(null, localStorage.getItem("custom_electron_theme") || "elementary");
    };
    $(document).ready(onReady).on("turbolinks:load", onReady);
    $(document).on("change-theme", setCustomTheme)
}
require('electron').ipcRenderer.on('change-theme', setCustomTheme);
