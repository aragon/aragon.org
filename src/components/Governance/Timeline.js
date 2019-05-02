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

const TimelineBox = styled.div`
  width: 100%;
  margin: 0;
  padding: 50px 0;
  ${medium('padding: 50px 8.5%;')};
  background: #f9fafc;
  text-align: center;
`;

const Box = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.0245131);
  border-radius: 6px;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  div {
    margin-left: 30px;
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
`;
const Timeline = () => (
  <TimelineBox>
    <TimelineContainer>
      <Entry title="Stage i">
        <Box>
          <img src={stage1} />
          <div>
            <h6>Select AGP Track</h6>
            <h5>
              Before you spend time working on a proposal, make sure the
              proposal complies with AGP-1 and has a chance of passing review by
              the AGP Editors and your peers.{' '}
            </h5>
          </div>
        </Box>
      </Entry>
      <Entry title="Stage ii">
        <Box>
          <img src={stage2} />
          <div>
            <h6>Pre-proposal</h6>
            <h5>
              During Stage II you should seek feedback on your AGP idea by
              sharing it with your peers in the Aragon community and soliciting
              their feedback. Be open-minded and respectful of all feedback you
              receive.
            </h5>
          </div>
        </Box>
      </Entry>
      <Entry title="Stage iii">
        <Box>
          <img src={stage3} />
          <div>
            <h6>Draft Proposal</h6>
            <h5>
              After you have asked the Aragon community whether an idea has any
              chance of support and have received sufficient feedback to feel
              confident going forward, you can create a draft AGP as a pull
              request to the AGP repo.
            </h5>
          </div>
        </Box>
      </Entry>
      <Entry title="Stage iv">
        <Box>
          <img src={stage4} />
          <div>
            <h6>Final Proposal</h6>
            <h5>
              The Association board review session begins two weeks before the
              next Aragon vote cycle is scheduled to begin and ends one week
              before the next vote cycle is scheduled to begin.
            </h5>
          </div>
        </Box>
      </Entry>
      <Entry title="Stage v">
        <Box>
          <img src={stage5} />
          <div>
            <h6>Aragon Network Vote</h6>
            <h5>
              All AGPs that have moved to Stage V since the last Aragon Network
              vote cycle and have been approved by the Association board are
              included on the ballot in the current vote cycle.
            </h5>
          </div>
        </Box>
      </Entry>
    </TimelineContainer>
  </TimelineBox>
);

export default Timeline;
