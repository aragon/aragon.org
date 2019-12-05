import React from 'react'
import styled from 'styled-components'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'
import { breakpoint } from '@aragon/ui'
import { Link } from 'react-static'
import Section from '../General/Section'

const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)

const Hero = () => (
  <HeroSection>
    <TextContainer>
      <h2>
        <FormattedHTMLMessage
          id="discover.hero.title"
          defaultMessage='<span className="black">Take back your</span> freedom to organize'
        />
      </h2>
      <h4>
        <FormattedMessage
          id="discover.hero.content"
          defaultMessage="Discover the unparalleled power to organize. Use Aragon to launch a startup, form a nonprofit, or rally an online community."
        />
      </h4>
      <div className="hero-button-container centered">
        <a
          className="principal-button"
          href="https://mainnet.aragon.org"
          target="_blank"
        >
          <FormattedMessage
            id="discover.hero.action"
            defaultMessage="Try it out"
          />
        </a>
      </div>
    </TextContainer>
  </HeroSection>
)

const HeroSection = styled(Section)`
  background: linear-gradient(270deg, #95bbce, #e7e4f6);
  background-size: 400% 400%;
  -webkit-animation: HeroAnimation 7s ease infinite;
  -moz-animation: HeroAnimation 7s ease infinite;
  animation: HeroAnimation 7s ease infinite;

  height: auto;
  ${medium('height: 550px;')};
  padding-top: 94px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`

const TextContainer = styled.div`
  width: 100%;
  max-width: 663px;
  margin: auto;
  text-align: center;
  h2 .black {
    color: #212b36;
  }
  h4 {
    color: #6d7693;
  }
`
export default Hero
