const { app, BrowserWindow,ipcMain } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
const EVENTS = require('../events.json')
const templateAdapters = require('./adapters/templateAdapters');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  if(isDev){
    win.webContents.openDevTools();
  }

  const startUrl = isDev
    ? 'http://localhost:3000'
    : `file://${path.join(__dirname, '../build/index.html')}`;

  win.loadURL(startUrl);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.on(EVENTS.duplicate_template, async (event, {selectedTemplate, destination} = {}) => {
  if (selectedTemplate && destination) {
    await templateAdapters.duplicate_template(selectedTemplate, destination);
    return;
  }
  console.error("Invalid arguments passed to duplicate_template");
});

ipcMain.handle(EVENTS.select_template, async () => {
  return await templateAdapters.loadTemplates();
});

// export the JSON file to the preload.js file
// since we can't import it directly on the preload.js file
ipcMain.handle("load_valid_channels_from_json_file", () => {  
  return Object.keys(EVENTS);
});
