import React from 'react'
import styled from 'styled-components'
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl'
import { Page } from '../components'
import SecondaryNavbar from '../components/Project/SecondaryNavbar'
import backgroundImage from '../components/Project/assets/grants-background.svg'
import GrantseContent from '../components/Project/GrantsContent'
import GrantsQuotes from '../components/Project/GrantsQuotes'
import Section from '../components/General/Section'

const Grants = () => (
  <Page path="/project/grants">
    <GrantsSection>
      <Container>
        <h2>
          <FormattedMessage
            id="project.grants.hero.title"
            defaultMessage="Aragon Nest"
          />
        </h2>
        <h4>
          <FormattedHTMLMessage
            id="project.grants.hero.content"
            defaultMessage="Aragon is re-inventing the future of organizations. But we cannot do it alone. Nest was born to help the ecosystem flourish."
          />
        </h4>
        <div className="hero-button-container centered">
          <a
            className="principal-button"
            href="https://github.com/aragon/nest#how-to-submit-a-proposal-for-a-grant"
            target="_blank"
          >
            <FormattedMessage
              id="project.grants.hero.action"
              defaultMessage="Apply"
            />
          </a>
        </div>
      </Container>
    </GrantsSection>
    <SecondaryNavbar page="grants" />
    <GrantseContent />
    <GrantsQuotes />
  </Page>
)

const GrantsSection = styled(Section)`
  height: 550px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-top:64px;
`

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export default Grants
