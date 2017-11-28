import React from 'react'
import { styled } from '@aragon/ui'
import { IllustratedSection } from '@aragon/ui'
import illustration from './assets/illustration.svg'

const { Illustration, Title, Subtitle, Emphasis, Content } = IllustratedSection

const Main = styled(IllustratedSection)`
  padding-top: 50px;
  padding-bottom: 50px;
  background: #fff;

  h1 {
    margin-bottom: 10px;
  }
`

const AragonNetwork = () => (
  <Main>
    <Illustration>
      <img src={illustration} alt="" />
    </Illustration>
    <Title>
      <h1>Imagine a nation without land and borders</h1>
    </Title>
    <Subtitle>
      <p>A digital jurisdiction</p>
    </Subtitle>
    <Emphasis>
      <p>
        Aragon Network will be the first community governed decentralized organization whose goal is to act as a digital jurisdiction, an online decentralized court system that isn’t bound by traditional artificial barriers such as national jurisdictions or the borders of a single country
      </p>
    </Emphasis>
    <Content>
      <p>
        Aragon organizations can be upgraded seamlessly using our AragonOS architecture. They can solve disputes between two parties by using the decentralized court system, a digital jurisdiction that operates only online and utilizes your peers to resolve issues
      </p>
      <p>
        The Aragon Network Token, ANT, puts the power into the hands of the people participating in the operation of the Network. Every single aspect of the Network will be governed by those willing to make an effort for a better future
      </p>
    </Content>
  </Main>
)

export default AragonNetwork
