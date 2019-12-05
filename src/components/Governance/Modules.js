import React from 'react'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'
import { breakpoint } from '@aragon/ui'
import styled from 'styled-components'
import Section from '../General/Section'
import Card from '../General/Card'
import buy from './assets/learn-about-ant.svg'
import proposal from './assets/proposal.svg'

const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)

const About = () => (
  <ModulesSection>
    <Container>
      <Card
        imageUrl={'Governance/assets/proposal'}
        title={
          <FormattedMessage
            id="project.governance.module1.title"
            defaultMessage="Create your proposal"
          />
        }
        content={
          <span>
            <p>
              <FormattedMessage
                id="project.governance.module1.content"
                defaultMessage="Do you have an idea for how to improve Aragon? Create an Aragon Governance Proposal and share your idea with the community."
              />
            </p>
            <div className="hero-button-container centered">
              <a
                className="principal-button"
                href="https://forum.aragon.org/t/how-to-create-an-aragon-governance-proposal/374"
                target="_blank"
              >
                <FormattedMessage
                  id="project.governance.module1.action"
                  defaultMessage="Create Proposal"
                />
              </a>
            </div>
          </span>
        }
      />
      <Card
        imageUrl={'Governance/assets/learn-about-ant'}
        title={
          <FormattedHTMLMessage
            id="project.governance.module2.title"
            defaultMessage="<span>Learn about <br />ANT</span>"
          />
        }
        content={
          <span>
            <p>
              <FormattedMessage
                id="project.governance.module2.content"
                defaultMessage="The Aragon Network Token (ANT) is used to govern the Aragon Network. The quickest way to acquire ANT is to buy some on an exchange."
              />
            </p>
            <div className="hero-button-container centered">
              <a
                className="principal-button"
                href="https://wiki.aragon.org/documentation/aragon_network_token/#trade-ant"
                target="_blank"
              >
                <FormattedMessage
                  id="project.governance.module2.action"
                  defaultMessage="Learn More"
                />
              </a>
            </div>
          </span>
        }
      />
    </Container>
  </ModulesSection>
)

const ModulesSection = styled(Section)`
  padding: 90px 15px;
`

const Container = styled.div`
  display: grid;
  ${medium(
    'grid-template-columns: calc(50% - 15px) calc(50% - 15px); grid-template-rows: 650px'
  )};
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
`

const Box = styled.div`
  border-radius: 12px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.07);
  background-color: #f9fafc;
  transition: all 0.25s ease-in-out;
  div {
    padding: 0 30px;
    ${medium('padding: 25px 15px;')};
    ${large('padding: 25px 60px;')};
  }
  a {
    margin-bottom: 30px;
    ${medium('margin-bottom: auto;')};
  }
  @media (min-width: 768px) {
    height: 700px;
  }
  ${medium('height: 600px;;')};
  ${large('height: 700px;')};
  img {
    height: auto;
    overflow: hidden;
  }
  p {
    color: #7f8198;
    text-align: left;
  }
  h1 {
    font-family: 'FontLight', sans-serif;
    font-size: 30px;
    width: inherit;
    ${medium('font-size: 36px; width: 100%;')};
    ${large('width: inherit; font-size: 44px; line-height: 2;')};
    font-weight: 300;
    line-height: 1.2 !important;
    text-align: left;
    color: #2d4051;
    margin: 15px 0 0 0;
  }
  &:hover {
    box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.07);
  }
`

export default About
