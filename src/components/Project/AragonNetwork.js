import React from 'react';
import Section from '../General/Section';
import Entry from './Entry';
import styled from 'styled-components';
import {breakpoint, Badge} from '@aragon/ui';
const medium = css => breakpoint('medium', css);

const AragonNetwork = () => (
  <RoadmapSection>
    <Container>
      <RoadmapContainer>
        <div className="roadmap-container">
          <Entry entrypoint>
            <Title>Current (Q1)- aragon network</Title>
            <Subtitle>
              After a product is validated, it will be available for
              visualization on the Dashboard and been added to publication
              plans.
            </Subtitle>
          </Entry>
          <Entry>
            <Module>
              <div className="badge-container">
                <Badge>App center experience</Badge>
              </div>
              <h1>Responsive UI</h1>
              <h3>
                Make the platform and core apss responsive so Aragon can be used
                from mobile browsers such as Status or Coinbase Wallet.
              </h3>
            </Module>
          </Entry>
          <Entry>
            <Module>
              <div className="badge-container">
                <Badge>App center experience</Badge>
              </div>
              <h1>Individual identity: User profiles</h1>
              <h3>
                Allow individuals to create and manage their user profiles,
                mapping their address to a human readable ENS name that can be
                used to interact with apps within the organization.
              </h3>
            </Module>
          </Entry>
          <Entry>
            <Module>
              <div className="badge-container">
                <AragonOneBadge>Aragon One</AragonOneBadge>
                <Badge>App center experience</Badge>
              </div>
              <h1>Upgrading apps</h1>
              <h3>
                Provide users with a secure way to upgrade app versions, fixes
                for feature or enhancements to already installed/in use
                applications.
              </h3>
            </Module>
          </Entry>
          <Entry entrypoint>
            <Title>Near-term (Q2 & Q3)</Title>
            <Subtitle>
              After a product is validated, it will be available for
              visualization on the Dashboard and been added to publication
              plans.
            </Subtitle>
          </Entry>
        </div>
      </RoadmapContainer>
    </Container>
  </RoadmapSection>
);

const RoadmapContainer = styled.div`
  margin-top: 50px;
  .roadmap-container {
    width: 100%;
    max-width: 870px;
    padding: 0;
    ${medium('padding: 5px 50px;')};
    position: relative;
    margin: auto;
  }
  .roadmap-container:before {
    content: '';
    position: absolute;
    top: 12px;
    left: 9px;
    ${medium('left: 21px;')};
    bottom: 0px;
    width: 2px;
    background: #ddd;
  }
  .roadmap-container:after {
    content: '';
    display: table;
    clear: both;
  }
`;

const AragonOneBadge = styled(Badge)`
  background: #f7837140;
  color: #b2565d;
  margin-right: 10px;
`;

const AutarkBadge = styled(Badge)`
  background: #f7837140;
  color: #b2565d;
  margin-right: 10px;
`;

const RoadmapSection = styled(Section)`
  background: #f9fafc;
`;
const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 50px 0;
  ${medium('padding: 50px 8.5%;')};
  text-align: center;
`;

const Title = styled.h1`
  line-height: 26px;
  font-size: 14px;
  color: #2d4051;
  margin: 0;
  margin-bottom: 10px;
  font-weight: 600;
`;

const Subtitle = styled.h6`
  line-height: 28px;
  font-size: 14px;
  color: #60809c;
  max-width: 350px;
`;

const Module = styled.div`
  background: #ffffff;
  border-radius: 6px;
  width: 100%;
  height: auto;
  padding: 0 30px 30px 30px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.07);
  &:hover {
    box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.07);
    transition: all 0.25s ease-in-out;
  }
  h1 {
    line-height: 42px;
    font-size: 20px;
    color: #2d4051;
    font-weight: 600;
  }
  h3 {
    line-height: 28px;
    font-size: 15px;
    color: #60809c;
  }
  .badge-container {
    padding-top: 10px;
    text-align: right;
  }
`;

export default AragonNetwork;
