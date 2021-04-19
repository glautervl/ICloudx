const { app, BrowserWindow, BrowserView, Menu, remote } = require('electron')

// Building context menu
let template = [
  {
    label: 'Undo',
    role: 'undo',
  }, {
    label: 'Redo',
    role: 'redo',
  }, {
    type: 'separator',
  }, {
    label: 'Cut',
    role: 'cut',
  }, {
    label: 'Copy',
    role: 'copy',
  }, {
    label: 'Paste',
    role: 'paste',
  }, {
    type: 'separator',
  }, {
    label: 'Select all',
    role: 'selectall',
  }
];
let contextMenu = Menu.buildFromTemplate(template);

function initializeApp(){

  const width = 960;
  const height = 600;

  /**
   * BorwserWindow Settings
   * @type {Electron.BrowserWindow}
   */
  const win = new BrowserWindow({
    show: true,
    width: width,
    height: height,
    webPreferences: {
      spellcheck: true
    }
  });

  /**
   * BrowserView Settings
   * @type {Electron.BrowserView}
   */
  const view = new BrowserView();
  view.webContents.on('context-menu', () => {
    contextMenu.popup();
  });
  win.setBrowserView(view);
  win.removeMenu();

  view.setBounds({ x: 0, y: 0, width: win.getContentBounds().width, height: win.getContentBounds().height });

  view.setAutoResize({
    horizontal: true,
    vertical: true
  });
  view.webContents.loadURL('https://www.icloud.com/notes');

  win.on('move',(e) =>{
    view.setBounds({ x: 0, y: 0, width: win.getContentBounds().width, height: win.getContentBounds().height });
  });
}

app.whenReady().then(initializeApp);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    initializeApp();
  }
})


