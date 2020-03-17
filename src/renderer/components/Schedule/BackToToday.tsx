import React from 'react'
import styled from 'styled-components'

const Button = styled.div`
  padding: 10px;
  font-weight: 800;
  color: white;
  font-size: 11px;
  text-transform: uppercase;
  font-style: italic;
  z-index: 999;
  border-radius: 100px;
  background: linear-gradient(to top, #ffd200, #f7971e);
  position: absolute;
  left: 30%;
  top: 90%;
  transition: transform 0.2s ease, opacity 0.5s ease;

  &:hover {
    cursor: default;
    transform: scale(1.02);
  }
`

const BackToToday = ({ backFunction }: { backFunction: () => void }) => (
  <Button className="backToToday animateBackToToday" onClick={backFunction}>
    Back To Today
  </Button>
)

export default BackToToday
