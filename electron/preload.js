const { contextBridge, ipcRenderer } = require('electron');

// Async function sets up the API after receiving valid channels
// from the main process. Direct import of events.json isn't
// allowed in preload.js beacuse of this proces being sandboxed, 
// so we use an event from the main process.

async function setupAPI() {
  // Get the valid channels from the main process.
  const validChannels = await ipcRenderer.invoke('load_valid_channels_from_json_file');

  contextBridge.exposeInMainWorld('electronAPI', {
    whitelistedSend: (channel, data) => {
      // limit exposure of ipcRenderer to valid channels
      // to follow best practices
      if (validChannels.includes(channel)) {
        ipcRenderer.send(channel, data);
      }
    },
    whitelistedOn: (channel, callback) => {
      if (validChannels.includes(channel)) {
        ipcRenderer.on(channel, (event, data) => callback(data));
      }
    },
    whitelistedInvoke: (channel, data) => {
      if (validChannels.includes(channel)) {
        return ipcRenderer.invoke(channel, data);
      }
    },
    removeAllListeners: (channel) => {
      ipcRenderer.removeAllListeners(channel);
    },
  });
}


setupAPI();