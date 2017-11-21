import React from 'react'
import { styled } from '@aragon/ui'
import { IllustratedSection, themeDark } from '@aragon/ui'

import illustration from './assets/illustration.svg'
import background from './assets/background.svg'

const { Illustration, Subtitle, Emphasis, Content } = IllustratedSection

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  margin-top: 200px;
`

const Main = styled(IllustratedSection)`
  margin-top: calc(-200px - 235px);
  padding-top: 235px;
  padding-bottom: 140px;
  background-image: url(${background});
  background-repeat: no-repeat
  background-position: 50% 0;
  background-size: cover;
`

const WhyAragon = () => (
  <Wrapper>
    <Main>
      <Subtitle dark>
        <p>Goal: to make itself useless</p>
      </Subtitle>
      <Content dark>
        <p>
        An Estonian non-profit was created in order to nurture the project and help in its governance.
        </p>
        <p>
        However, in our mission to disintermediate governance, we want to disintermediate Aragon's own governance.
        </p>
      </Content>
      <Emphasis dark>
        <p>
          The <a href="/network">Aragon Network</a> will eventually take the governance of the project, making any central entity irrelevant for the project.
        </p>
      </Emphasis>
      <Illustration>
        <img src={illustration} alt="" />
      </Illustration>
    </Main>
  </Wrapper>
)

export default WhyAragon
