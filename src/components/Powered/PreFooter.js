import React from 'react';
import styled from 'styled-components';
import background from './assets/pre-footer.svg';
import Fade from 'react-reveal/Fade';

import {breakpoint, BreakPoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const PreFooter = () => (
  <PreFooterSection>
    <Fade bottom distance="50px">
    <Container>
      <h2>Accountability, transparency and security is what it means to be Powered by Aragon</h2>
      <a href="https://wiki.aragon.org" target="_blank">Aragon Wiki</a>
    </Container>
    </Fade>
  </PreFooterSection>
);

const PreFooterSection = styled.section`
  min-height: 600px;
  height: auto;
  background: url(${background}) top no-repeat;
  background-size: cover;
  height: 1106px;
  margin-bottom: -3px;
`;

const Container = styled.div`
  width: 80%;
  margin: auto;
  height: 100%;
  padding-top: 50px;
  text-align: center;
  h2 {
    font-family: 'FontRegular';
    font-weight: 400;
    font-size: 38px;
    line-height: 1.54;
    text-align: center;
    color: #FFFFFF;
    margin: auto;
    margin-top: 230px!important;
    ${medium('font-size: 48px; margin-top: 110px!important;')};
    max-width: 900px;
  }
  a {
    font-family: 'FontSemiBold';
    font-size: 24px;
    line-height: 74px;
    text-align: center;
    margin: auto;
    color: #FFFFFF;
    text-decoration: none;
  }
  a:hover {
    opacity: 0.8;
  }

  ${medium('padding-top: 200px;')};
`;
export default PreFooter;
