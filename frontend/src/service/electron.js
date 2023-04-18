let send = () => {};
let on = () => {};

// If we are in the electron environment, we can use the electronAPI.
// otherwise, don't throw an error on the the web browser.
if (window.electronAPI) {
  send = window.electronAPI.send;
  on = window.electronAPI.on;
}

export function sendMessageToMain(message, data) {
  send(message, data);
}

export function subscribeToMessageFromMain(message, callback) {
  on(message, callback);
}
