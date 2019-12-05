import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-static'
import { FormattedMessage } from 'react-intl'
import { breakpoint } from '@aragon/ui'
import Section from '../General/Section'
import SmallCard from '../General/SmallCard'

const medium = css => breakpoint('medium', css)

const About = () => (
  <AboutSection>
    <Container>
      <SmallCard
        linkTo="/project"
        imageUrl={'Home/home-assets/global'}
        title={
          <FormattedMessage
            id="home.about.module1-title"
            defaultMessage="Global by default"
          />
        }
        content={
          <p>
            <FormattedMessage
              id="home.about.module1-description"
              defaultMessage="Collaborate with people all over the world and work toward shared goals. Organize with anyone from anywhere. Send a vote with the same ease as sending an email."
            />
          </p>
        }
      />
      <SmallCard
        linkTo="https://hack.aragon.org/"
        imageUrl={'Home/home-assets/fast'}
        title={
          <FormattedMessage
            id="home.about.module2-title"
            defaultMessage="Fast and easy"
          />
        }
        content={
          <p>
            <FormattedMessage
              id="home.about.module2-description"
              defaultMessage="Create your organization in under five minutes. No paperwork involved. We know one size doesn't fit all, so you can customize your organization to fit your needs."
            />
          </p>
        }
      />
      <SmallCard
        linkTo="/project/contribute"
        imageUrl={'Home/home-assets/truly'}
        title={
          <FormattedMessage
            id="home.about.module3-title"
            defaultMessage="Truly sovereign"
          />
        }
        content={
          <p>
            <FormattedMessage
              id="home.about.module3-description"
              defaultMessage="We believe the freedom to organize is a basic human right. Aragon organizations are sovereign and censorship-resistant. Built on free and open source software."
            />
          </p>
        }
      />
    </Container>
  </AboutSection>
)

const AboutSection = styled(Section)`
  padding: 0 15px 30px 15px;
  ${medium('margin-top: -207px;')};
  z-index: 3;
`
const Container = styled.div`
  display: grid;
  ${medium(
    'grid-template-columns: calc(33.33% - 15px) calc(33.33% - 15px) calc(33.33% - 15px); grid-template-rows: auto'
  )};
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  p.discover {
    font-size: 18px;
    line-height: 19px;
    text-align: center;
    margin-bottom: 15px;
    ${medium('margin-bottom: 35px;')};
    color: #ffffff;
  }
  p {
    min-height: 112px;
  }
  h1 {
    font-family: 'FontLight';
  }
`

export default About
