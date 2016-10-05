
const {app, BrowserWindow, dialog} = require('electron');

let mainWindow;

app.on('window-all-closed', function() {
  app.quit();
});

let quitApp = function(){ app.quit() }

app.on('ready', function() {
  var size = { width: 1000, height: 792 };
  mainWindow = new BrowserWindow({
    trasnparent: true,
    width: size.width-200,
    height: size.height-200,
    frame: false,
    minWidth: size.width-200,
    minHeight: size.height-200,
    radii: [10,10,10,10],
    maxWidth: size.width,
    // maxHeight: size.height,
  });

  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.openDevTools();
});
