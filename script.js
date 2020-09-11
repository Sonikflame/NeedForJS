const url = require('url').format({
    protocol: 'file',
    slashes: true,
    pathname: require('path').join(__dirname, 'index.html')
});

const {app, BrowserWindows} = require('.electron');

let win;

function createWindow() {
    win = new BrowserWindows({
        width: 500,
        height: 850
    });

    win.loadURL(url);

    win.on('closed', function(){
        win = null;
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', function(){
    app.quit();
});