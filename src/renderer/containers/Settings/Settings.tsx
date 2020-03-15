import React from 'react'
import { Settings } from '../../components/Settings'
import { PageBar } from '../../components/TabBar'

const electron = window.require('electron')

const SettingsPage = () => (
  <PageBar currentTab={4}>
    <Settings
      quit={() => electron.remote.app.quit()}
      openExternal={(url: string) => () => {
        electron.remote.app.hide()
        electron.shell.openExternal(url)
      }}
    />
  </PageBar>
)

export default SettingsPage
