const { app, BrowserWindow } = require('electron')
const { ipcMain } = require('electron')
const { protocol } = require('electron');
const { autoUpdater } = require('electron-updater');
const log = require('electron-log');

log.log("app ver: " + app.getVersion())

const path = require('path')
const url = require('url');


let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        // width: 1545,
        // height: 896,
        width: 1265,
        height: 710,
        webPreferences: {
            sandbox: false,
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: false,
            webSecurity: false
        },
        resizable: false
    });

    mainWindow.setMenuBarVisibility(false)

    // mainWindow.webContents.openDevTools()

    mainWindow.loadURL(
        process.env.ELECTRON_START_URL ||
        url.format({
            pathname: path.join(__dirname, "../build/index.html"),
            protocol: 'file:',
            slashes: true
        })
    )


    mainWindow.on('closed', () => {
        mainWindow = null
    })
}

app.on('ready', () => {
    createWindow()
    autoUpdater.checkForUpdatesAndNotify()
})


autoUpdater.on("checking-for-update", () => {
    mainWindow.webContents.send('updateMsg', { type: 'checking' })
})

autoUpdater.on("update-available", () => {
    mainWindow.webContents.send('updateMsg', { type: 'available' })
})

autoUpdater.on('update-not-available', () => {
    mainWindow.webContents.send('updateMsg', { type: 'notAvalable' })
})

autoUpdater.on('error', (err) => {
    log.info(err);
    mainWindow.webContents.send('updateMsg', { type: 'error', data: err })
})

autoUpdater.on("download-progress", (progressObj) => {
    mainWindow.webContents.send('updateMsg', { type: 'progress', data: progressObj })
});

autoUpdater.on('update-cancelled', () => {
    mainWindow.webContents.send('updateMsg', { type: 'cancelled' })
})

autoUpdater.on("update-downloaded", () => {
    mainWindow.webContents.send('updateMsg', { type: 'success' })
    autoUpdater.quitAndInstall()
})


ipcMain.on('bye', () => {
    app.quit()
})

ipcMain.on('reset', () => {
    mainWindow.reload();
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
})
