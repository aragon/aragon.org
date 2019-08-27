import React from 'react';
import Section from '../General/Section';
import styled from 'styled-components';
import backgroundImage from './assets/background2.png';
import backgroundMobile from './assets/backgroundMobile.png';
import fase1 from './assets/fase1.png';
import fase2 from './assets/fase2.png';
import fase3 from './assets/fase3.png';
import fase4 from './assets/fase4.png';
import {Parallax, ParallaxLayer} from 'react-spring/addons.cjs.js';

import {breakpoint, BreakPoint, useViewport} from '@aragon/ui';
const medium = css => breakpoint('medium', css);

const ParallaxComponent = () => {
  const {width} = useViewport();
  console.log(width);
  return (
    <Box>
      {(width > 768) && (width < 3000) &&
      (
        <ParallaxSection>
          <Parallax
            pages={1.45}
            scrolling={true}>
            <ParallaxLayer offset={-0.1} speed={0}>
              <img src={backgroundImage} />
            </ParallaxLayer>
            <ParallaxLayer offset={0.5} speed={0.3}>
              <img src={fase4} />
            </ParallaxLayer>
            <ParallaxLayer offset={0.6} speed={0.5}>
              <img src={fase3} />
            </ParallaxLayer>
            <ParallaxLayer offset={0.6} speed={0.6}>
              <img src={fase2} />
            </ParallaxLayer>
            <ParallaxLayer factor={1} offset={medium ? 0.9 : 0.5} speed={0.9}>
              <Fase1 src={fase1} />
            </ParallaxLayer>
          </Parallax>
        </ParallaxSection>
      )}
      {(width <= 768) &&
      (
        <ParallaxSection>
          <Parallax
            pages={1.5}
            scrolling={true}>
            <ParallaxLayer offset={0} speed={0}>
              <img className="sky-mobile" src={backgroundMobile} />
            </ParallaxLayer>
            <ParallaxLayer offset={0.35} speed={0.3}>
              <img className="first-mountain" src={fase4} />
            </ParallaxLayer>
            <ParallaxLayer offset={0.4} speed={0.5}>
              <img src={fase3} />
            </ParallaxLayer>
            <ParallaxLayer offset={0.4} speed={0.6}>
              <img src={fase2} />
            </ParallaxLayer>
            <ParallaxLayer factor={1} offset={0.5} speed={0.9}>
              <Fase1 src={fase1} />
            </ParallaxLayer>
          </Parallax>
        </ParallaxSection>
      )}
    </Box>
  );
};

const ParallaxSection = styled.div`
  background-color: #062132;

  min-height: 70vh;
  ${medium(`
    min-height: 100vh;
  `)};
  display: flex;
  align-items: center;
  justify-content: center;
  &::-webkit-scrollbar {
    display: none;
  }
  ::-webkit-scrollbar-thumb {
    background: #ff0000;
  }
  img {
    max-width: 100%;
    margin: auto;
  }
  div {
    text-align: center;
  }
  .first-mountain {
    margin-left: -12%;
  }
  .sky-mobile {
    margin-top: 17%;
  }
`;

const Box = styled.div`
  div ::-webkit-scrollbar {
    width: 0 !important;
  }
  div {
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
  }
`;

const Fase1 = styled.img``;

export default ParallaxComponent;
