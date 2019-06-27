const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let win;

//Load index.html
function createWindow() {
  //Create Browser Window
  win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: __dirname + '/image/infosys.png',
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadURL(
    url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file',
      slashes: true
    })
  );

  //Open Devtools
  win.webContents.openDevTools();

  win.on('closed', () => {
    win = 'null';
  });
}
//Run createWindow func
app.on('ready', createWindow);

//Quit When All windows are closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
