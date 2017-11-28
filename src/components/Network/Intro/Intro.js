import React from 'react'
import { styled, breakpoint, IllustratedSection } from '@aragon/ui'
import OverlapBackground from '../../OverlapBackground/OverlapBackground'

import illustration from './assets/illustration.svg'

const { Illustration, Subtitle, Emphasis, Content } = IllustratedSection

const medium = css => breakpoint('medium', css)

const StyledIllustratedSection = styled(IllustratedSection)`
  padding-top: 0;
  padding-bottom: 0;
`

const Intro = () => (
  <OverlapBackground>
    <StyledIllustratedSection>
      <Subtitle dark>
        <p>Putting the power back into the hands of the users</p>
      </Subtitle>
      <Emphasis dark>
        <p>
          The Aragon Network will decentralize its governance by gradually
          handing over control of the project to the users
        </p>
      </Emphasis>
      <Content dark>
        <p>
          The Aragon Network will establish additional services for the
          organizations taking advantage of what Aragon Core provides
        </p>
        <p>
          Our mission is to make the Aragon Network an autonomous organization
          itself, which is managed by the people using it for their mutual
          prosperity
        </p>
      </Content>
      <Illustration>
        <img src={illustration} alt="" />
      </Illustration>
    </StyledIllustratedSection>
  </OverlapBackground>
)

export default Intro
