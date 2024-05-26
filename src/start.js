const { app, BrowserWindow } = require('electron')
const { ipcMain } = require('electron')
const { protocol } = require('electron');

const path = require('path')
const url = require('url');


let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        // width: 1545,
        // height: 896,
        width: 1035,
        height: 900,
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

app.on('ready', createWindow)

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
