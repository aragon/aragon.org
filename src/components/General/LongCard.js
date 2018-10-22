import React from 'react'
import Section from '../General/Section'
import PropTypes from 'prop-types'
import styled from 'styled-components'

class Card extends React.Component {
  static propTypes = {
    background: PropTypes.string,
  }

  render() {
    const {
      title,
      content,
      background,
      children,
    } = this.props
    return (
      <LongCard background={require(`../${background}`)}></LongCard>
    )
  }
}

const LongCard = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  border-radius: 12px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.07);
  background-color: #f9fafc;
  background-image: url(${props => props.background});
  background-size: cover;
`

export default Card
