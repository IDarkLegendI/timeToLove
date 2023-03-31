const path = require('path')
const url = require('url')
const  {app, BrowserWindow} = require('electron')

function createWindow()
{
    let win = new BrowserWindow
    (
        {
            width: 700,
            height: 500,
            icon: __dirname + "/img/icon.ico",
            show: false,
        }
    )

    win.loadURL(url.format
    (
        {
            pathname: path.join(__dirname, '/cef/index.html'),
            protocol: 'file:',
            slashes: true
        }
    )).then(() => {
        win.setMenu(null);
        win.maximize();
        win.show();
    })


    // win.webContents.openDevTools();
    win.on('closed', () => {
        win = null;
    })
}

app.on('ready', createWindow)