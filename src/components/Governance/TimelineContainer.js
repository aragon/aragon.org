import React from 'react'
import PropTypes from 'prop-types'
import { theme, breakpoint } from '@aragon/ui'
import styled from 'styled-components'

const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const TimelineContainer = styled.div`
  margin-top: 50px;
  .timeline {
    width: 100%;
    max-width: 870px;
    padding: 0;
    ${medium('padding: 5px 50px;')};
    position: relative;
    margin: auto;
  }
  .timeline:before {
    content: '';
    position: absolute;
    top: 12px;
    left: 23px;
    ${medium('left: 41px;')};
    bottom: 0px;
    height: calc(100% + 8px);
    width: 1px;
    background: #D8D8D8;
  }
  .timeline:after {
    content: "";
    display: table;
    clear: both;
  }
`;

const Timeline = ({ className, ...props }) => {
  const containerProps = { className }

  return (
    <TimelineContainer {...containerProps}>
      <div className="timeline">
        <div {...props} />
      </div>
    </TimelineContainer>
  );
};

Timeline.propTypes = {
  className: PropTypes.string,
};

export default Timeline
