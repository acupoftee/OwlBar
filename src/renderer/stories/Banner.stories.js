import React from 'react'
import { storiesOf } from '@storybook/react'
import Banner from '../components/Schedule/Banner'

storiesOf('Schedule Banner', module).add('default', () => (
  <Banner
    bannerBackground="https://images.blz-contentstack.com/v3/assets/blt321317473c90505c/blt92a006bff1886632/5dd860d569af1649167dec49/NYE_Banner_Skyline.png"
    bannerLogo="https://images.blz-contentstack.com/v3/assets/blt321317473c90505c/blt4181aa67c8c5847c/5dd8612369af1649167dec4f/weekends2-535x488.png"
    host="NYE"
    location="Hammerstein Ballroom"
  />
))
