import React from 'react';
import Section from '../General/Section';
import Entry from './Entry';
import styled from 'styled-components';
import {breakpoint, Badge, DropDown} from '@aragon/ui';
const medium = css => breakpoint('medium', css);

class AragonClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: 0};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(index) {
    this.setState({active: index});
  }

  render() {
    const {active} = this.state;
    return (
      <RoadmapSection>
        <Container>
          <DropdownContainer>
            <h4>Select Flock teams</h4>
            <div className="dropdown-container">
              <DropDown
                className="flock-dropdown"
                items={['All', 'Aragon One', 'Autark']}
                active={this.state.active}
                onChange={this.handleChange}
              />
            </div>
          </DropdownContainer>
          <RoadmapContainer>
            <Entry entrypoint>
              <Title>Current</Title>
              <Subtitle>
                Granular areas of focus with well defined scope and product
                specifications.
              </Subtitle>
            </Entry>

            {(this.state.active == 0 || this.state.active == 1) && (
              <Entry>
                <Module>
                  <div className="badge-container">
                    <StyledBadge className="green">
                      Mobile experience
                    </StyledBadge>
                    <AragonOneBadge>Aragon One</AragonOneBadge>
                  </div>
                  <h3>Responsive view</h3>
                  <h4>
                    Make the platform and core apps responsive so Aragon can be
                    used from mobile browsers such as Status or Cipher.
                  </h4>
                </Module>
              </Entry>
            )}
            {(this.state.active == 0 || this.state.active == 1) && (
              <Entry>
                <Module>
                  <div className="badge-container">
                    <StyledBadge className="acuamarine">
                      Identity experience
                    </StyledBadge>
                    <AragonOneBadge>Aragon One</AragonOneBadge>
                  </div>
                  <h3>Local identity (custom labels) </h3>
                  <h4>
                    As an intermediate solution for the full Aragon identity
                    experience, we will allow people to create custom local
                    labels to identify addresses that represent different
                    members of the organization.
                  </h4>
                </Module>
              </Entry>
            )}
            {(this.state.active == 0 || this.state.active == 2) && (
              <Entry>
                <Module>
                  <div className="badge-container">
                    <AutarkBadge>Autark</AutarkBadge>
                  </div>
                  <h3>Finalize Planning Suite</h3>
                  <h4>
                    Finalize the development of the Planning Suite, which
                    enables issue curation, allocating bounties as a DAO,
                    budgeting via range voting, and on-chain mapping of
                    human-readable names to Ethereum addresses.
                  </h4>
                </Module>
              </Entry>
            )}
            {(this.state.active == 0 || this.state.active == 1) && (
              <Entry>
                <Module>
                  <div className="badge-container">
                    <StyledBadge className="brown">App center</StyledBadge>
                    <AragonOneBadge>Aragon One</AragonOneBadge>
                  </div>
                  <h3>Upgrading apps from the UI</h3>
                  <h4>
                    Provide users with a secure way to upgrade app versions,
                    fixes for features or enhancements to already installed/in
                    use apps.
                  </h4>
                </Module>
              </Entry>
            )}
            {(this.state.active == 0 || this.state.active == 1) && (
              <Entry>
                <Module>
                  <div className="badge-container">
                    <StyledBadge>Agent application</StyledBadge>
                    <AragonOneBadge>Aragon One</AragonOneBadge>
                  </div>
                  <h3>Agent application</h3>
                  <h4>
                    This application will enable organizations to interact
                    natively with other web3 applications (including other
                    Aragon organizations).
                  </h4>
                </Module>
              </Entry>
            )}
            {(this.state.active == 0 || this.state.active == 2) && (
              <Entry>
                <Module>
                  <div className="badge-container">
                    <AutarkBadge>Autark</AutarkBadge>
                  </div>
                  <h3>Rewards App</h3>
                  <h4>
                    Allow organizations to distribute payments to token holders
                    based on the number of tokens earned in a specific period
                    (one-time reward) or based on total holdings (dividend).
                  </h4>
                </Module>
              </Entry>
            )}
            {(this.state.active == 0 || this.state.active == 1) && (
              <Entry>
                <Module>
                  <div className="badge-container">
                    <StyledBadge className="yellow">
                      UX improvements
                    </StyledBadge>
                    <AragonOneBadge>Aragon One</AragonOneBadge>
                  </div>
                  <h3>Payroll app</h3>
                  <h4>
                    This app will allow organizations to manage on-chain salary
                    payments and for employees to request payments and see their
                    available balance.
                  </h4>
                </Module>
              </Entry>
            )}
            {(this.state.active == 0 || this.state.active == 1) && (
              <Entry>
                <Module>
                  <div className="badge-container">
                    <StyledBadge className="yellow">
                      UX improvements
                    </StyledBadge>
                    <AragonOneBadge>Aragon One</AragonOneBadge>
                  </div>
                  <h3>Notifications & user feedback</h3>
                  <h4>
                    Implement an activity panel that will provide people
                    information about ongoing and past transactions as well as a
                    toast component for immediate feedback on users’ actions.
                  </h4>
                </Module>
              </Entry>
            )}
            {(this.state.active == 0 || this.state.active == 1) && (
              <Entry>
                <Module>
                  <div className="badge-container">
                    <StyledBadge className="yellow">
                      UX improvements
                    </StyledBadge>
                    <AragonOneBadge>Aragon One</AragonOneBadge>
                  </div>
                  <h3>Concierge project</h3>
                  <h4>
                    Guided on-boarding of projects interested in collaborate
                    with Aragon or use Aragon tools for their governance needs.
                  </h4>
                </Module>
              </Entry>
            )}
            {(this.state.active == 0 || this.state.active == 2) && (
              <Entry>
                <Module>
                  <div className="badge-container">
                    <AutarkBadge>Autark</AutarkBadge>
                  </div>
                  <h3>Organization Identity</h3>
                  <h4>
                    Allow organizations to manage their manifesto, mission
                    statement, values, code of conduct, and contact information
                    so it’s easily accessible to prospective and current members
                    of the organization.
                  </h4>
                </Module>
              </Entry>
            )}
            <Entry entrypoint>
              <Title>Near-term</Title>
              <Subtitle>
                Wider areas of focus with some flexibility on the scope.
              </Subtitle>
            </Entry>

            {(this.state.active == 0 || this.state.active == 1) && (
              <Entry>
                <Module>
                  <div className="badge-container">
                    <StyledBadge className="brown">App center</StyledBadge>
                    <AragonOneBadge>Aragon One</AragonOneBadge>
                  </div>
                  <h3>Browsing, installing & uninstalling apps</h3>
                  <h4>
                    Enhance app discovery and app management for end users.
                    Expand the on-boarding and app center experience.
                  </h4>
                </Module>
              </Entry>
            )}
            {(this.state.active == 0 || this.state.active == 1) && (
              <Entry>
                <Module>
                  <div className="badge-container">
                    <StyledBadge className="acuamarine">
                      Identity experience
                    </StyledBadge>
                    <AragonOneBadge>Aragon One</AragonOneBadge>
                  </div>
                  <h3>Individual identity</h3>
                  <h4>
                    Allow individuals to create and manage their user profiles,
                    mapping their address to a human readable name that can be
                    used to interact with apps within the organization.
                  </h4>
                </Module>
              </Entry>
            )}
            {(this.state.active == 0 || this.state.active == 2) && (
              <Entry>
                <Module>
                  <div className="badge-container">
                    <AutarkBadge>Autark</AutarkBadge>
                  </div>
                  <h3>Rich User Profiles</h3>
                  <h4>
                    Allow individuals to associate additional details to their
                    identity such as Github commit history, work history,
                    portfolios, and membership to other Aragon organizations.
                  </h4>
                </Module>
              </Entry>
            )}
            {(this.state.active == 0 || this.state.active == 2) && (
              <Entry>
                <Module>
                  <div className="badge-container">
                    <AutarkBadge>Autark</AutarkBadge>
                  </div>
                  <h3>Data Storage and Standards</h3>
                  <h4>
                    Design the implementation strategy and information
                    architecture for user profiles and contextual discussions.
                    Document infrastructure solutions and recommendations for
                    Aragon apps that require fast and queryable data that is
                    hosted on distributed storage.
                  </h4>
                </Module>
              </Entry>
            )}
            {(this.state.active == 0 || this.state.active == 1) && (
              <Entry>
                <Module>
                  <div className="badge-container">
                    <StyledBadge className="yellow">
                      UX improvements
                    </StyledBadge>
                    <AragonOneBadge>Aragon One</AragonOneBadge>
                  </div>
                  <h3>Organizations templates</h3>
                  <h4>
                    Research new organizational models, define the apps and
                    permissions required to realize them and create kits that
                    people can use.
                  </h4>
                </Module>
              </Entry>
            )}
            {(this.state.active == 0 || this.state.active == 1) && (
              <Entry>
                <Module>
                  <div className="badge-container">
                    <StyledBadge className="acuamarine">
                      Identity experience
                    </StyledBadge>
                    <AragonOneBadge>Aragon One</AragonOneBadge>
                  </div>
                  <h3>Organization identity & membership</h3>
                  <h4>
                    Allow users to create and manage their organizations’
                    profiles, providing an intuitive way to add members to a
                    given organization and granting them permissions &
                    privileges.
                  </h4>
                </Module>
              </Entry>
            )}
            {(this.state.active == 0 || this.state.active == 2) && (
              <Entry>
                <Module>
                  <div className="badge-container">
                    <AutarkBadge>Autark</AutarkBadge>
                  </div>
                  <h3>Reputation Support</h3>
                  <h4>
                    Expand governance possibilities by providing more features
                    for reputation-based organizations, including the ability to
                    allocation non-transferable tokens in place of (or in
                    addition to) traditional bounties.
                  </h4>
                </Module>
              </Entry>
            )}
            {(this.state.active == 0 || this.state.active == 1) && (
              <Entry>
                <Module>
                  <div className="badge-container">
                    <StyledBadge className="violet">
                      {' '}
                      Lorikeet design system
                    </StyledBadge>
                    <AragonOneBadge>Aragon One</AragonOneBadge>
                  </div>
                  <h3>aragonSDK: Split aragonUI and Lorikeet</h3>
                  <h4>
                    Push Lorikeet as an ecosystem-wide project, while still
                    providing an Aragon-opinionated experience with aragonUI
                  </h4>
                </Module>
              </Entry>
            )}
            {(this.state.active == 0 || this.state.active == 2) && (
              <Entry>
                <Module>
                  <div className="badge-container">
                    <AutarkBadge>Autark</AutarkBadge>
                  </div>
                  <h3>Expanded Forwarder Options</h3>
                  <h4>
                    Allow for more tightly coupled forwarder interactions where
                    the forwarded call data can be leveraged and modified within
                    the Forwarder contract.
                  </h4>
                </Module>
              </Entry>
            )}
            <Entry entrypoint>
              <Title>Future</Title>
              <Subtitle>
                High level areas of focus with a broader and flexible scope
              </Subtitle>
            </Entry>

            {(this.state.active == 0 || this.state.active == 2) && (
              <Entry>
                <Module>
                  <div className="badge-container">
                    <AutarkBadge>Autark</AutarkBadge>
                  </div>
                  <h3>Flexible App Development</h3>
                  <h4>
                    Enhance aragonAPI to support the development of apps with a
                    single front-end and multiple contracts, and for contract
                    data to be displayed across multiple user interfaces without
                    coupling at the contract level.
                  </h4>
                </Module>
              </Entry>
            )}
            {(this.state.active == 0 || this.state.active == 1) && (
              <Entry>
                <Module>
                  <div className="badge-container">
                    <StyledBadge className="green">
                      Mobile experience
                    </StyledBadge>
                    <AragonOneBadge>Aragon One</AragonOneBadge>
                  </div>
                  <h3>Native mobile app</h3>
                  <h4>
                    Build native mobile Aragon client so users can benefit from
                    device and OS specific capabilities.
                  </h4>
                </Module>
              </Entry>
            )}
            {(this.state.active == 0 || this.state.active == 1) && (
              <Entry>
                <Module>
                  <div className="badge-container">
                    <StyledBadge className="blue">
                      Flexible permissions
                    </StyledBadge>
                    <AragonOneBadge>Aragon One</AragonOneBadge>
                  </div>
                  <h3>Conditional permissions</h3>
                  <h4>
                    Allow users to set and manage time-based and conditional
                    permissions.
                  </h4>
                </Module>
              </Entry>
            )}
            {(this.state.active == 0 || this.state.active == 2) && (
              <Entry>
                <Module>
                  <div className="badge-container">
                    <AutarkBadge>Autark</AutarkBadge>
                  </div>
                  <h3>Organization Branding</h3>
                  <h4>
                    Allow organizations to customize their branding by offering
                    at least three additional color palettes, including the
                    ability to change the background image so it’s different
                    than the Aragon eagle.
                  </h4>
                </Module>
              </Entry>
            )}
            {(this.state.active == 0 || this.state.active == 1) && (
              <Entry>
                <Module>
                  <div className="badge-container">
                    <StyledBadge className="brown">App center</StyledBadge>
                    <AragonOneBadge>Aragon One</AragonOneBadge>
                  </div>
                  <h3>Incentivisation model for app developers</h3>
                  <h4>
                    Provide app developers with different monetisation models to
                    create revenue from the apps they publish in the Aragon App
                    Center.
                  </h4>
                </Module>
              </Entry>
            )}
            {(this.state.active == 0 || this.state.active == 1) && (
              <Entry>
                <Module>
                  <div className="badge-container">
                    <StyledBadge className="blue">
                      Flexible permissions
                    </StyledBadge>
                    <AragonOneBadge>Aragon One</AragonOneBadge>
                  </div>
                  <h3>Budgeting app</h3>
                  <h4>
                    Enable organizations to plan and control their financial
                    resources by setting time based permissions like budgeting.
                  </h4>
                </Module>
              </Entry>
            )}
            {(this.state.active == 0 || this.state.active == 2) && (
              <Entry>
                <Module>
                  <div className="badge-container">
                    <AutarkBadge>Autark</AutarkBadge>
                  </div>
                  <h3>Contextual Discussions</h3>
                  <h4>
                    Develop a design pattern and component for contextual
                    discussions within Aragon, and implement it one application
                    to showcase the feature, such as the Voting app.
                  </h4>
                </Module>
              </Entry>
            )}
            {(this.state.active == 0 || this.state.active == 1) && (
              <Entry>
                <Module>
                  <div className="badge-container">
                    <StyledBadge className="grey">
                      Developer resources
                    </StyledBadge>
                    <AragonOneBadge>Aragon One</AragonOneBadge>
                  </div>
                  <h3>aragonOS: Global emergency failsafe</h3>
                  <h4>
                    Provide an opt-in failsafe for organizations and individual
                    apps to safely freeze their state during times of emergency.
                  </h4>
                </Module>
              </Entry>
            )}
            {(this.state.active == 0 || this.state.active == 1) && (
              <Entry>
                <Module>
                  <div className="badge-container">
                    <StyledBadge className="grey">
                      Developer resources
                    </StyledBadge>
                    <AragonOneBadge>Aragon One</AragonOneBadge>
                  </div>
                  <h3>aragonSDK: Continuously improve developer experience</h3>
                  <h4>
                    Reduce time for developers to get up and running with using
                    the aragonSDK and add features they request to it.
                  </h4>
                </Module>
              </Entry>
            )}
            <Entry lastpoint />
          </RoadmapContainer>
        </Container>
      </RoadmapSection>
    )
  }
}

