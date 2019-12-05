import React from 'react'
import Section from '../General/Section'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { breakpoint, BreakPoint } from '@aragon/ui'
const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)
import { Link } from 'react-static'
import Fade from 'react-reveal/Fade'

const LCard = ({ ...props }) => (
  <LongCard
    className={props.textAlign + ' ' + props.className}
    colorWhite={props.colorWhite}
    image={props.image || false}
    background={props.background ? require(`../${props.background}`) : ''}
    gradient={props.gradient ? props.gradient : ''}
  >
    {props.image && props.textAlign == 'right' && (
      <ImageContainer className="image-container right-container">
        <Fade
          left={props.bottom ? false : true}
          bottom={props.bottom ? true : false}
          delay={400}
          distance="50px"
        >
          {' '}
          <img src={require(`../${props.image}`)} />
        </Fade>
      </ImageContainer>
    )}
    <div className={props.textAlign + '-box text-box'}>
      {props.label && (
        <div className="label">
          <p>{props.label}</p>
        </div>
      )}
      {props.title && <h1>{props.title}</h1>}
      {props.content && <h1>{props.content}</h1>}
      {props.children}
    </div>
    {props.image && props.textAlign == 'left' && (
      <ImageContainer className="image-container left-container">
        <Fade
          right={props.bottom ? false : true}
          bottom={props.bottom ? true : false}
          delay={400}
          distance="50px"
        >
          {' '}
          <img src={require(`../${props.image}`)} />
        </Fade>
      </ImageContainer>
    )}
  </LongCard>
)

const Card = ({ ...props }) => (
  <React.Fragment>
    <BreakPoint to="medium">
      <LCard {...props} />
    </BreakPoint>
    <BreakPoint from="medium">
      <LongFade>
        <Fade delay={100}>
          <LCard {...props} />
        </Fade>
      </LongFade>
    </BreakPoint>
  </React.Fragment>
)

const LongFade = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-column-start: 1;
  ${medium('height: 500px ')};
  height: auto;
`

const LongCard = styled('div')`
  border-radius: 12px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.07);
  background-color: #f9fafc;
  ${props =>
    props.background &&
    'background-image: url(' + props.background + ');'} ${props =>
    props.gradient &&
    'background-image:' + props.gradient + ';'}
  background-size: cover;
  background-position: center;
  padding: 30px;
  ${medium('padding: 30px 15px;')};
  ${large('padding: 30px 60px;')};
  display: flex;
  align-items: center;
  flex-direction: column;
  ${medium('flex-direction: row;')};
  ${medium('height: 500px ')};
  height: auto;
  grid-column-start: 1;
  ${medium('grid-column-end: 3;')};
  grid-column-end: 2;
  transition: all 0.25s ease-in-out;
  .left-container {
    ${medium('margin-left: 20px;')};
  }
  .right-container {
    ${medium('margin-right: 20px;')};
  }
  .text-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .center-box.text-box {
    display: block;
  }
  &.center {
    justify-content: center;
    p,
    h1 {
      text-align: center;
    }
  }
  &.left {
    justify-content: flex-start;
  }
  &.right {
    justify-content: center;
    ${medium('justify-content: flex-end')};
  }

  p {
    font-family: 'FontRegular', sans-serif;
    font-size: 16px;
    line-height: 1.75;
    letter-spacing: 0.1px;
    text-align: left;
    color: ${props => (props.colorWhite ? '#b4b5cc' : '#7f8198')};
  }
  h1 {
    font-family: 'FontLight', sans-serif;
    font-size: 30px;
    ${medium('font-size: 46px;')};
    font-weight: 300;
    line-height: 1.35;
    text-align: left;
    color: ${props => (props.colorWhite ? 'white' : '#2d4051')};
    margin: 15px 0 0 0;
  }
  .left-box {
    width: 100%;
    ${medium('width: 50%')};
  }
  .right-box {
    width: 100%;
    ${medium('width: 50%')};
    margin-left: 0;
    margin-left: ${props => (props.image ? medium('30px') : medium('50%'))};
  }
  .center-box {
    width: 80%;
    margin: auto;
  }
  &:hover {
    box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.07);
  }
`

const ImageContainer = styled('div')`
  width: 100%;
  ${medium('width: 50%;')};
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 100%;
    width: 430px;
    height: auto;
    ${medium('height: 430px;')};
    margin: 15px 0;
  }
`

export default Card
