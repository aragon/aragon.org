import React from 'react'
import { FormattedMessage } from 'react-intl'
import { breakpoint } from '@aragon/ui'
import styled from 'styled-components'
import Section from '../General/Section'
import Card from '../General/Card'

const medium = css => breakpoint('medium', css)

const mudule1Content = (
  <span>
    <p>
      <FormattedMessage
        id="network.about.module1.content"
        defaultMessage="A parallel, global system of law that enables trustful interactions between individuals and organizations"
      />
    </p>
    <p>
      <a
        className="action-button"
        href="https://blog.aragon.org/the-aragon-manifesto-4a21212eac03/"
        target="_blank"
      >
        <span>
          <FormattedMessage
            id="network.about.module1.action"
            defaultMessage="Read manifesto"
          />
          <img src={require(`../General/assets/arrow.svg`)} />
        </span>
      </a>
    </p>
  </span>
)
const mudule2Content = (
  <span>
    <p>
      <FormattedMessage
        id="network.about.module2.content"
        defaultMessage="Hold ANT to have a stake in the value of the Aragon Network"
      />
    </p>
    <p>
      <a
        className="action-button"
        href="https://coinmarketcap.com/currencies/aragon/"
        target="_blank"
      >
        <span>
          <FormattedMessage
            id="network.about.module.action"
            defaultMessage="Buy ANT"
          />{' '}
          <img src={require(`../General/assets/arrow.svg`)} />
        </span>
      </a>
    </p>
  </span>
)
const About = () => (
  <AboutSection>
    <Container>
      <Card
        linkTo="https://github.com/aragon/nest"
        imageUrl={'Network/assets/network1'}
        title={
          <FormattedMessage
            id="network.about.module1.title"
            defaultMessage="What’s a digital jurisdiction?"
          />
        }
        content={mudule1Content}
        className="transparent"
      />
      <Card
        linkTo="https://github.com/aragon/nest#how-to-submit-a-proposal-for-a-grant"
        imageUrl={'Network/assets/network2'}
        title={
          <FormattedMessage
            id="network.about.module2.title"
            defaultMessage="Aragon Network's native asset"
          />
        }
        content={mudule2Content}
        className="apply-card"
      />
    </Container>
  </AboutSection>
)

const AboutSection = styled(Section)`
  padding: 30px 15px 90px 15px;
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
  img {
    width: 242px;
  }
  span img {
    width: auto;
  }
  .team-box {
    display: flex;
    span {
      margin-right: 50px;
    }
  }
  .contribute1 .principal-image {
    width: 242px;
    height: auto;
  }
  .contribute2 .principal-image {
    width: 187px;
    height: auto;
  }
`
export default About
