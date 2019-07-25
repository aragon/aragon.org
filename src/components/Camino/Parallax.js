import React from 'react';
import Section from '../General/Section';
import styled from 'styled-components';
import backgroundImage from './assets/background.png';
import fase1 from './assets/fase1.png';
import fase2 from './assets/fase2.png';
import fase3 from './assets/fase3.png';
import fase4 from './assets/fase4.png';

import {breakpoint, BreakPoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);

import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
class ParallaxComponent extends React.Component {
  render() {
    return (
      <Box>
      <ParallaxSection>
        <Parallax pages={1.45} scrolling={true} ref={ref => (this.parallax = ref)}>
          <ParallaxLayer offset={-0.1} speed={0}>
            <img src={backgroundImage} />
          </ParallaxLayer>
          <ParallaxLayer offset={0.4} speed={0.3}>
            <img src={fase4} />
          </ParallaxLayer>
          <ParallaxLayer offset={0.5} speed={0.5}>
            <img src={fase3} />
          </ParallaxLayer>
          <ParallaxLayer  offset={0.5} speed={0.6}>
            <img src={fase2} />
          </ParallaxLayer>
          <ParallaxLayer factor={1} offset={0.8} speed={0.9}>
            <Fase1 src={fase1} />
          </ParallaxLayer>
        </Parallax>
      </ParallaxSection>
      </Box>
    );
  }
}

const ParallaxSection = styled.div`
  background-color: #062132;

  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  &::-webkit-scrollbar {
    display: none;
  }
  ::-webkit-scrollbar-thumb {
    background: #FF0000;
  }
  img {
    max-width: 100%;
    margin: auto;
  }
  div {
    text-align: center;
  }
`;

const Box = styled.div`
  div ::-webkit-scrollbar { width: 0 !important }
  div {
    overflow: -moz-scrollbars-none;
   -ms-overflow-style: none;
 }

`;

const Fase1 = styled.img`

`

export default ParallaxComponent;
