import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme, breakpoint } from '@aragon/ui'
const medium = css => breakpoint('medium', css)

const StyledSection = styled.section`
  width: 100%;
  padding: 30px 15px;
  position: relative;
  background: white;
  overflow-x: hidden;
`

const Container = styled.div`
  max-width: 1100px;
  margin auto;
  width: 95%;
`

const Section = ({ className, ...props }) => {
  const containerProps = { className }

  return (
    <StyledSection {...containerProps}>
      <Container className="container">
        <div {...props} />
      </Container>
    </StyledSection>
  )
}

Section.propTypes = {
  className: PropTypes.string,
}

export default Section
