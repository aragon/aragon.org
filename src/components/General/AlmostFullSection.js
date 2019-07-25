import React from 'react';
import styled from 'styled-components';

import {breakpoint, BreakPoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);

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
      <Container className="divided-section-container">{props.children}</Container>
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
  padding: 50px 120px;
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1305px;
  ${medium('flex-direction: row;')};
`;
const Container = styled.div`
  width: 60%;
  text-align: center;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${medium('text-align: left; margin: inherit;')};
  padding-left: 150px;
  p {
    font-size: 21px;
    line-height: 35px;
    text-align: left;
    letter-spacing: 0.24px;
    color: #6d7693;
    margin: 20px 0;
  }
  h3 {
    font-size: 38px;
    line-height: 52px;
    text-align: left;
    letter-spacing: -0.447059px;
    margin: 50px 0 5px;
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
