// This file serves as e middle layer to communicate between the web app and electron's native features
const electron = require("electron");
const { remote } = electron;
const ipcRenderer = electron.ipcRenderer;
const fs = require("fs");
const path = require("path");
const yarnWindow = electron.remote.getCurrentWindow();
const isDev = require("electron-is").dev();
let yarn = null;

const editorFrameEl = document.getElementById("yarn-frame");
window.addEventListener("yarnReady", e => {
  //give the yarn webb app the fs module, so we can ctrl+s in electron without pop ups
  yarn = e;
  yarn.app.fs = fs;
  yarn.app.electron = electron;
  ipcRenderer.send("yarn-ready");
});
editorFrameEl.src = "app/index.html";

window.addEventListener("yarnReadyToLoad", e => {
  yarn = e;
  // Open file on doubleclick on Windows
  if (remote.process.platform === 'win32' && remote.process.argv.length >= 2 && !isDev) {
    let filepath = remote.process.argv[1];
    let filename = path.basename(filepath);
    yarn.app.data.openFileOnStart(filepath, filename);
  } else {
    yarn.app.data.loadAppStateFromLocalStorage();
  }
})

// Called on load yarn data.
window.addEventListener("yarnLoadedData", e => {
  // yarnWindow.setTitle(e.data.editingPath());
});