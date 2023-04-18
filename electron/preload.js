const { contextBridge, ipcRenderer } = require('electron');
const EVENTS = require('../events.json')

const validChannels = Object.keys(EVENTS)


contextBridge.exposeInMainWorld('electronAPI', {
  send: (channel, data) => {
    // limit exposure of ipcRenderer to valid channels
    // to follow best practices
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },
  on: (channel, callback) => {
    if (validChannels.includes(channel)) {
      ipcRenderer.on(channel, (event, data) => callback(data));
    }
  },
  removeAllListeners: (channel) => {
    ipcRenderer.removeAllListeners(channel);
  },
});
