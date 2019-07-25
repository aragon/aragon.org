import React from 'react';
import Section from '../General/Section';
import Label from './Label';
import Feature from './Feature';

import styled from 'styled-components';

import image5 from './assets/image5.png';
import image6 from './assets/image6.png';
import image7 from './assets/image7.png';

import label1 from './assets/label-voting.svg';
import label2 from './assets/label-finance.svg';
import label3 from './assets/label-notifications.svg';

import {breakpoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('medium', css);

const MoreFeatures = () => (
  <Container>
    <Feature image={image5} imageLeft={true} sectionClass="feature">
      <h3>
        New voting <span className="green">experience</span>
      </h3>
      <p>
        Voting is where decisions are taken. As such, it is at the very core of
        Aragon. We put the upmost care into designing a seamless voting
        experience.
      </p>
      <Label title="Voting" image={label1} />
    </Feature>
    <Feature image={image6} sectionClass="feature">
      <h3 className="agent">
        A new look for the <br />{' '}
        <span className="blue">finance experience</span>
      </h3>
      <p>
        The brand-new face of the Finance app enables a much clearer outlook of
        your organization’s finances. Now with more powerful filters.
      </p>
      <Label title="Finance" image={label2} />
    </Feature>
    <Feature image={image7} imageLeft={true}  sectionClass="feature">
      <h3>
        New email <span className="red">notifications</span>
      </h3>
      <p>
        Easily subscribe to the events that matter to you. Wheter it’s a new
        vote being created or a finance transfer being initiated, you are now in
        the loop.
      </p>
      <Label title="notifications" image={label3} />
    </Feature>
  </Container>
);

const Container = styled.div`
  .divided-section-image {
    max-width: calc(100% + 200px) !important;
  }
  .red {
    color: #FB7777;
  }
  .blue {
    background: -webkit-linear-gradient(69deg, #46C4E6, #4A80E4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .green {
    background: -webkit-linear-gradient(69deg, #A8ED2F, #68DFB1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .feature {
    padding: 0 120px !important;
  }
`;
export default MoreFeatures;
