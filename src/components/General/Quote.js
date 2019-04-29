import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {breakpoint, BreakPoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);

class Quote extends React.Component {
  render() {
    const {
      title,
      content,
      image,
      background,
      imageRight,
      children,
    } = this.props;
    return (
      <QuoteContainer
        background={background ? require(`../${background}`) : ''}>
        <Box>
          <BreakPoint from="medium">
            {image && !imageRight && <img src={require(`../${image}`)} />}
          </BreakPoint>
          {content && (
            <div>
              <p>{content}</p>
              <h4>{title}</h4>
            </div>
          )}
          {image && imageRight && <img src={require(`../${image}`)} />}
          <BreakPoint to="medium">
            {image && !imageRight && <img src={require(`../${image}`)} />}
          </BreakPoint>
        </Box>
      </QuoteContainer>
    );
  }
}

const QuoteContainer = styled.div`
  ${props =>
    props.background && 'background-image: url(' + props.background + ');'}
    padding: 0 15px;
    ${medium('padding: 0;')};
`;
const Box = styled.div`
  max-width: 1100px;
  margin auto;
  width: 95%;
  display: flex;
  align-items: center;
  flex-direction: column;
  ${medium('flex-direction: row;')};
  justify-content: space-between;
  min-height: 580px;
  position: relative;
  p {
    font-size: 28px;
    line-height: 48px;
    color: #FFFFFF;
    ${medium('width: 460px;')};
    margin-top: 40px;
    ${medium('margin-top: 0;')};
  }
  h4 {
    font-family: 'FontSemiBold';
    font-size: 24px;
    line-height: 48px;
    color: #FFFFFF;
    text-align: left;
    margin-top: 30px;
  }
  img {
    height: auto;
    max-width: 90%;
    ${medium('height: 570px;')};
    position: relative;
    bottom: 0;
    margin-top: 30px;
  }
`;

export default Quote;
