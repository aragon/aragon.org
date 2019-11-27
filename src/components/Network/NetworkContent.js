import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-static';
import Fade from 'react-reveal/Fade';
import Section from '../General/Section';
import styled from 'styled-components';
import {breakpoint, BreakPoint} from '@aragon/ui';
import juror from './assets/juror.svg';
import ant from './assets/ant.svg';

const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const mudule1Content = (
  <React.Fragment>
    <img className="principal-image" src={juror} />
    <div className="wrapper">
      <h1>Aragon Court</h1>
      <div className="content">
        <span>
          <p>
            Aragon Court is a dispute resolution protocol that runs on Ethereum.
            It's one of the core components of the Aragon Network.
          </p>
          <p>
            <a className="action-button" href="" target="_blank">
              <span>
                Become a Juror{' '}
                <img src={require(`../General/assets/arrow.svg`)} />
              </span>
            </a>
          </p>
        </span>
      </div>
    </div>
  </React.Fragment>
);
const mudule2Content = (
  <React.Fragment>
    <img className="principal-image" src={ant} />
    <div className="wrapper">
      <h1>Aragon Chain</h1>
      <div className="content">
        <span>
          <p className="content">
            A public blockchain optimized for Aragon organizations
          </p>
          <p>
            <a
              className="action-button"
              href="https://wiki.aragon.org/jobs"
              target="_blank">
              <span>
                Become a Validator{' '}
                <img src={require(`../General/assets/arrow.svg`)} />
              </span>
            </a>
          </p>
        </span>
      </div>
    </div>
  </React.Fragment>
);

const About = () => (
  <AboutSection>
    <CardContainer>
      <div className="juror">
        <BreakPoint to="medium">
          <Card>{mudule1Content}</Card>
        </BreakPoint>
        <BreakPoint from="medium">
          <Fade delay={100}>
            <Card>{mudule1Content}</Card>
          </Fade>
        </BreakPoint>
      </div>
      <div className="chain">
        <BreakPoint to="medium">
          <Card>{mudule2Content}</Card>
        </BreakPoint>
        <BreakPoint from="medium">
          <Fade delay={100}>
            <Card>{mudule2Content}</Card>
          </Fade>
        </BreakPoint>
      </div>
    </CardContainer>
  </AboutSection>
);

const AboutSection = styled(Section)`
  padding: 30px 15px 90px 15px;
`;

const CardContainer = styled.div`
  display: grid !important;
  ${medium(
    'grid-template-columns: calc(50% - 15px) calc(50% - 15px); grid-template-rows: 650px;'
  )};
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  span img {
    width: auto;
  }
  .chain p.content {
    max-width: 300px;
    min-height: 84px;
    margin: 15px auto;
  }
`;

const Card = styled.div`
  border-radius: 12px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.07);
  background-color: #f9fafc;
  overflow: hidden;
  .principal-image {
    width: 100% !important;
    height: auto;
  }
  p {
    color: #7f8198;
    text-align: center;
    margin: 15px 0 0 0;
  }
  h1 {
    font-family: 'FontLight', sans-serif;
    font-size: 30px;
    width: inherit;
    font-weight: 300;
    line-height: 1.35;
    text-align: center;
    color: #2d4051;
    margin: 15px 0 0 0;
    ${medium('font-size: 36px; width: 100%;')};
    ${large('width: inherit; font-size: 46px;')};
  }
  &:hover {
    box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.07);
  }
  div.wrapper {
    padding: 30px;
  }
`;
export default About;
