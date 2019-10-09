import React from 'react';
import Section from '../General/Section';
import SmallCard from '../General/SmallCard';
import styled from 'styled-components';
import {Link} from 'react-static';
import image1 from './assets/divider1.svg';
import image2 from './assets/divider2.svg';
import image3 from './assets/divider3.svg';
import {breakpoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);

const Divider = () => (
  <AboutSection>
    <Container>
      <div>
        <img src={image1} />
        <h1>Verifiable Transparency</h1>
        <p>
          Transparency means all terms and financial activity are publicly
          verifiable by anyone.
        </p>
      </div>
      <div>
        <img src={image2} />
        <h1>Fair Accountability</h1>
        <p>
          Continuous fund disbursement is controlled directly by token holders
          via periodic voting.
        </p>
      </div>
      <div>
        <img src={image3} />
        <h1>Frictionless Liquidity</h1>
        <p>
          Bonding curves ensure voting tokens always have fair terms and an open
          liquid market.
        </p>
      </div>
    </Container>
  </AboutSection>
);

const AboutSection = styled(Section)`
  padding: 114px 15px;
  z-index: 3;
  background: linear-gradient(155.96deg, #ff9372 0.49%, #ffd770 127.39%);
`;
const Container = styled.div`
  display: grid;
  ${medium(
    'grid-template-columns: calc(33.33% - 15px) calc(33.33% - 15px) calc(33.33% - 15px); grid-template-rows: auto'
  )};
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  p {
    font-size: 21px;
    line-height: 35px;
    color: #ffffff;
  }
  p {
    min-height: 112px;
  }
  h1 {
    font-family: 'FontSemiBold';
    font-weight: 600;
    font-size: 21px;
    line-height: 35px;
    color: #ffffff;
  }
  img {
    margin-bottom: 33px;
  }
`;

export default Divider;
