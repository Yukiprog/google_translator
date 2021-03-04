const { app, BrowserWindow } = require('electron')

//Google翻訳のURL
var URL = "https://translate.google.co.jp/"

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadURL(URL)
}

//appはエレクトロンの大元プロセスを管理している。
//Electronアプリの初期化処理完了後createWindowファンクションが実行される
app.on('ready', createWindow)

app.on('window-all-closed', () => {
          app.quit()
})
    