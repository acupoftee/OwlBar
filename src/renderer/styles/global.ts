import { createGlobalStyle, keyframes } from 'styled-components'
import { colors, fonts } from './theme'
import 'antd-mobile/dist/antd-mobile.css'

const reveal = keyframes`
  0% {
    opacity: 0;
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

/* eslint no-unused-expressions: 0 */
const GlobalStyle = createGlobalStyle`
  #root {
    width: 100%;
    height: 100%;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    height: 100vh;
    background: ${colors.white};
    color: ${colors.black};
    font-family: ${fonts.base};
    font-weight: 300;
    letter-spacing: 0.1px;
  }
  section, div {
    ::-webkit-scrollbar {
      display: none;
    }
  }
  .animateBackToToday {
    animation: ${reveal} 4s 1;
  }
`

export default GlobalStyle
