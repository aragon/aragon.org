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
    cardHeight={props.cardHeight ? props.cardHeight : false}
    className={props.className}
    >
    <img src={require(`../${props.imageUrl}.svg`)} />
    {props.label && (
      <div className="label">
        <p>{props.label}</p>
      </div>
    )}
    <h1>{props.title}</h1>
    <h1>{props.content}</h1>
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
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
  transition: all 0.25s ease-in-out;
  @media (min-width: 768px) {
    height: ${props => (props.cardHeight ? props.cardHeight : '500px')};
  }
  img {
    height: 130px;
    width: 130px;
    margin: 0 auto;
  }
  p {
    font-size: 16px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.24px;
    color: #6D7693;
  }
  h1 {
    font-size: 38px;
    line-height: 42px;
    text-align: center;
    letter-spacing: -0.447059px;
        margin: 16px 0 5px;
    color: #212B36;
    font-family: 'FontMedium', sans-serif;

  }
`;

export default Card;
