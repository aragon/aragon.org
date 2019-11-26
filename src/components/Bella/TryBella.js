import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-static';
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';
import Section from '../General/Section';
import video from './assets/promo-video.mp4';

import {breakpoint, BreakPoint, Button} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const Video = () => (
  <VideoeSection>
    <Box>
      <Container>
        <BreakPoint to="medium">
          <video playsInline autoPlay muted loop>
            <source src={video} type="video/mp4" />
          </video>
        </BreakPoint>
        <h2>
          <FormattedHTMLMessage
            id="bella.try-bella.title"
            defaultMessage="Try Aragon 0.7 <br />Bella now"
          />
        </h2>
        <h4>
          <FormattedMessage
            id="bella.try-bella.content"
            defaultMessage="Aragon empowers you to freely organize and collaborate. Create global, bureaucracy-free organizations, companies, and communities."
          />
        </h4>
        <div className="hero-button-container left">
          <a
            className="principal-button"
            href="https://mainnet.aragon.org/"
            target="_blank">
            <FormattedMessage
              id="bella.try-bella.action"
              defaultMessage="Try Bella now"
            />
          </a>
        </div>
      </Container>
      <BreakPoint from="medium">
        <video playsInline autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </BreakPoint>
    </Box>
  </VideoeSection>
);

const VideoeSection = styled(Section)`
  background-color: #95bbce;
  background: linear-gradient(
    334.64deg,
    #95bbce -0.56%,
    #c5d0e6 46.04%,
    #e7e4f6 100%
  );
  background-size: cover;
  min-height: 675px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  ${large('flex-direction: row;')};
  video {
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.07);
    max-width: 90%;
    border-radius: 8px;
    ${medium('margin-top: 30px; max-width: 70%;')};
    ${large('max-width: 56%;')};
  }
`;
const Container = styled.div`
  width: 100%;
  text-align: center;
  margin: auto;
  ${large('text-align: left; margin: inherit; padding-right: 30px;')};
  h2 {
    text-align: center;
    ${large('text-align: left;')};
    line-height: 1.2;
  }
  h4 {
    text-align: center;
    ${large('text-align: left;')};
  }
`;
const Image = styled.img`
  max-width: 100%;
`;

export default Video;
