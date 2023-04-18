let send = () => {};
let on = () => {};

// If we are in the electron environment, we can use the electronAPI.
// otherwise, don't throw an error on the the web browser.
if (window.electronAPI) {
  // this is not the same as the ipcRenderer.send() function
  // since we filter out the channels that are not allowed.
  send = window.electronAPI.whitelistedSend;
  on = window.electronAPI.whitelistedOn;
}

// These names indicate that the messages being sent and received are 
// restricted to whitelisted channels, 
// making it clearer that there's a level of filtering involved.
export function sendWhitelistedMessageToMain(message, data) {
  send(message, data);
}

export function subscribeToWhitelistedMessageFromMain(message, callback) {
  on(message, callback);
}
