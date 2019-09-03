import React from 'react';
import Section from '../General/Section';
import DividedSection from '../General/DividedSection';
import AlmostFullSection from '../General/AlmostFullSection';
import styled from 'styled-components';
import image1 from './assets/tokens.svg';
import image2 from './assets/fully-customizable.svg';

import {breakpoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('medium', css);

const Features = () => (
  <Container>
    <DividedSection image={image1}>
      <h3>
        Global and <span className="red">bureaucracy-free</span>
      </h3>
      <p>
        Aragon organizations are global from day one. Collaborate with people
        across countries or continents, without incurring into cumbersome
        bureau-crazy.
      </p>
    </DividedSection>
    <DividedSection
      image={image2}
      imageLeft={true}
      sectionClass="customizable">
      <h3>
        Fully <br /> <span className="blue">customizable</span>
      </h3>
      <p>
        With Aragon, you don’t need to pick a one-size-fits-all solution. You
        can experiment with new kinds of human collaboration, just with a few
        clicks.
      </p>
    </DividedSection>
  </Container>
);

const Container = styled.div`
  .red {
    color: #FF8979;
  }
  .customizable h3 {
    max-width: 368px;
  }
  .blue {
    background: -webkit-linear-gradient(69deg, #65aaff, #5d21d4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .customizable .divided-section-container {
    ${medium('width: 39%;')};
  }
  img {
    ${medium('max-width: 110%;')};
  }
  section {
    padding-bottom: 0;
  }
  .customizable img {
    ${medium('margin-right: 76px;')};
  }
  .customizable {
    padding: 0px;
  }
`;
export default Features;
