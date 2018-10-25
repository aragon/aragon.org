import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


class Quote extends React.Component {
  render() {
    const {
      title,
      content,
      imageUrl,
      children,
    } = this.props
    return (
      <QuoteContainer>
        {content && <p>{content}</p>}
      </QuoteContainer>
    )
  }
}

const QuoteContainer = styled.div`
  background-image: radial-gradient(circle at 1% 0, #ffffff, rgba(255, 255, 255, 0.36));
  border-radius: 12px;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default Quote
