import React from 'react'
import { styled, IllustratedSection } from '@aragon/ui'
import OverlapBackground from '../../OverlapBackground/OverlapBackground'

import illustration from './assets/illustration.svg'

const { Illustration, Subtitle, Emphasis, Content } = IllustratedSection

const StyledOverlapBackground = styled(OverlapBackground)`
  padding-top: 80px;
`

const Intro = () => (
  <StyledOverlapBackground>
    <IllustratedSection>
      <Subtitle dark>
        <p>Heart of the early development</p>
      </Subtitle>
      <Content dark>
        <p>
          The Aragon Foundation is a non-profit organization which was created
          to nurture the project in it's early phases
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
    </IllustratedSection>
  </StyledOverlapBackground>
)

export default Intro
