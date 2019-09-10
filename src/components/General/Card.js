import React from 'react';
import PropTypes from 'prop-types';
import Section from '../General/Section';
import styled from 'styled-components';
import {breakpoint, BreakPoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);
import {Link} from 'react-static';
import Fade from 'react-reveal/Fade';

const SCard = ({...props}) => (
  <SmallCard
    target="_blank"
    colorWhite={props.colorWhite}
    textAlign={props.textAlign}
    background={props.background ? require(`../${props.background}`) : ''}
    gradient={props.gradient ? props.gradient : ''}
    imageBig={props.imageBig ? props.imageBig : ''}
    cardHeight={props.cardHeight ? props.cardHeight : false}
    className={props.className}
    >
    {props.imageUrl.includes('.png') ?
    <img className="principal-image" src={require(`../${props.imageUrl}`)} />
  :
    <img className="principal-image" src={require(`../${props.imageUrl}.svg`)} />}
    {props.label && (
      <div className="label">
        <p>{props.label}</p>
      </div>
    )}
    <h1>{props.title}</h1>
    <div className="content">{props.content}</div>
  </SmallCard>
);

const Card = ({...props}) => (
  <React.Fragment>
    <BreakPoint to="medium">
      <SCard {...props} />
    </BreakPoint>
    <BreakPoint from="medium">
      <Fade delay={100}>
        <SCard {...props} />
      </Fade>
    </BreakPoint>
  </React.Fragment>
);

const SmallCard = styled.div`
  border-radius: 12px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.07);
  background-color: #f9fafc;
  ${props =>
    props.background &&
    'background-image: url(' + props.background + ');'}
  ${props =>
    props.gradient &&
    'background-image:' + props.gradient + ';'}
  background-size: 108% 108%;
  background-position: center;
  display: flex;
  align-items: ${props =>
    props.textAlign == 'left' ? 'flex-start' : 'center'};
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  transition: all 0.25s ease-in-out;
  ${medium('padding: 15px;')}
  ${large('padding: 30px 60px;')}
  @media (min-width: 768px) {
    height: ${props => (props.cardHeight ? props.cardHeight : '650px')};
  }
  img {
    height: 200px;
    width: 200px;
    margin-bottom: 15px;
    ${medium('margin-bottom: 30px;')};
    ${props => props.imageBig && 'height: auto;'};
    ${props => props.imageBig && 'width: 100%;'};
  }
  p {
    color: ${props => (props.colorWhite ? '#b4b5cc' : '#7f8198')};
    text-align: ${props => (props.textAlign ? props.textAlign : 'center')};
    margin: 15px 0 0 0;
  }
  h1 {
    font-family: 'FontLight', sans-serif;
    font-size: 30px;
    width: inherit;
    ${medium('font-size: 36px; width: 100%;')};
    ${large('width: inherit; font-size: 46px;')};
    font-weight: 300;
    line-height: 1.35;
    text-align: ${props => (props.textAlign ? props.textAlign : 'center')};
    color: #2d4051;
    margin: 15px 0 0 0;
    color: ${props => (props.colorWhite ? 'white' : '#2d4051')};
  }
  &:hover {
    box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.07);
  }
`;

export default Card;
