const { app, BrowserWindow } = require('electron')
// const { menubar } = require('menubar')
const path = require('path')
const isDev = require('electron-is-dev')

let win

function createWindow () {
  win = new BrowserWindow({
    width: 300,
    height: 465,
    resizable: false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`)

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

// const menubarApp = menubar({
//   browserWindow: {
//     alwaysOnTop: isDev,
//     minWidth: 300,
//     maxWidth: isDev ? undefined : 300,
//     minHeight: 465,
//     maxHeight: isDev ? undefined : 465,
//     resizable: isDev,
//     movable: false,
//     webPreferences: {
//       webSecurity: false
//     }
//   },
//   preloadWindow: true
// })

// menubarApp.on('ready', async () => {
//   menubarApp.window.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`)
//   console.log('app is ready')
// })
