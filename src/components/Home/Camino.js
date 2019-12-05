import React from 'react'
import styled from 'styled-components'
import { injectIntl, intlShape } from 'react-intl'
import { Link } from 'react-static'
import Section from '../General/Section'
import background from './home-assets/camino.png'
import camino from './home-assets/camino-title.png'

import { breakpoint, BreakPoint, Button } from '@aragon/ui'
const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)

const Camino = ({ ...props }) => (
  <Link
    to={props.intl.locale ? '/' + props.intl.locale + '/camino' : '/camino'}
  >
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

const propTypes = {
  intl: intlShape.isRequired,
}

export default injectIntl(Camino)
