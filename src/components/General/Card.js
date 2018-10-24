import React from 'react'
import PropTypes from 'prop-types'
import Section from '../General/Section'
import styled from 'styled-components'
import { breakpoint } from '@aragon/ui'
const medium = css => breakpoint('medium', css);

class Card extends React.Component {
  static propTypes = {
    image: PropTypes.node,
  }
  static defaultProps = {
  }

  render() {
    const {
      title,
      content,
      imageUrl,
      children,
    } = this.props
    return (
      <SmallCard>
        <img src={require(`../${imageUrl}.svg`)}/>
        <h1>{title}</h1>
        <h1>{content}</h1>
      </SmallCard>
    )
  }
}

const SmallCard = styled.div`
  border-radius: 12px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.07);
  background-color: #f9fafc;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  ${medium('padding: 30px 60px;')};
  img {
    height: 100px;
    width: 100px;
  }
  p {
    font-family: 'GraphikRegular', sans-serif;
    font-size: 16px;
    line-height: 1.75;
    letter-spacing: 0.1px;
    text-align: center;
    color: #7f8198;
  }
  h1 {
    font-family: 'GraphikLight', sans-serif;
    font-size:30px;
    ${medium('font-size: 46px;')};
    font-weight: 300;
    line-height: 1.35;
    text-align: center;
    color: #2d4051;
    margin: 15px 0 0 0;
  }
`

export default Card
