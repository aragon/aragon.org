import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


class Quote extends React.Component {
  render() {
    const {
      title,
      content,
      image,
      children,
    } = this.props
    return (
      <QuoteContainer>
        <div>
          { title && image && <h4><img src={require(`../${image}`)} />{title}</h4>}
          {content && <p>{content}</p>}
        </div>
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
  min-height: 110px;
  h4 {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1C1D23;
    img {
      padding-right: 15px; 
    }
  }
`

export default Quote
