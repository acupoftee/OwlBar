const { app, BrowserWindow } = require('electron')
const { format } = require('url')
const { menubar } = require('menubar')
const path = require('path')
const isDev = require('electron-is-dev')
const { resolve } = require('app-root-path')

const menubarApp = menubar({
  index: 'file://' + path.join(__dirname, 'index.html'),
  icon: path.join(app.getAppPath(), 'src/resources/logo.png'),
  browserWindow: {
    width: 300,
    height: 465,
    resizable: false,
    moveable: false,
    webPreferences: {
      nodeIntegration: true
    }
  },
  preloadWindow: true
})

menubarApp.on('ready', async () => {
  console.log('app is ready')
})
