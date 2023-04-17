let send = () => {};
let on = () => {};
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
