const remote = require('electron').remote;
window.jq = require('./js/jquery-3.1.0.min.js');
jq.wait = function(ms) {
  var defer = jq.Deferred();
  setTimeout(function() { defer.resolve(); }, ms);
  return defer;
};

window.setCustomTheme = function(theme){
  var THEME_CONTAINER_ID = "window_theme_container";
  fs = require('fs');

  var createOrUpdate = function(id, content, type, appender) {
      jq('#' + id).remove();
      jq('<' + type + ' id="' + id + '">' + content + '</' + type + '>').appendTo(appender);
  }
  fs.readFile("./themes/" + theme + "/window.css", 'utf8', function(err, content) {
      console.error(err);
      createOrUpdate(THEME_CONTAINER_ID, content, "style", "body")
  });
  var webview = getWebview();
  localStorage.setItem("theme", theme);
  webview.send('change-theme', theme);
}

var getWebview = function(){
  return document.getElementById('webview');
}
