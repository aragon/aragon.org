import React from 'react';
import TimelineContainer from './TimelineContainer';
import Entry from './Entry';
import {theme, breakpoint, Badge} from '@aragon/ui';
import styled from 'styled-components';
const medium = css => breakpoint('medium', css);

import stage1 from './assets/stage1.svg';
import stage2 from './assets/stage2.svg';
import stage3 from './assets/stage3.svg';
import stage4 from './assets/stage4.svg';
import stage5 from './assets/stage5.svg';

const Timeline = () => (
  <TimelineBox>
    <TimelineContainer>
      <Entry title="Stage i">
        <Box>
          <StageImg src={stage1} />
          <div>
            <h6>Select AGP Track</h6>
            <h5>
              Before you spend time working on a proposal, make sure the
              proposal complies with AGP-1 and has a chance of passing review by
              the AGP Editors and your peers.{' '}
            </h5>
            <a
              target="_blank"
              href="https://github.com/aragon/AGPs/blob/master/AGPs/AGP-1.md">
              <span>
                AGP-1 <img src={require(`../General/assets/arrow.svg`)} />
              </span>
            </a>
          </div>
        </Box>
      </Entry>
      <Entry title="Stage ii">
        <Box>
          <StageImg src={stage2} />
          <div>
            <h6>Pre-proposal</h6>
            <h5>
              During Stage II you should seek feedback on your AGP idea by
              sharing it with your peers in the Aragon community and soliciting
              their feedback. Be open-minded and respectful of all feedback you
              receive.
            </h5>
            <a target="_blank" href="https://forum.aragon.org/c/agps">
              <span>
                Aragon forum{' '}
                <img src={require(`../General/assets/arrow.svg`)} />
              </span>
            </a>
          </div>
        </Box>
      </Entry>
      <Entry title="Stage iii">
        <Box>
          <StageImg src={stage3} />
          <div>
            <h6>Draft Proposal</h6>
            <h5>
              After you have asked the Aragon community whether an idea has any
              chance of support and have received sufficient feedback to feel
              confident going forward, you can create a draft AGP as a pull
              request to the AGP repo.
            </h5>
            <a target="_blank" href="https://github.com/aragon/AGPs/pulls">
              <span>
                Draft AGPs <img src={require(`../General/assets/arrow.svg`)} />
              </span>
            </a>
          </div>
        </Box>
      </Entry>
      <Entry title="Stage iv">
        <Box>
          <StageImg src={stage2} />
          <div>
            <h6>Community Review</h6>
            <h5>
              All proposals must go through a mandatory one-week community review period
              before they are finalized, to ensure the community has an opportunity to give
              feedback and influence the final proposal language. Listen to community feedback
              and adjust the proposal as needed to increase its odds of being approved.
            </h5>
            <a
              target="_blank"
              href="https://forum.aragon.org/c/agps">
              <span>
                AGP discussions{' '}
                <img src={require(`../General/assets/arrow.svg`)} />
              </span>
            </a>
          </div>
        </Box>
      </Entry>                               
      <Entry title="Stage v">
        <Box>
          <StageImg src={stage4} />
          <div>
            <h6>Final Proposal</h6>
            <h5>
              The Association board review session begins two weeks before the
              next Aragon vote cycle is scheduled to begin and ends one week
              before the next vote cycle is scheduled to begin.
            </h5>
            <a
              target="_blank"
              href="https://github.com/aragon/AGPs/blob/master/aa_board_review.md">
              <span>
                Board review{' '}
                <img src={require(`../General/assets/arrow.svg`)} />
              </span>
            </a>
          </div>
        </Box>
      </Entry>
    </TimelineContainer>
    <LastContainer>
      <Entry title="Stage vi" className="stage5-box">
        <Box id="stage5-box">
          <StageImg src={stage5} />
          <div>
            <h6>Aragon Network Vote</h6>
            <h5>
              All AGPs that have moved to Stage V since the last Aragon Network
              vote cycle and have been approved by the Association board are
              included on the ballot in the current vote cycle.
            </h5>
            <a
              target="_blank"
              href="https://blog.aragon.org/tag/governance-proposals/">
              <span>
                Vote announcements{' '}
                <img src={require(`../General/assets/arrow.svg`)} />
              </span>
            </a>
          </div>
        </Box>
      </Entry>
    </LastContainer>
  </TimelineBox>
);

const LastContainer = styled.div`
  width: 100%;
  max-width: 870px;
  margin: auto;
  padding: 0;
  ${medium('padding: 5px 50px;')};
`;
const TimelineBox = styled.div`
  width: 100%;
  margin: 0;
  padding: 50px 0;
  ${medium('padding: 50px 8.5%;')};
  background: #f9fafc;
  text-align: center;
`;
const StageImg = styled.img`
  height: 158px;
`;

const Box = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.0245131);
  border-radius: 6px;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  ${medium('flex-direction: row;')};
  margin-top: 20px;
  max-width: 95%;
  div {
    margin-left: 0px;
    margin-top: 20px;
    ${medium('margin-left: 30px; margin-top: 0;')};
  }

  h5 {
    font-size: 16px;
    line-height: 28px;
    color: #60809c;
  }
  h6 {
    font-size: 22px;
    line-height: 42px;
    color: #2d4051;
  }
  a {
    font-size: 16px;
    line-height: 3;
    text-align: center;
    color: #007bff!important;
  }
`;

export default Timeline;
