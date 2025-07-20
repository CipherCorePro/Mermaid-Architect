
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

const isDev = !app.isPackaged;

function createWindow() {
  const win = new BrowserWindow({
    width: 1600,
    height: 1200,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    },
    title: 'Mermaid Architect AI',
    icon: path.join(__dirname, '../favicon.svg')
  });

  win.loadFile(path.join(__dirname, '../index.html'));

  // For debugging purposes, especially for the blank screen issue,
  // we are opening the DevTools by default.
  // This helps identify any errors in the renderer process.
  // Remove or comment this line out for a final production build.
  win.webContents.openDevTools();

  win.setMenuBarVisibility(false);
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});