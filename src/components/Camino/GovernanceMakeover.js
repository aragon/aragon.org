import React from 'react';
import Section from '../General/Section';
import Card from '../General/Card';
import styled from 'styled-components';
import {breakpoint, BreakPoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);
import image from './assets/image2.png';
import Label from './Label';
import label from './assets/label-ds.svg';

const mudule1Content = (
  <p>
    Simplified permissions management that makes it easy to understand at a
    glance who has the authority in your organization.
  </p>
);
const mudule2Content = (
  <span>
    <p>
      The Aragon client and default apps have been rebuilt from the ground up
      with a new design system for a more consistent user experience.
    </p>
    <div className="label">
      <a href="https://hack.aragon.org/" target="_blank">
        <Label title="aragonDS" image={label} />
      </a>
    </div>
  </span>
);

const GovernanceMakeover = () => (
  <StyledSection>
    <Container>
      <StyledCard
        linkTo="/project/grants"
        imageUrl={'Camino/assets/makeover'}
        className="governance"
        cardHeight="700px"
        title={
          <span>
            Modern
            <br /> <span className="blue">governance</span>
          </span>
        }
        content={mudule1Content}
      />
      <StyledCard
        linkTo="/project/contribute"
        imageUrl={'Camino/assets/makeover'}
        className="makeover"
        cardHeight="700px"
        title={
          <span>
            Fresh
            <br /> <span className="violet">makeover</span>
          </span>
        }
        content={mudule2Content}
      />
    </Container>
  </StyledSection>
);

const StyledSection = styled(Section)`
  background: #f9fafc;
`;

const StyledCard = styled(Card)`
  background: white;
  .principal-image {
    width: 100%;
    ${large('width: calc(100% + 60px);')};
    height: auto;
  }
  h1 .blue {
    background: -webkit-linear-gradient(69deg, #46c4e6, #4a80e4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  h1 .violet {
    background: -webkit-linear-gradient(69deg, #3023AE, #C86DD7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  h1 {
    font-size: 38px;
    line-height: 52px;
    text-align: center;
    letter-spacing: -0.447059px;
    margin: 50px 0 5px;
    color: #212b36;
    font-family: 'FontMedium',sans-serif;
  }
`;

const Container = styled.div`
  display: grid;
  ${medium(
    'grid-template-columns: calc(50% - 15px) calc(50% - 15px); grid-template-rows: 700px'
  )};
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  h1,
  p {
    width: 100%;
    text-align: left !important;
  }
  div.label img {
    margin: auto;
    height: auto;
    width: auto;
  }
  div.label a {
    display: flex;
    margin-top: 15px;
  }
  .governance .content {
    min-height: 150px;
  }
  .makeover .content {
    min-height: 160px;
  }
`;

export default GovernanceMakeover;
