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
        background={'Bella/assets/background-1.png'}
        image={'Bella/assets/1.svg'}
        textAlign="right"
        title="Enjoy the new custom labels"
        content={feature1}
      />
      <LongCard
        background={'Bella/assets/background-2.png'}
        image={'Bella/assets/2.svg'}
        textAlign="left"
        title="Check our new notification center"
        content={feature2}
      />
      <LongCard
        background={'Bella/assets/background-3.png'}
        image={'Bella/assets/3.svg'}
        textAlign="right"
        title="Discover the new payroll APP"
        content={feature3}
      />
    </Container>
  </Section>
);

const Container = styled.div`
  display: grid;
  ${medium(
    'grid-template-columns: calc(50% - 15px) calc(50% - 15px); grid-template-rows: 500px 500px 500px'
  )};
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
`;

export default Features;
