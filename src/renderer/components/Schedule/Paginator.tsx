import React from 'react'
import styled, { css } from 'styled-components'
import { Flex, Icon } from 'antd-mobile'

import { colors } from '../../styles/theme'

const Wrapper = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 30px;
  padding: 4px 7px;
  background-color: ${colors.black};
  color: ${colors.white};
`

const Button = styled(Icon)<{
  disabled?: boolean
}>`
  cursor: pointer;
  ${props =>
    props.disabled &&
    css`
      pointer-events: none;
      color: ${colors.liteGrey};
    `}
`

const Item = styled(Flex.Item)`
  margin-left: 0;
  text-align: center;
`

const Text = styled.p`
  font-size: 15px;
`

const Paginator = ({
  text,
  nextPage,
  prevPage,
  disableNext,
  disablePrev,
}: {
  text: string
  nextPage: () => void
  prevPage: () => void
  disableNext?: boolean
  disablePrev?: boolean
}) => (
  <Wrapper>
    <Flex>
      <Button type="left" onClick={prevPage} disabled={disablePrev} />
      <Item>
        <Text>{text}</Text>
      </Item>
      <Button type="right" onClick={nextPage} disabled={disableNext} />
    </Flex>
  </Wrapper>
)

export default Paginator
