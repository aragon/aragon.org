import React from 'react';
import Section from '../General/Section';
import LongCard from '../General/LongCard';
import Card from '../General/Card';
import styled from 'styled-components';
import {Link} from 'react-static';
import {breakpoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);

const mudule1Content = (
  <p>
    Aragon organizations are digital natives. They live on Ethereum, a ledger
    secured by incentives and cryptography. No one can take your organization
    away from you.
  </p>
);
const mudule2Content = (
  <p>
    Aragon leverages smart contracts. They are like traditional contracts, but
    written in computer code and enforced by the blockchain. As efficient and
    automatic as it gets.
  </p>
);

const About = () => (
  <Section>
    <Container>
      <Card
        imageUrl={'Discover/assets/discover1'}
        title="21st century organizations"
        content={mudule1Content}
      />
      <Card
        imageUrl={'Discover/assets/discover2'}
        title="Organizations that work for you"
        content={mudule2Content}
      />
    </Container>
  </Section>
);

const Container = styled.div`
  display: grid;
  ${medium(
    'grid-template-columns: calc(50% - 15px) calc(50% - 15px); grid-template-rows: 500px'
  )};
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
`;

export default About;
