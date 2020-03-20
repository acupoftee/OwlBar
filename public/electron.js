const { app, BrowserWindow, Menu } = require('electron')
const { format } = require('url')
const { menubar } = require('menubar')
const path = require('path')
const isDev = require('electron-is-dev')
const { autoUpdater } = require('electron-updater');

const { resolve } = require('app-root-path')

const createAboutWindow = () => {
  const aboutWindow = new BrowserWindow({
    title: 'About',
    y: 0,
    width: 285,
    height: 165,
    backgroundColor: '#f7f7f7',
    show: false,
    resizable: isDev,
    minimizable: false,
    maximizable: false,
    fullscreenable: false,
  });

  const html = `
  <body style="margin: 0; padding: 20px; text-align: center; color: #32292F; font-family: sans-serif;">
    <h3>Overwatch League Bar</h3>
    <p style="margin: 10px; font-size: 12px;">Version ${app.getVersion()}</p>
    <p style="margin: 10px; font-size: 12px;">Copyright © 2020 Cybercountess Technologies</p>
  </body>`;

  aboutWindow.loadURL(`data:text/html;charset=utf-8, ${encodeURI(html)}`);
  aboutWindow.on('close', e => {
    aboutWindow.hide();

    e.preventDefault();
  });

  return aboutWindow;
};

let aboutWindow;

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
  console.log('app is ready')
})

menubarApp.on('after-create-window', () => {
  aboutWindow = createAboutWindow();

  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'About Overwatch League Bar',
      click: () => aboutWindow.show(),
    },
    {
      type: 'separator',
    },
    {
      label: 'Check for Updates…',
      click: item => {
        // eslint-disable-next-line no-param-reassign
        item.enabled = false;

        if (!isDev) {
          autoUpdater.checkForUpdates();
        } else {
          console.log('autoUpdater is only available in production');
        }
      },
    },
    {
      type: 'separator',
    },
    {
      label: 'Contribute',
      click: () => shell.openExternal('https://github.com/xxhomey19/OwlBar'),
    },
    {
      type: 'separator',
    },
    {
      role: 'quit',
      accelerator: 'Cmd+Q',
    },
  ]);

  menubarApp.tray.on('right-click', () => {
    menubarApp.tray.popUpContextMenu(contextMenu);
  });
});

menubarApp.app.on('before-quit', () => {
  aboutWindow.removeAllListeners('close');
  aboutWindow.close();
});

autoUpdater.on('error', error => {
  dialog.showErrorBox(
    'Update Failed: ',
    error == null ? 'unknown' : (error.stack || error).toString()
  );
});

autoUpdater.on('update-not-available', () => {
  new Notification({
    title: 'No updates available!',
    body: `You are running the latest version of ${menubarApp.app.getName()} 🎉`,
  }).show();
});

autoUpdater.on('update-downloaded', () => {
  const message =
    'It will be installed the next time you restart the application.';

  dialog.showMessageBox(
    {
      type: 'question',
      buttons: ['Install and Relaunch', 'Later'],
      defaultId: 0,
      message: `An update for ${app.getName()} is available 🎉`,
      detail: message,
    },
    response => {
      if (response === 0) {
        setImmediate(() => {
          menubarApp.app.removeAllListeners('window-all-closed');

          autoUpdater.quitAndInstall(false);
          menubarApp.app.quit();
        });
      }
    }
  );
});
