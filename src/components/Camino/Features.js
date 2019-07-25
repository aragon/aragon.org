import React from 'react';
import Section from '../General/Section';
import Label from './Label';
import DividedSection from '../General/DividedSection';
import AlmostFullSection from '../General/AlmostFullSection';
import styled from 'styled-components';
import image from './assets/camino.png';
import image1 from './assets/image1.svg';
import image2 from './assets/image2.png';
import image3 from './assets/image3.svg';
import image4 from './assets/image4.svg';
import label1 from './assets/label-fundraising.svg';
import label2 from './assets/label-agent.svg';
import label3 from './assets/label-onboarding.svg';

import {breakpoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('medium', css);

const Features = () => (
  <Container>
    <DividedSection image={image1}>
      <h3>
        A new way to <span  className="yellow">raise funds</span>
      </h3>
      <p>
        Raise funds from anyone in the world immediatly and with no fees. Remain
        accountable with built-in transparent finances and governnace.
      </p>
      <Label title="Fundrasing" image={label1} />
    </DividedSection>
    <DividedSection
      image={image2}
      imageLeft={true}
      sectionClass="agent-app-section">
      <h3 className="agent">
        One app, <br/> <span className="blue">endless possibilities</span>
      </h3>
      <p>
        Aragon Agent enables organizations to interact with other Web3
        platforms. Say hi to collaborative decentralized finance.
      </p>
      <Label title="Agent" image={label2} />
    </DividedSection>
    <AlmostFullSection backgroundColor="#C4E5DF" image={image} imageLeft={true}>
      <h3>Aragon 0.8 Camino is here thanks to our brave early adopters.</h3>
      <p>
        Our product team has been closely working with users and early adopters.
        Your honest feedback has helped shape what Aragon is today.
      </p>
    </AlmostFullSection>
    <DividedSection image={image3}>
      <h3>
        New onboarding <span className="blue">experience</span>
      </h3>
      <p>
        You can now create even more with Aragon. Incorporate a company, form a
        membership or found a reputation-based organization in a few clicks.
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
    margin-left: 125px;
  }
  .yellow {
    background: -webkit-linear-gradient(69deg, #FF9372, #FFD770);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  h3.agent{
    max-width: 368px;
  }
  .blue {
    background: -webkit-linear-gradient(69deg, #65AAFF, #5D21D4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
export default Features;
