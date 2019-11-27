import React from 'react';
import {FormattedMessage} from 'react-intl';
import styled from 'styled-components';
import {Link} from 'react-static';
import {breakpoint} from '@aragon/ui';
import Section from '../General/Section';
import LongCard from '../General/LongCard';
import Card from '../General/Card';
const medium = css => breakpoint('medium', css);

const mudule1Content = (
  <p>
    <FormattedMessage
      id="discover.about.module1.content"
      defaultMessage="Aragon organizations are digital natives. They live on Ethereum, a ledger secured by incentives and cryptography. Transactions are transparent and immutable."
    />
  </p>
);
const mudule2Content = (
  <p>
    <FormattedMessage
      id="discover.about.module2.content"
      defaultMessage="Aragon leverages smart contracts. They are like traditional contracts, but written in computer code and enforced by the blockchain. As efficient and automatic as it gets."
    />
  </p>
);

const About = () => (
  <Section>
    <Container>
      <Card
        imageUrl={'Discover/assets/discover1'}
        title={
          <FormattedMessage
            id="discover.about.module1.title"
            defaultMessage="21st century organizations"
          />
        }
        content={mudule1Content}
        className="discover1"
      />
      <Card
        imageUrl={'Discover/assets/discover2'}
        title={
          <FormattedMessage
            id="discover.about.module2.title"
            defaultMessage="Organizations that work for you"
          />
        }
        content={mudule2Content}
      />
    </Container>
  </Section>
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
  .discover1 img {
    width: 266px;
  }
  padding-top: 65px;
  padding-bottom: 65px;
`;

export default About;
