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
            Granular areas of focus with well defined scope and product
            specifications.
          </Subtitle>
        </Entry>
        <Entry>
          <Module>
            <div className="badge-container">
              <EnhancedBadge>Enhanced voting</EnhancedBadge>
              <AragonOneBadge>Aragon One</AragonOneBadge>
            </div>
            <h3>Delegative Voting</h3>
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
            <h3>Staking and token locking</h3>
            <h4>
              Provides a secure foundation for managing collateral deposits
              for agreements while allowing collateral assets to be used in to
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
            <h3>Aragon Court v1</h3>
            <h4>
              The initial Aragon Court protocol running on the EVM, with an
              interface for organizations to create agreements and disputes
              as well as an interface for jurors to review disputes and adjudicate
              cases.
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
            <h3>Agreements</h3>
            <h4>
              Aragon Agreements are a core component of the Aragon Network,
              they enable users to define human-readable obligations and lock
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
            <h3>Voting Relay Protocol</h3>
            <h4>
              Family of layer 2 protocols to increase the scalability of
              voting by deferring most of the tallying computation to a set
              of bonded relayers that process votes off-chain.
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
    width: 2px;
    background: #d8d8d8;
    ${medium('left: 21px;')};
  }
  &:after {
    content: '';
    display: table;
    clear: both;
  }
`

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
    text-align: right;
  }
`;

export default AragonNetwork;
