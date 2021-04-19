const {BrowserWindow} = require("electron");
const {Menu} = require("electron");
const { ipcRenderer, ipcMain } = require('electron')

// document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
//     const isDarkMode = await ipcRenderer.invoke('dark-mode:toggle')
//     document.getElementById('theme-source').innerHTML = isDarkMode ? 'Dark' : 'Light'
// })
//
// document.getElementById('reset-to-system').addEventListener('click', async () => {
//     await ipcRenderer.invoke('dark-mode:system')
//     document.getElementById('theme-source').innerHTML = 'System'
// })
