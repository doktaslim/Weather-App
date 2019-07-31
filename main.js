"use strict";

const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

let win;

function createWindow () {
  win = new BrowserWindow({width: 800, height: 600, webPreferences: {nodeIntegration: true}});

  win.loadURL(url.format({
    pathname: path.join(__dirname, './src/index.html'),
    protocol: 'file',
    slashes: true
  }));
  
  win.on('closed', () => {
      win = null;
  });
}

app.on('ready', createWindow);