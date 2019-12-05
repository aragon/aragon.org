import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-static'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'
import { breakpoint } from '@aragon/ui'
import Section from '../General/Section'
import LongCard from '../General/LongCard'
import Card from '../General/Card'
import DividedSection from '../General/DividedSection'
import universe from './assets/universe-of-apps.svg'

const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)

const mudule1Content = (
  <p>
    <FormattedMessage
      id="discover.product.module1.content"
      defaultMessage="Creating a democratic organization is as easy as selecting the Membership template. Votes are secure and tamper-proof. You can now empower entire communities."
    />
  </p>
)
const mudule2Content = (
  <p>
    <FormattedMessage
      id="discover.product.module2.content"
      defaultMessage="No need to go through a huge stack of paper to figure out what’s going on. With Aragon, people in your organization can easily view the finances and other important data."
    />
  </p>
)

const About = () => (
  <ProductFeatures>
    <Section>
      <Container>
        <Card
          imageUrl={'Discover/assets/discover3'}
          title={
            <FormattedMessage
              id="discover.product.module1.title"
              defaultMessage="Democratic, if you want them to be"
            />
          }
          content={mudule1Content}
        />
        <Card
          imageUrl={'Discover/assets/discover4'}
          title={
            <FormattedHTMLMessage
              id="discover.product.module2.title"
              defaultMessage="<span>Built-in <br />  transparency  </span>"
            />
          }
          content={mudule2Content}
          className="transparency"
        />
      </Container>
    </Section>
    <DividedSection sectionClass="universe" image={universe}>
      <h3>
        <FormattedHTMLMessage
          id="discover.product.module3.title"
          defaultMessage='A universe <br /> <span className="blue">of apps</span>'
        />
      </h3>
      <p>
        <FormattedMessage
          id="discover.product.module3.content"
          defaultMessage="Aragon organizations are fully modular. You can install apps that enhance your organization, such as a different voting process or a better way to manage funds."
        />
      </p>
      <a
        className="action-button"
        href="https://hack.aragon.org/"
        target="_blank"
      >
        <span>
          <FormattedMessage
            id="discover.product.module3.action"
            defaultMessage="Developers"
          />
          <img src={require(`../General/assets/arrow.svg`)} />
        </span>
      </a>
    </DividedSection>
  </ProductFeatures>
)

const Container = styled.div`
  display: grid;
  ${medium(
    'grid-template-columns: calc(50% - 15px) calc(50% - 15px); grid-template-rows: 650px'
  )}
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  .transparency .principal-image {
    height: auto;
    width: 159px;
  }
`

const ProductFeatures = styled.div`
  .divided-section-container {
    ${medium('width: 81% !important;')}
    ${large('width: 41% !important;')}
  }
  .divided-section-image {
    ${medium('max-width: 120%')}
    ${large('max-width: calc(100% + 413px);')}
  }
  .universe h3 {
    margin-top: 0;
  }
  .universe h3 .blue {
    color: #639cf5;
  }
  .universe {
    padding: 60px 0;
  }
  .universe img.divided-section-image {
    ${medium('padding-left: 120px;')};
  }
`
export default About
