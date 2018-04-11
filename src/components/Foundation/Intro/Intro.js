import React from 'react'
import styled from 'styled-components'
import { breakpoint } from '@aragon/ui'
import { IllustratedSection } from '@aragon/web'
import OverlapBackground from '../../OverlapBackground/OverlapBackground'

import illustration from './assets/illustration.svg'

const { Illustration, Subtitle, Emphasis, Content } = IllustratedSection

const StyledOverlapBackground = styled(OverlapBackground)``

const StyledIllustratedSection = styled(IllustratedSection)`
  padding-top: 0;
  padding-bottom: 70px;
  ${breakpoint('large', 'padding-top: 0;')};
`

const Intro = () => (
  <StyledOverlapBackground>
    <StyledIllustratedSection>
      <Subtitle dark>
        <p>Heart of the early development</p>
      </Subtitle>
      <Content dark>
        <p>
          The Aragon Foundation is a non-profit organization which was created
          to nurture the project in its early phases
        </p>
        <p>
          Developing the platform and project towards maturity is the main duty
          of the Foundation. Other activities include motivating external
          developers to build more functionality and applications on Aragon to
          boost adoption of the technology
        </p>
      </Content>
      <Emphasis dark>
        <p>
          The Aragon Foundation is laying down the first bricks on the road to
          what will become
        </p>
      </Emphasis>
      <Illustration>
        <img src={illustration} alt="" />
      </Illustration>
    </StyledIllustratedSection>
  </StyledOverlapBackground>
)

export default Intro
