import React from 'react';
import Section from '../General/Section';
import LongCard from '../General/LongCard';
import Card from '../General/Card';
import styled from 'styled-components';
import {Link} from 'react-static';
import {breakpoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);
import DividedSection from '../General/DividedSection';
import universe from './assets/universe-of-apps.svg';

const mudule1Content = (
  <p>
    Creating a democratic organization is as easy as selecting the Democracy
    template. Votes are fully secure and tamper-proof. You can now empower
    entire communities.
  </p>
);
const mudule2Content = (
  <p>
    No need to go through a huge stack of paper to figure out what’s going on.
    Thanks to Aragon, people in your organization can view your finances and any
    other data.
  </p>
);

const About = () => (
  <ProductFeatures>
    <Section>
      <Container>
        <Card
          imageUrl={'Discover/assets/discover3'}
          title="Democratic, if you want them to be"
          content={mudule1Content}
        />
        <Card
          imageUrl={'Discover/assets/discover4'}
          title={
            <span>
              Built-in <br />
              transparency
            </span>
          }
          content={mudule2Content}
        />
      </Container>
    </Section>
    <DividedSection sectionClass="universe" image={universe}>
      <h3>
        A universe <br />
        <span className="blue">of apps</span>
      </h3>
      <p>
        Aragon organizations are fully modular. You can install apps that
        enhance your organization. Maybe you want a different voting process, or
        a different way to manage funds.
      </p>
      <a
        className="action-button"
        href="https://hack.aragon.org/"
        target="_blank">
        <span>
          Developers <img src={require(`../General/assets/arrow.svg`)} />
        </span>
      </a>
    </DividedSection>
  </ProductFeatures>
);

const Container = styled.div`
  display: grid;
  ${medium(
    'grid-template-columns: calc(50% - 15px) calc(50% - 15px); grid-template-rows: 650px'
  )};
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
`;

const ProductFeatures = styled.div`
  .divided-section-container {
    ${medium('width: 81% !important;')};
    ${large('width: 41% !important;')};
  }
  .divided-section-image {
    ${medium('max-width: 120%')};
    ${large('max-width: calc(100% + 413px);')};
  }
  .universe h3 .blue {
    color: #639cf5;
  }
  .universe {
    padding: 60px 0 0 0;
  }
`;
export default About;
