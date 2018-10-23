import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme, breakpoint } from '@aragon/ui'
const medium = css => breakpoint('medium', css);

const StyledSection = styled.section`
  width: 100vw;
  padding: 30px;
  position: relative;
  background: white;
  h2 {
    font-family: 'GraphikLink', sans-serif;
    font-size: 42px;
    font-weight: 300;
    line-height: 0.91;
    text-align: center;
    color: #2d4051;
    margin: 30px 0;
  }
`;

const Container = styled.div`
  max-width: 1100px;
  margin auto;
  width: 95%;
`;

const Section = ({ className, ...props }) => {
  const containerProps = { className };

  return (
    <StyledSection {...containerProps}>
      <Container>
        <div {...props} />
      </Container>
    </StyledSection>
  )
};

Section.propTypes = {
  className: PropTypes.string,
};

export default Section
