import React from 'react'
import {
  styled,
  styledCss as css,
  Section,
  Text,
  font,
  theme,
  breakpoint,
} from '@aragon/ui'

import tokens from './assets/tokens.png'
import background from './assets/background.svg'

const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  pointer-events: none;
  margin-top: calc(-200px + 5%);
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: cover;
`

const Main = styled(Section)`
  padding: 200px 15px 50px;
  text-align: center;

  ${medium(css`
    margin-top: calc(-240px + 5%);
    padding-top: calc(200px + 5%);
  `)};

  h1 {
    font-size: 25px;
    font-weight: 400;
    margin-bottom: 50px;
  }
  img {
    max-width: calc(100% - 30px);
    margin-bottom: -5px;
  }
  ${medium(`
    font-size: 37px;
    img {
      max-width: 750px;
    }
  `)};
`

const Tokens = () => (
  <Wrapper>
    <Main>
      <div>
        <Text heading="1" color={theme.gradientText}>
          Managing your organization has never been easier
        </Text>
      </div>
      <img src={tokens} alt="" />
    </Main>
  </Wrapper>
)

export default Tokens
