import React from 'react';
import Hero from '../components/Powered/Hero';
import Transparency from '../components/Powered/Transparency';
import Governance from '../components/Powered/Governance';
import Security from '../components/Powered/Security';
import Projects from '../components/Powered/Projects';
import Footer from '../components/Powered/Footer';
import PreFooter from '../components/Powered/PreFooter';
import styled from 'styled-components';

import {breakpoint, BreakPoint, Button} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

class Home extends React.Component {
  render() {
    return (
      <HomeContainer>
        <Hero />
        <Transparency />
        <Governance />
        <Security />
        <Projects />
        <PreFooter />
        <Footer />
      </HomeContainer>
    );
  }
}

const HomeContainer = styled.div`
  width: 100%;
  overflow: hidden;
  font-weight: 300 !important;
  font-size: 13px !important;

  html,body {
    font-size: 13px !important;
  }
  h2, p {
    margin-top: 0;
    margin-bottom: 0;
  }
  h6 {
    font-family: 'FontRegular';
    font-size: 1rem;
    letter-spacing: 2.6px;
    line-height: 1.5;
    ${medium('line-height: 1;')};
    margin: 0 0 70px 0;
    .grey {
      color: #525252;
    }
  }
  img {
    max-width: 90%;
    padding: 40px 0;
    ${medium('padding: 0;')};
  }
`;
export default Home;
