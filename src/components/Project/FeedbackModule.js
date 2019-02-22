import React from 'react';
import Section from '../General/Section';
import LongCard from '../General/LongCard';
import styled from 'styled-components';
import {breakpoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);
import speech from './assets/speech.svg';

const FeedbackModule = () => (
  <StyledSection>
    <Container>
      <Feedback>
        <ImageContainer>
          <img src={speech} />
        </ImageContainer>
        <div>
          <h1>We value the feedback & ideas from the community</h1>
          <span>
            <p>
              Please let us know if there something important for you that is
              not included in this roadmap and we’ll take it into consideration
              when planning our quaterly efforts.
            </p>
            <p>
              <a
                className="action-button"
                href="https://forum.aragon.org"
                target="_blank">
                <span>
                  Join the Aragon forum{' '}
                  <img
                    src={require(`../General/assets/arrow.svg`)}
                    alt="feedback"
                  />
                </span>
              </a>
            </p>
          </span>
        </div>
      </Feedback>
    </Container>
  </StyledSection>
);

const StyledSection = styled(Section)`
  padding: 100px 15px;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  ${medium(
    'grid-template-columns: calc(50% - 15px) calc(50% - 15px); grid-template-rows: auto'
  )};
`;

const Feedback = styled.div`
  border-radius: 12px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.07);
  background-color: #f9fafc;
  padding: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  grid-column-start: 1;
  grid-column-end: 2;
  transition: all 0.25s ease-in-out;
  ${medium('padding: 30px 15px; grid-column-end: 3; flex-direction: row;')};
  ${large('padding: 30px 60px;')};
  &:hover {
    box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.07);
    transition: all 0.25s ease-in-out;
  }
  p {
    font-family: 'FontRegular', sans-serif;
    font-size: 16px;
    line-height: 1.75;
    letter-spacing: 0.1px;
    text-align: left;
    color: #7f8198;
  }
  h1 {
    font-family: 'FontLight', sans-serif;
    font-size: 30px;
    max-width: 535px;
    font-weight: 300;
    line-height: 1.35;
    text-align: left;
    color: #2d4051;
    margin: 15px 0 0 0;
    ${medium('font-size: 46px;')};
  }
`;
const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${medium('width: 50%;')};
  img {
    max-width: 100%;
    height: auto;
    margin: 15px 0;
  }
`;

export default FeedbackModule;
