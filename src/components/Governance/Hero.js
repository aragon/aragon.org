import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import Section from '../General/Section'
import background from './assets/governance-cover.svg'

const Hero = () => (
  <HeroSection>
    <Container>
      <h2>
        <FormattedMessage
          id="project.governance.hero.title"
          defaultMessage="Governance"
        />
      </h2>
      <h4>
        <FormattedMessage
          id="project.governance.hero.content1"
          defaultMessage="Aragon exists to empower people, starting with our own community."
        />

        <br />
        <FormattedMessage
          id="project.governance.hero.content2"
          defaultMessage="The project is community-governed, and we are committed to decentralizing control."
        />
      </h4>
      <div className="hero-button-container centered">
        <a
          className="principal-button"
          href="https://blog.aragon.org/the-aragon-manifesto-4a21212eac03/"
          target="_blank"
        >
          <FormattedMessage
            id="project.governance.hero.action"
            defaultMessage="Manifesto"
          />
        </a>
      </div>
    </Container>
  </HeroSection>
)

const HeroSection = styled(Section)`
  height: 550px;
  background: #f9eddf;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-top: 64px;
`

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export default Hero
