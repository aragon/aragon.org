import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { Page } from '../components'
import SecondaryNavbar from '../components/Project/SecondaryNavbar'
import ContributeeContent from '../components/Project/ContributeContent'
import Section from '../components/General/Section'
import backgroundImage from '../components/Project/assets/contribute-cover.svg'

const Contribute = () => (
  <Page path="/project/contribute">
    <ContributeSection>
      <Container>
        <h2>
          <FormattedMessage
            id="project.contribute.hero.title"
            defaultMessage="The community awaits you"
          />
        </h2>
        <h4>
          <FormattedMessage
            id="project.contribute.hero.content"
            defaultMessage="  The Aragon community is united towards the same goal: to re-shape the future of organizations."
          />
        </h4>
        <div className="hero-button-container centered">
          <a
            className="principal-button"
            href="https://blog.aragon.org/decentralizing-aragons-development-5062fd6d135d"
            target="_blank"
          >
            <FormattedMessage
              id="project.contribute.hero.action"
              defaultMessage="Read more"
            />
          </a>
        </div>
      </Container>
    </ContributeSection>
    <SecondaryNavbar page="contribute" />
    <ContributeeContent />
  </Page>
)

const ContributeSection = styled(Section)`
  height: 550px;
  background-color: #fbf2e8;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-top: 64px;
  h4 {
    max-width: 584px;
  }
`

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export default Contribute
