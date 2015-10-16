var app = require('app');
var BrowserWindow = require('browser-window');
var Menu = require('menu');

require('crash-reporter').start();

var mainWindow = null;

app.on('window-all-closed', function() {
  app.quit();
});

app.on('ready', function(){
  Menu.setApplicationMenu(menu);
  mainWindow = new BrowserWindow({width: 600, height: 400, 'node-integration': false});
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});

var template = [
  {
    label:'file',
    submenu: [
      {label:'quit', click: function(){app.quit();}}
    ]
  }
];

var menu = Menu.buildFromTemplate(template);
