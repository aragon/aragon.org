import React from 'react'
import styled from 'styled-components'
import Section from '../General/Section'
import { Link } from 'react-static'
import background from './home-assets/camino.png'
import camino from './home-assets/camino-title.png'

import { breakpoint, BreakPoint, Button } from '@aragon/ui'
const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)

const Camino = () => (
  <Link to="camino">
    <CaminoSection>
      <img src={camino} />
    </CaminoSection>
  </Link>
)

const CaminoSection = styled(Section)`
  background-image: url(${background});
  height: 300px;
  ${medium('height: 600px;')}
  padding-top: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  .container {
    text-align: center;
  }
  img {
    margin: auto;
    max-width: 90%;
    ${medium('max-width: 750px;')}
    margin-bottom: 25px;
  }
`

export default Camino
