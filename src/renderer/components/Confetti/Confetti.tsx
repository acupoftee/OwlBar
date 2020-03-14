import React from 'react'
import { default as ReactConfetti } from 'react-confetti'
import {
  getPrimaryColor,
  getSecondaryColor,
  getTertiaryColor,
} from 'owl-colors'
import useWindowSize from 'react-use/lib/useWindowSize'
import LightenDarkenColor from '../../../utils/color'

interface WindowDimensions {
  width: number
  height: number
}

const Confetti = ({ winner }: { winner: string }) => {
  const { width, height }: WindowDimensions = useWindowSize()
  const colors: string[] = [
    getPrimaryColor(winner).hex,
    getSecondaryColor(winner).hex,
    getTertiaryColor(winner).hex,
  ].map(color => LightenDarkenColor(color, 70))

  return (
    <ReactConfetti
      width={width}
      height={height}
      recycle={false}
      colors={colors}
    />
  )
}

export default Confetti
