const { app, BrowserWindow } = require('electron')
const { format } = require('url')
const { menubar } = require('menubar')
const path = require('path')
const isDev = require('electron-is-dev')
const { resolve } = require('app-root-path')


// let win

// function createWindow() {
//   win = new BrowserWindow({
//     icon: path.join(app.getAppPath(), 'resources/logo.png'),
//     width: 300,
//     height: 465,
//     resizable: false,
//     webPreferences: {
//       nodeIntegration: true
//     }
//   })

//   win.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`)

//   win.on('closed', () => {
//     win = null
//   })
// }

// app.on('ready', createWindow)

// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') {
//     app.quit()
//   }
// })

// app.on('activate', () => {
//   if (win === null) {
//     createWindow()
//   }
// })


const menubarApp = menubar({
  icon: path.join(app.getAppPath(), 'resources/logo.png'),
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
  const prodPath = format({
    pathname: path.join(__dirname, 'build/index.html'),
    protocol: 'file:',
    slashes: true,
  });
  menubarApp.window.loadURL(isDev ? 'http://localhost:3000' : prodPath)
  console.log('app is ready')
})
