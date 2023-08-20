const { app, BrowserWindow } = require('electron')
const fs = require('fs');
const path = require('path');
const APP_ICON = path.join(__dirname, '/build/icons/512x512.png');

const createWindow = () => {
    const window = new BrowserWindow({
        width: 1024,
        height: 600,
        icon: APP_ICON,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            nodeIntegrationInWorker: true,
            nodeIntegrationInSubFrames: true,
            enableRemoteModule: true,
            contextIsolation: false,
            webviewTag: true
        },
        autoHideMenuBar: true
    })
    require('@electron/remote/main').initialize()
    require('@electron/remote/main').enable(window.webContents)
    try {
        require('electron-reloader')(module);
    } catch (e) {}
    window.loadFile('ui/index.html')
    window.setMenuBarVisibility(false)
}
app.on('ready', () => {
    createWindow()
})
app.on('window-all-closed', () => {
    app.quit()
})
app.on('quit', () => {
    app.quit()
})