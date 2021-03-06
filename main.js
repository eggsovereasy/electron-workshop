"use strict";

const menus = require("./menu");
const electron = require("electron");
const path = require('path');
const reload = require('electron-reload');
const isDev = require('electron-is-dev');
const { app, BrowserWindow, ipcMain, dialog } = electron;

let mainWindow = null;

if (isDev) {
    const electronPath = path.join(__dirname, "node_modules", ".bin", "electron");
    reload(__dirname, { electron: electronPath });
}

app.on("window-all-closed", () => {
    if (process.platform !== 'darwin') {
        app.quit();  // quite
    }
});

app.on("ready", () => {
    mainWindow = new BrowserWindow({width: 800, height: 600});
    menus.buildMenu();
    mainWindow.loadURL(`file://${__dirname}/dadjokes.html`);
    if (isDev) {
        mainWindow.webContents.openDevTools();
    }
    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
    })
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});

ipcMain.on("show-dialog", (e, arg) => {
    const msgInfo = {
        title: "My App Alert",
        message: arg.message,
        buttons: ["OK"]
    };
    dialog.showMessageBox(msgInfo);
    e.sender.send('dialog-opened', 'it got opened');
})

ipcMain.on('synchronous-message', (event, arg) => {
    console.log(arg);
    event.returnValue = 'pong';
})