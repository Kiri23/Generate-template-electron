const isRunningInElectron = () => {
    // user agent will have electron on the string or window.electronAPI will be defined
    // because of preload.js
    return /electron/i.test(navigator.userAgent) || window.electronAPI
}

module.exports = {
    isRunningInElectron
}