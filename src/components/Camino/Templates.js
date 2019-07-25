import React from 'react';
import Section from '../General/Section';
import styled from 'styled-components';
import {Link} from 'react-static';

import {breakpoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);

import company from './assets/company.svg';
import reputation from './assets/reputation.svg';
import membership from './assets/membership.svg';

const Templates = () => (
  <TemplatesSection>
    <h3>
      Start your organization with our <br />
      <span className="blue">pre-configured templates</span>
    </h3>
    <Container>
      <Box className="green">
        <img src={company} />
        <h4>Company</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
        </p>
      </Box>
      <Box  className="violet">
        <img src={reputation} />
        <h4>Reputation</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
        </p>
      </Box>
      <Box className="red">
        <img src={membership} />
        <h4>Membership</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
        </p>
      </Box>
    </Container>
  </TemplatesSection>
);

const Box = styled.div`
  p {
    font-weight: 300;
    font-size: 16px;
    text-align:  left;
    line-height: 25px;
    color: #ffffff;
  }
  h4 {
    font-size: 32px;
    line-height: 49px;
    text-align:  left;
    color: #ffffff;
  }
  img {
    margin: auto;
    margin-bottom:30px;
  }
  text-align: center
  border-radius: 12px;
  padding: 50px 38px;
  &.red{
    background: linear-gradient(318.35deg, #fff886 -112.1%, #ff4e78 91.91%);
  }
  &.violet{
    background: linear-gradient(127.86deg, #65AAFF -43.9%, #5D21D4 105.39%);
  }
  &.green{
    background: linear-gradient(126.21deg, #9AFFD8 -49.19%, #68DFB1 59.11%);
  }
`;

const TemplatesSection = styled(Section)`
  padding: 0 15px 30px 15px;
  z-index: 3;
  h3 {
    font-size: 38px;
    line-height: 52px;
    text-align: center;
    margin: auto;
    letter-spacing: -0.447059px;
    color: #212b36;
    font-family: 'FontMedium', sans-serif;
  }
  .blue {
    background: -webkit-linear-gradient(69deg, #65aaff, #5d21d4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
const Container = styled.div`
  display: grid;
  margin-top: 50px;
  ${medium(
    'grid-template-columns: calc(33.33% - 15px) calc(33.33% - 15px) calc(33.33% - 15px); grid-template-rows: auto'
  )};
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  p.discover {
    font-size: 18px;
    line-height: 19px;
    text-align: center;
    margin-bottom: 15px;
    ${medium('margin-bottom: 35px;')};
    color: #ffffff;
  }
`;

export default Templates;
