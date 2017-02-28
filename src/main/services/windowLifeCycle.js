import { ipcMain, BrowserWindow }      from 'electron'
import * as EVENTS                     from '../../shared/events'
import createMainWindow                from '../windows/main'

const windowLifeCycle = (globalWin) => {
  // handle close window events
  ipcMain.on(EVENTS.CLOSE_LOGIN, (event, arg) => {
    let window = BrowserWindow.getFocusedWindow()
    window.close()
  })

  // user logged in -> close login window and open main window
  ipcMain.on(EVENTS.SHOW_MAIN_WIN_AND_CLOSE_LOGIN_WIN, (event, credentials) => {
    createMainWindow(globalWin)
    globalWin.login.close()
    // globalWin.login = null // not need
  })
}

export default windowLifeCycle
