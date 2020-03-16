const { app, BrowserWindow } = require('electron')
const { format } = require('url')
const { menubar } = require('menubar')
const path = require('path')
const isDev = require('electron-is-dev')
const { resolve } = require('app-root-path')


const menubarApp = menubar({
  index: isDev ? 'http://localhost:3000' : 'file://' + path.join(__dirname, 'index.html'),
  icon: path.join(__dirname, 'menubarTemplate.png'),
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
  menubarApp.window.on('focus', registerShortcuts);
  menubarApp.window.on('blur', unregisterShortcuts);

  console.log('app is ready')
})
