import React from 'react'
import PropTypes from 'prop-types'
import { Flex } from 'antd-mobile'
import { Table as VirtualizedTable } from 'react-virtualized'
import styled from 'styled-components'

const Wrapper = styled(Flex)`
  display: flex;
  width: 100%;
  height: 100%;
  overflow-y: scroll !important;
`
const HeaderCell = styled.div`
  width: ${props => props.width}px;
  display: inline-block;
  padding: 6px 14px;
  background-color: #4A4C4E;
  color: #FFF;
  font-weight: 600;
  text-align: center;
  text-transform: capitalize;
  z-index: 2;
`
const Cell = styled.div`
  display: inline-block;
  width: ${props => props.width}px;
  padding: 6px 14px;
  border-bottom: 2px solid #f3f3f3;
  text-align: ${props => props.align || 'center'};
  background-color: ${props => props.backgroundColor || 'transparent'};
`

const TeamLogo = styled.img`
  width: 18px;
  height: auto;
  padding-right: 10px;
  vertical-align: middle;
`

const headerRowRenderer = ({ className, style }) => (
  <Flex className={className} style={style}>
    <HeaderCell key='team' width='75'>
      teams
    </HeaderCell>
    <HeaderCell key='division' width='40'>
      DIV
    </HeaderCell>
    <HeaderCell key='win' width='35'>
      w
    </HeaderCell>
    <HeaderCell key='loss' width='35'>
      l
    </HeaderCell>
  </Flex>
)

headerRowRenderer.propTypes = {
  className: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired
}

const getLogo = rowData => {
  let logo
  if (rowData.abbreviatedName === 'HZS') {
    logo = rowData.logo.alt.svg
  } else if (rowData.abbreviatedName === 'ATL') {
    logo = rowData.logo.main.svg
  } else {
    logo = rowData.logo.altDark ? rowData.logo.altDark.svg : rowData.logo.main.svg
  }
  return logo;
}

const rowRenderer = ({ rowData, style }) => (
  <Flex key={rowData.id} style={style}>
    <Cell
      key='name'
      align='left'
      style={{
        color: '#fff',
        fontWeight: 700,
      }}
      width='75'
      backgroundColor={rowData.colors.primary.color}
    >
      <TeamLogo src={getLogo(rowData)} />
      {rowData.abbreviatedName}
    </Cell>
    <Cell
      key='division'
      width='40'
      style={{
        color: 'gray',
        fontWeight: 500
      }}
    >
      {rowData.divisionId === 80 ? 'PAC' : 'ATL'}
    </Cell>
    <Cell key='win' width='35'>
      {rowData.league.matchWin}
    </Cell>
    <Cell key='loss' width='35'>
      {rowData.league.matchLoss}
    </Cell>
  </Flex>
)

rowRenderer.propTypes = {
  teamData: PropTypes.object.isRequired
}

const standingsTable = teams => (
  <VirtualizedTable
    width={300}
    height={465}
    headerHeight={32}
    rowHeight={35}
    rowCount={teams.data.length}
    rowGetter={({ index }) => teams.data[index]}
    headerRowRenderer={headerRowRenderer}
    rowRenderer={rowRenderer}
  />
)

const StandingsTable = teams => {
  return (
    <Wrapper direction='column' align='center'>
      {standingsTable(teams.data)}
    </Wrapper>
  )
}

export default StandingsTable
