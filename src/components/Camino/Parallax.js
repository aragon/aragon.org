import React from 'react';
import Section from '../General/Section';
import styled from 'styled-components';
import backgroundImage from './assets/background2.png';
import parallaxImage from './assets/imageparallax.png';
import fase1 from './assets/fase1.png';
import fase2 from './assets/fase2.png';
import fase3 from './assets/fase3.png';
import fase4 from './assets/fase4.png';
import title from './assets/camino-title.png';
import {Parallax, ParallaxLayer} from 'react-spring/addons.cjs.js';

import {useViewport, breakpoint, BreakPoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);


const ParallaxComponent = () => {
  const {width} = useViewport();
  console.log(width);
  return (
    <Box>
      <BreakPoint to="medium">
      <StaticSection className={width>=3000 ? 'large' : 'mobile'}>
        <CaminoTitle src={title} />
      </StaticSection>
      </BreakPoint>
      <BreakPoint from="medium">
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
            <ParallaxLayer factor={1} offset={0.9} speed={0.9}>
              <img src={fase1} />
            </ParallaxLayer>
            <ParallaxLayer offset={0.35} speed={0.2}>
              <CaminoTitle src={title} />
            </ParallaxLayer>
          </Parallax>
        </ParallaxSection>
      </BreakPoint>
      {((width >= 3000)) &&
      (
        <StaticSection className={width>=3000 ? 'large' : 'mobile'}>
          <img src={caminoTitle} />
        </StaticSection>
      )}
    </Box>
  );
};

const CaminoTitle = styled.img`
  max-width: 90%;
  margin: 60% auto;
  ${medium(`margin: auto; max-width: 750px!important;`)}
`
const StaticSection = styled.div`
  height: 1200px;
  background-color: #0d5c76;
  background-image: url(${parallaxImage});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-start;
  ${medium(`align-items: center;`)}
  position: relative;
  justify-content: center;
  overflow: hidden;
  background-repeat: no-repeat;
  &.large {
    height: 2700px;
  }
`
const ParallaxSection = styled.div`
  background-color: #062132;

  min-height: 70vh;
  ${medium(`
    min-height: 100vh;
  `)}
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

export default ParallaxComponent;
