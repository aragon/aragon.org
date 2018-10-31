import React from 'react'
import PropTypes from 'prop-types'
import Section from '../General/Section'
import styled from 'styled-components'
import { breakpoint } from '@aragon/ui'
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);
import { Link } from 'react-static'

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
      linkTo,
      children,
    } = this.props
    return (
      <div>
        <SmallCard  target="_blank">
          <img src={require(`../${imageUrl}.svg`)}/>
          <h1>{title}</h1>
          <h1>{content}</h1>
        </SmallCard>
      </div>
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
  height: 100%;
  transition: all 0.25s ease-in-out;
  ${medium('padding: 30px 60px;')};
  img {
    height: 130px;
    width: 130px;
  }
  p {
    text-align: center;
  }
  h1 {
    font-family: 'FontLight', sans-serif;
    font-size:30px;
    width: inherit;
    ${medium('font-size: 36px; width: calc(100% + 110px);')};
    ${large('width: inherit; font-size: 46px;')};
    font-weight: 300;
    line-height: 1.35;
    text-align: center;
    color: #2d4051;
    margin: 15px 0 0 0;
  }
  &:hover {
    box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.07);
  }
`


export default Card
