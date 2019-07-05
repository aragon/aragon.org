import React from 'react';
import styled from 'styled-components';
import Section from '../General/Section';
import blankDAO from './home-assets/blankDAO.png';
import { Badge } from '@aragon/ui'

const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const UseCases = () => (
  <UseCasesSection>
    <Container>
      <UseCase>
        <img src={blankDAO}/>
        <div>
          <UseCasesBadge>USE CASE</UseCasesBadge>
          <h2>BlankDAO: From Iran to the world <span role="img" aria-label="glow">✨</span></h2>
          <p>
            Discover how Aragon enabled a group of talented developers from Iran
            and other countries to raise funds transparently from their
            community.
          </p>
          <a className="secondary-button" href="./discover">
            Go to BlankDAO
          </a>
        </div>
      </UseCase>
    </Container>
  </UseCasesSection>
);

const UseCasesBadge = styled(Badge)`
  background: #C4E5DF80!important;
  color: #459D85!important;
  padding: 1px 15px 0!important;
  line-height: 2!important;
`
const UseCasesSection = styled(Section)`
  background-color: white;
`;

const Container = styled.div`
  img {
    max-width: 100%;
  }
`;
const UseCase = styled.div`
  background: #f9fafc;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.0726053);
  border-radius: 12px;
  display: flex;
  overflow: hidden;
  div {
    padding: 60px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  img {
    max-height: 534px;
  }
  h2 {
    font-family: 'FontMedium';
    font-size: 46px;
    line-height: 59px;
    letter-spacing: -0.564706px;
    color: #212b36;
    text-align: left;
  }

  p {
    font-family: 'FontRegular';
    font-size: 21px;
    text-align: left;
    line-height: 35px;
    max-width: 500px;
    color: #6d7693;
    margin-bottom: 65px;
  }
`;

export default UseCases;
