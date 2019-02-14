import React from 'react';
import PropTypes from 'prop-types';
import {theme, breakpoint} from '@aragon/ui';
import styled from 'styled-components';

const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const RoadmapContainerContainer = styled.div`
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

const RoadmapContainer = ({className, ...props}) => {
  const containerProps = {className};

  return (
    <RoadmapContainerContainer {...containerProps}>
      <div className="roadmap-container">
        <div {...props} />
      </div>
    </RoadmapContainerContainer>
  );
};

RoadmapContainer.propTypes = {
  className: PropTypes.string,
};

export default RoadmapContainer;
