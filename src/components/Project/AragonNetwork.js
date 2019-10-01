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
        <Entry entrypoint>
          <Title>Current</Title>
          <Subtitle>
            Granular areas of focus with well-defined scope and product
            specifications.
          </Subtitle>
        </Entry>
        <Entry>
          <Module>
            <div className="badge-container">
              <EnhancedBadge>Enhanced voting</EnhancedBadge>
              <AragonOneBadge>Aragon One</AragonOneBadge>
            </div>
            <h3>Delegate voting</h3>
            <h4>
              Allow people to delegate their voting power to delegates (i.e.
              representatives) who can vote on their behalf and continue
              experimenting with new voting mechanisms.
            </h4>
          </Module>
        </Entry>
        <Entry>
          <Module>
            <div className="badge-container">
              <Badge>Dispute Resolution</Badge>
              <AragonOneBadge>Aragon One</AragonOneBadge>
            </div>
            <h3>Staking and Lock Managers</h3>
            <h4>
              Provides a secure foundation for managing collateral deposits for
              agreements while allowing collateral assets to be used in to
              participate in governance.
            </h4>
          </Module>
        </Entry>
        <Entry>
          <Module>
            <div className="badge-container">
              <Badge>Dispute Resolution</Badge>
              <AragonOneBadge>Aragon One</AragonOneBadge>
            </div>
            <h3>Aragon Court PoC</h3>
            <h4>
              This deliverable includes the Aragon Court protocol, an interface
              for users of the court to review and manage agreements and
              disputes, and an interface for jurors to participate in the
              arbitration process.
            </h4>
          </Module>
        </Entry>
        <Entry entrypoint>
          <Title>Near-term</Title>
          <Subtitle>
            Wider areas of focus with some flexibility on the scope.
          </Subtitle>
        </Entry>
        <Entry>
          <Module>
            <div className="badge-container">
              <Badge>Dispute Resolution</Badge>
              <AragonOneBadge>Aragon One</AragonOneBadge>
            </div>
            <h3>Proposals agreements</h3>
            <h4>
              Aragon Agreements are a core component of the Aragon Network, they
              enable users to define human-readable obligations and lock
              collateral to provide assurances to their counterparties.
            </h4>
          </Module>
        </Entry>
        <Entry>
          <Module>
            <div className="badge-container">
              <EnhancedBadge>Enhanced Voting</EnhancedBadge>
              <AragonOneBadge>Aragon One</AragonOneBadge>
            </div>
            <h3>Vote Relay Protocol</h3>
            <h4>
              Improve the experience and scalability of voting by implementing a
              protocol for votes to be submitted to a set of bonded relayers.
            </h4>
          </Module>
        </Entry>
        <Entry entrypoint>
          <Title>Future</Title>
          <Subtitle>
            High level areas of focus with a broader and flexible scope
          </Subtitle>
        </Entry>
        <Entry>
          <Module>
            <div className="badge-container">
              <EnhancedBadge className="orange">Fundraising</EnhancedBadge>
              <AragonBlackBadge>Aragon Black</AragonBlackBadge>
            </div>
            <h3>Discovery/ curation platform</h3>
            <h4>
              Develop an Aragon Network-wide fundraising platform allowing
              Aragon users to discover, curate, and invest in organizations.
            </h4>
          </Module>
        </Entry>
        <Entry>
          <Module>
            <div className="badge-container">
              <AragonBlackBadge>Aragon Black</AragonBlackBadge>
            </div>
            <h3>Linking fee and insurance</h3>
            <h4>
              Design and discuss an ANT-based token economics model for aragonPM
              registries, relying on linking fees and an insurance system.
            </h4>
          </Module>
        </Entry>
        <Entry lastpoint />
      </RoadmapContainer>
    </Container>
  </RoadmapSection>
);

const EnhancedBadge = styled(Badge)`
  background: #d5e8ff80;
  color: #4188dc;

  &.orange {
    background: #ffca7280;
    color: #e4971a;
  }
`;
const AragonBlackBadge = styled(Badge)`
  background: #00000030;
  color: black;
  margin-left: 10px;
`;

const RoadmapContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  max-width: 870px;
  padding: 0;
  position: relative;
  margin: auto;
  ${medium('padding: 5px 50px;')};

  &:before {
    content: '';
    position: absolute;
    top: 12px;
    left: 9px;
    bottom: 20px;
    width: 1px;
    background: rgba(96, 128, 156, 0.152004);
    ${medium('left: 21.5px;')};
  }
  &:after {
    content: '';
    display: table;
    clear: both;
  }
`;

const AragonOneBadge = styled(Badge)`
  background: #f7837140;
  color: #b2565d;
  margin-left: 10px;
`;

const AutarkBadge = styled(Badge)`
  background: #f7837140;
  color: #b2565d;
  margin-right: 10px;
`;

const RoadmapSection = styled(Section)`
  background: #f9fafc;
  margin-top: -25px;
  z-index: -1;
`;
const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 50px 0;
  text-align: center;
  ${medium('padding: 50px 8.5%;')};
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
  h3 {
    line-height: 42px;
    font-size: 20px;
    color: #2d4051;
    font-weight: 600;
  }
  h4 {
    line-height: 28px;
    font-size: 15px;
    color: #60809c;
    text-align: left;
  }
  .badge-container {
    padding-top: 10px;
    text-align: left;

    display: flex;
    min-height: 40px;
    align-items: flex-start;
    justify-content: flex-start;
    ${medium('text-align: right; display: inherit; min-height: auto;')}
  }
`;

export default AragonNetwork;
