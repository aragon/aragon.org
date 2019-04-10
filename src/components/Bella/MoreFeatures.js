import React from 'react';
import Section from '../General/Section';
import LongCard from '../General/LongCard';
import Card from '../General/Card';
import styled from 'styled-components';
import {Link} from 'react-static';

import {breakpoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);

const feature1 = (
  <span>
    <p>
      Aragon organizations are global from day one. Collaborate with people
      across countries or continents, without incurring into cumbersome
      bureaucrazy.
    </p>
  </span>
);
const feature2 = (
  <span>
    <p>
      Aragon organizations are global from day one. Collaborate with people
      across countries or continents, without incurring into cumbersome
      bureaucrazy.
    </p>
  </span>
);
const feature3 = (
  <span>
    <p>
      Aragon organizations are global from day one. Collaborate with people
      across countries or continents, without incurring into cumbersome
      bureaucrazy.
    </p>
  </span>
);

const Features = () => (
  <Section>
    <Container>
      <LongCard
        gradient="linear-gradient(335.08deg, #95BBCE -0.56%, #C5D0E6 46.04%, #E7E4F6 100%)"
        image={'Bella/assets/4.svg'}
        textAlign="right"
        title="Complete responsive view"
        content={feature1}
        className="first-feature"
      />
      <LongCard
        gradient="linear-gradient(24.28deg, #C3E4DF 0%, #EDFAF2 100.94%)"
        image={'Bella/assets/5.svg'}
        textAlign="right"
        title="New App center upgrades"
        content={feature2}
      />
      <Card
        gradient="linear-gradient(261.3deg, #FBF2E8 0%, #FFEDD9 99.84%)"
        imageUrl={'Bella/assets/6'}
        imageBig="true"
        title="Export your finances in one click"
        content={feature3}
      />
      <Card
        gradient="linear-gradient(261.3deg, #FBF2E8 0%, #FFEDD9 99.84%)"
        imageUrl={'Bella/assets/6'}
        imageBig="true"
        title="Export your finances in one click"
        content={feature3}
      />
    </Container>
  </Section>
);

const Container = styled.div`
  display: grid;
  ${medium(
    'grid-template-columns: calc(50% - 15px) calc(50% - 15px); grid-template-rows: 500px 500px 700px'
  )};
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  .first-feature .image-container {
    margin-bottom: -70px !important;
  }
`;

export default Features;
