const { ipcRenderer } = require("electron");

document.addEventListener("DOMContentLoaded", () => {
    const version = process.version;
    const e = document.getElementById("info");
    e.textContent = `I'm running Node.js version: ${version}`;

    const btn = document.getElementById("clickme");
    btn.addEventListener("click", e => {
        console.log("I was clicked.");
        ipcRenderer.send("show-dialog", {message: "The button was clicked"});
    });
});

ipcRenderer.on("dialog-opened", (event, msg) => {
    console.log(msg);
    var retVal = ipcRenderer.sendSync('synchronous-message', 'ping');
    console.log(retVal);
});