import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
const medium = css => breakpoint('medium', css)

class Label extends React.Component {
  render() {
    const { title, image } = this.props
    return (
      <LabelContainer>
        {image && <img src={image} />}
        <h4>{title}</h4>
      </LabelContainer>
    )
  }
}

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  img {
    padding-right: 12px;
  }
  h4 {
    font-weight: 300;
    font-size: 16px;
    line-height: 0px;
    color: #26324e;
    padding-top: 3px;
  }
`

export default Label
