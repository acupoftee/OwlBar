import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { TabBar, Flex } from 'antd-mobile'

import Layout from '../shared/Layout'
import { colors } from '../../styles/theme'
import calendarWhiteIcon from '../../../resources/calendar_white.svg'
import calendarGreyIcon from '../../../resources/calendar_grey.svg'
import newsWhiteIcon from '../../../resources/news_white.svg'
import newsGreyIcon from '../../../resources/news_grey.svg'
import trophyWhiteIcon from '../../../resources/trophy_white.svg'
import trophyBlackIcon from '../../../resources/trophy_grey.svg'
import settingsWhiteIcon from '../../../resources/settings_white.svg'
import settingsBlackIcon from '../../../resources/settings_grey.svg'

const Content = styled(Flex)`
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 0;
`

const Title = styled.span`
  cursor: pointer;
`

const Icon = styled.div<{
  url: string
}>`
  width: 22px;
  height: 22px;
  background: url(${props => props.url}) center center / 21px 21px no-repeat;
  cursor: pointer;
`

const PageBar = ({
  currentTab,
  children,
}: {
  currentTab: number
  children: React.ReactNode
}) => {
  const history = useHistory()
  return (
    <Layout>
      <TabBar
        tintColor={colors.white}
        barTintColor={colors.black}
        unselectedTintColor={colors.liteGrey}
      >
        <TabBar.Item
          key="Schedule"
          title={((<Title>Schedule</Title>) as any) as string}
          selected={currentTab === 1}
          icon={<Icon url={calendarGreyIcon} />}
          selectedIcon={<Icon url={calendarWhiteIcon} />}
          onPress={() => history.push('/')}
        >
          <Content direction="column">{currentTab === 1 && children}</Content>
        </TabBar.Item>
        <TabBar.Item
          key="Standings"
          title={((<Title>Standings</Title>) as any) as string}
          selected={currentTab === 2}
          icon={<Icon url={trophyBlackIcon} />}
          selectedIcon={<Icon url={trophyWhiteIcon} />}
          onPress={() => history.push('/standings')}
        >
          <Content direction="column">{currentTab === 2 && children}</Content>
        </TabBar.Item>
        <TabBar.Item
          key="News"
          title={((<Title>News</Title>) as any) as string}
          selected={currentTab === 3}
          icon={<Icon url={newsGreyIcon} />}
          selectedIcon={<Icon url={newsWhiteIcon} />}
          onPress={() => {}}
        >
          <Content direction="column">{currentTab === 3 && children}</Content>
        </TabBar.Item>
        <TabBar.Item
          key="Settings"
          title={((<Title>Settings</Title>) as any) as string}
          selected={currentTab === 4}
          icon={<Icon url={settingsBlackIcon} />}
          selectedIcon={<Icon url={settingsWhiteIcon} />}
          onPress={() => history.push('/settings')}
        >
          <Content direction="column">{currentTab === 4 && children}</Content>
        </TabBar.Item>
      </TabBar>
    </Layout>
  )
}

PageBar.defaultProps = {
  children: <Fragment />,
}

export default PageBar
 