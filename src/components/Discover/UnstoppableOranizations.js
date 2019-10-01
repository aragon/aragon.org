import React from 'react'
import Section from '../General/Section'
import styled from 'styled-components'
import { Link } from 'react-static'
import image from './assets/unstoppable.png'
import AlmostFullSection from '../General/AlmostFullSection';

import { breakpoint, BreakPoint } from '@aragon/ui'
const medium = css => breakpoint('medium', css)


const UnstoppableOrganizations = () => (
  <AlmostFullSection backgroundColor="#FF8979" image={image} imageLeft={true}>
    <AlmostFullSectionBox>
      <h3>Unstoppable organizations</h3>
      <p>
        Aragon provides new tools for human collaboration. Aragon organizations are difficult to shut down, escaping the boundaries of oppression and censorship.
      </p>
      <Link to="/project">About the project</Link>
    </AlmostFullSectionBox>
  </AlmostFullSection>
);

const AlmostFullSectionBox = styled.div`
  h3 {
    font-family: 'FontRegular', sans-serif;
    font-size: 48px;
    line-height: 59px;
    letter-spacing: -0.564706px;
    color: #ffffff !important;
  }
  p {
    font-family: 'FontRegular', sans-serif;
    font-size: 21px;
    line-height: 35px;
    letter-spacing: 0.315px;
    color: #ffffff;
    opacity: 0.8;
  }
  a {
    font-family: 'FontSemiBold';
    font-size: 21px;
    line-height: 35px;
    letter-spacing: 0.315px;
    color: #ffffff;
  }
`;

export default UnstoppableOrganizations
