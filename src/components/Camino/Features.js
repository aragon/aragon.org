import React from 'react';
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';
import {breakpoint} from '@aragon/ui';
import styled from 'styled-components';
import Section from '../General/Section';
import Label from './Label';
import DividedSection from '../General/DividedSection';
import AlmostFullSection from '../General/AlmostFullSection';
import image from './assets/camino.png';
import image2 from './assets/image2.png';
import image3 from './assets/image3.svg';
import image4 from './assets/image4.svg';
import label1 from './assets/label-fundraising.svg';
import label2 from './assets/label-agent.svg';
import label3 from './assets/label-onboarding.svg';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('medium', css);

const Features = () => (
  <Container>
    <DividedSection
      image={image2}
      imageLeft={true}
      sectionClass="agent-app-section">
      <h3 className="agent">
        <FormattedHTMLMessage
          id="camino.features.feature1.title"
          defaultMessage="One app, <br /> <span class='blue'>endless possibilities</span>"
        />
      </h3>
      <p>
        <FormattedMessage
          id="camino.features.feature1.content"
          defaultMessage="Aragon Agent enables organizations to interact directly with any Ethereum application. Access Web3 like never before."
        />
      </p>
      <Label title="Agent" image={label2} />
    </DividedSection>
    <AlmostFullSection backgroundColor="#C4E5DF" image={image} imageLeft={true}>
      <h3>
        <FormattedMessage
          id="camino.features.feature2.title"
          defaultMessage="Aragon 0.8 Camino is here thanks to our brave early adopters."
        />
      </h3>
      <p>
        <FormattedMessage
          id="camino.features.feature2.content"
          defaultMessage="Our product team has been closely working with users and early adopters. Your honest feedback has helped shape what Aragon is today."
        />
      </p>
    </AlmostFullSection>
    <DividedSection image={image3}>
      <h3>
        <FormattedHTMLMessage
          id="camino.features.feature3.title"
          defaultMessage="Streamlined <br /><span class='blue'>setup flow</span>"
        />
      </h3>
      <p>
        <FormattedMessage
          id="camino.features.feature3.content"
          defaultMessage="Featuring more templates to match with your needs. Start a company, membership, or reputation-based organization in just a few clicks."
        />
      </p>
      <Label title="Onboarding" image={label3} />
    </DividedSection>
  </Container>
);

const Container = styled.div`
  .agent-app-section {
    background: #f9fafc;
    padding: 0;
  }
  .agent-app-section img {
    width: 110%;
  }
  .agent-app-section .divided-section-container {
    ${medium('margin-left: 125px;')};
  }
  .yellow {
    background: -webkit-linear-gradient(69deg, #ff9372, #ffd770);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  h3.agent {
    max-width: 368px;
  }
  .blue {
    background: -webkit-linear-gradient(69deg, #65aaff, #5d21d4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
export default Features;
