const { send,on } = window.electronAPI;

export function sendMessageToMain(message, data) {
  send(message, data);
}

export function subscribeToMessageFromMain(message, callback) {
  on(message, callback);
}
