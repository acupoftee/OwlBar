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
  color?: string
}>`
  cursor: pointer;
  ${props => props.color && `color: ${props.color}`}

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

const BackToSchdule = ({ text, back }: { text: string; back: () => void }) => (
  <Wrapper>
    <Flex>
      <Button type="left" onClick={back} />
      <Item>
        <Text>{text}</Text>
      </Item>
      <Button type="right" color={colors.black} onClick={() => {}} />
    </Flex>
  </Wrapper>
)

export default BackToSchdule
