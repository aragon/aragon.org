import React from 'react';
import Section from '../General/Section';
import styled from 'styled-components';
import {Link} from 'react-static';
import backgroundImage from './assets/association-background.svg';

import {breakpoint, BreakPoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);

const UnstoppableOrganizations = () => (
  <Association>
    <Container>
      <h2>The Aragon Association</h2>
      <h4>
        The Aragon Project is stewarded by the Aragon Association, a Swiss
        non-profit entity.
      </h4>
      <br />
      <h5>Executive director</h5>
      <h4 className="signs">
        <span>Stefano Bernardi</span>
      </h4>
      <br />
      <h5>Board of directors</h5>
      <h4 className="signs">Luis Cuende</h4>
      <h4>Jorge Izquierdo</h4>
    </Container>
  </Association>
);

const Association = styled(Section)`
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: #1c1d23;
  min-height: 626px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  width: 100%;
  margin: 15px 0;
  text-align: center;
  margin: auto;
  ${medium('text-align: left; margin: inherit;')};
  h2 {
    font-family: 'FontRegular', sans-serif;
    font-size: 48px;
    line-height: 59px;
    letter-spacing: -0.564706px;
    color: #ffffff;
    text-align: left;
  }
  h4 {
    text-align: left;
    font-family: 'FontRegular', sans-serif;
    font-size: 21px;
    line-height: 35px;
    letter-spacing: 0.315px;
    color: #ffffff;
    opacity: 0.8;
    max-width: 442px;
  }
  h5 {
    font-family: 'FontRegular', sans-serif;
    font-size: 14px;
    line-height: 28px;
    letter-spacing: 0.24px;
    text-align: left;
    text-transform: uppercase;
    color: #7F8198;
  }
  .signs span {
    color: white;
    opacity: 1;
  }
`;
const Image = styled.img`
  max-width: 100%;
`;

export default UnstoppableOrganizations;
