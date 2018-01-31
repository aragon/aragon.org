import React from 'react'
import { styled, IllustratedSection } from '@aragon/ui'
import OverlapBackground from '../../OverlapBackground/OverlapBackground'

import code from './assets/code.png'

const { Illustration, Subtitle, Emphasis, Content } = IllustratedSection

const StyledOverlapBackground = styled(OverlapBackground)`
  padding-top: 80px;
  img {
    min-width: 512px;
  }
`

const Snippet = () => (
  <StyledOverlapBackground>
    <IllustratedSection>
      <Subtitle dark>
        <p>Upgradeability,<br />
        access control and governance.<br />
        All taken care of</p>
      </Subtitle>
      <Content dark>
        <p>
          The architecture of aragonOS can be used by any complex DApp or
          protocol. It enables extendability with the capability to plug in any
          Aragon governance module
        </p>
        <p>
          Using aragonOS is independent of any tokens and will always be free
        </p>
      </Content>
      <Emphasis dark>
        <p>
          aragonOS is a smart contract development framework with a very strong focus
          on governance and upgradeability
        </p>
      </Emphasis>
      <Illustration>
        <img src={code} alt="" />
      </Illustration>
    </IllustratedSection>
  </StyledOverlapBackground>
)

export default Snippet
