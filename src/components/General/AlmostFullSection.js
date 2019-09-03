import React from 'react';
import styled from 'styled-components';

import {breakpoint, BreakPoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const AlmostFullSection = ({...props}) => (
  <Section
    backgroundColor={props.backgroundColor ? props.backgroundColor : ''}
    className={props.sectionClass}>
    <Box>
      {props.imageLeft && (
        <ImageContainer className="image-left">
          <Image src={props.image} />
        </ImageContainer>
      )}
      <Container imageLeft={props.imageLeft} className="divided-section-container">{props.children}</Container>
      {!props.imageLeft && (
        <ImageContainer>
          <Image src={props.image} />
        </ImageContainer>
      )}
    </Box>
  </Section>
);

const Section = styled.div`
  ${props =>
    props.backgroundColor &&
    'background-color: ' + props.backgroundColor + ';'}
  background-size: cover;
  min-height: 500px;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 15px;
  ${large('padding: 50px 120px;')};
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1305px;
  ${large('flex-direction: row;')};
`;
const Container = styled.div`
  ${large('width: 60%;')};
  ${p => p.imageLeft? 'padding-top' : 'padding-bottom'}: 30px;
  ${breakpoint('large', `padding-bottom:0;`)}
  @media (min-width: 1152px) {
    ${p => p.imageLeft? 'padding-left' : 'padding-right'}: 150px;
  }

  text-align: center;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${large('text-align: left; margin: inherit;')};
  p {
    font-size: 16px;
    ${large('font-size: 21px;')};
    line-height: 1.66;
    text-align: center;
    ${large('text-align: left;')};
    letter-spacing: 0.24px;
    color: #6d7693;
    margin: 20px 0;
  }
  h3 {
    font-size: 20px;
    ${large('font-size: 38px;')};
    line-height: 1.36;
    text-align: center;
    margin: 0;
    ${large('text-align: left; margin: 0 0 5px 0;')};
    letter-spacing: -0.447059px;
    color: #212b36;
    font-family: 'FontMedium', sans-serif;
  }
`;
const Image = styled.img`
  max-width: 100%;
`;

const ImageContainer = styled.div`
  text-align: center;
  margin: auto;
`;

export default AlmostFullSection;
