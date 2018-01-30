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
        <p>Upgradeability, permissions and governance, all taken care of</p>
      </Subtitle>
      <Content dark>
        <p>
          aragonOS' architecture can be used by any complex DApp or 
          protocol and it allows extendability with the ability to plug in any 
          Aragon governance module
        </p>
        <p>
          Using aragonOS will always be free and it doesn’t require any tokens whatsoever
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