const DropdownContainer = styled.div`
  display: flex;
  max-width: 870px;
  margin: auto;
  padding: 0px 55px;
  flex-direction: column;
  margin-bottom: 50px;
  div.dropdown-container {
    text-align: left;
    width: 100%;
    ${medium('width: calc(100% - 207px);')};
    div {
      min-width: 100% !important;
    }
  }
  ${medium('flex-direction: row;')};

  h4 {
    line-height: 42px;
    font-size: 18px;
    color: #2d4051;
    font-weight: 700;
    padding-right: 30px;
  }
  .flock-dropdown {
    width: 100%;
    outline: none;
    text-align: left;
    ${medium('width: calc(100% - 207px);')};
  }
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
`;

const AragonOneBadge = styled(Badge)`
  background: #f7837140;
  color: #b2565d;
  margin-left: 10px;
`;
const StyledBadge = styled(Badge)`
  &.blue {
    background: #d5e8ff80;
    color: #4188dc;
  }
  &.brown {
    background: #dca97c80;
    color: #b5753a;
  }
  &.green {
    background: #aae06d80;
    color: #069b4c;
  }
  &.violet {
    background: #f7d0ff80;
    color: #a64bb8;
  }
  &.acuamarine {
    background: #a3f2e080;
    color: #49a792;
  }
  &.grey {
    background: #d8d8d880;
    color: #8b8b8b;
  }
  &.yellow {
    background: #fff36280;
    color: #afa63c;
  }
`;

const AutarkBadge = styled(Badge)`
  background: #f5a62340;
  color: #af7e2e;
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

export default AragonClient;
