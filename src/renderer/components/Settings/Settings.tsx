import React from 'react'
import styled from 'styled-components'
import { Flex, List } from 'antd-mobile'

const Wrapper = styled(Flex)`
  width: 100vw;
  height: 100%;
  justify-content: start;
  margin-top: 0;
`
const SettingsList = styled(List)`
  width: 100%;
`
const SettingsItem = styled(List.Item)`
  cursor: pointer;
`

const Settings = ({
  openExternal,
  quit,
}: {
  openExternal: (url: string) => () => void
  quit: () => void
}) => (
  <Wrapper>
    <SettingsList>
      <SettingsItem
        onClick={openExternal('https://github.com/acupoftee/OwlBar')}
      >
        About OWL Bar
      </SettingsItem>
      <SettingsItem
        onClick={openExternal('https://github.com/acupoftee/OwlBar/issues')}
      >
        Report issues
      </SettingsItem>
      <SettingsItem extra="⌘Q" onClick={quit}>
        Quit OWL Bar
      </SettingsItem>
    </SettingsList>
  </Wrapper>
)

export default Settings
