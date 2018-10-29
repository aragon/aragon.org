import React from 'react'
import PropTypes from 'prop-types'
import Section from '../General/Section'
import styled from 'styled-components'
import { breakpoint } from '@aragon/ui'
const medium = css => breakpoint('medium', css);
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
        {(linkTo && linkTo.startsWith('/')) ? (
          <SmallCardLink to={linkTo}>
            <img src={require(`../${imageUrl}.svg`)}/>
            <h1>{title}</h1>
            <h1>{content}</h1>
          </SmallCardLink>
        ) : (
          <SmallCard href={linkTo} target="_blank">
            <img src={require(`../${imageUrl}.svg`)}/>
            <h1>{title}</h1>
            <h1>{content}</h1>
          </SmallCard>
        )} 
      </div>
    )
  }
}

const SmallCard = styled.a`
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
    height: 130px;
    width: 130px;
  }
  p {
    text-align: center;
  }
  h1 {
    font-family: 'FontLight', sans-serif;
    font-size:30px;
    ${medium('font-size: 46px;')};
    font-weight: 300;
    line-height: 1.35;
    text-align: center;
    color: #2d4051;
    margin: 15px 0 0 0;
  }
`
const SmallCardLink = styled(Link)`
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
    height: 130px;
    width: 130px;
  }
  p {
    text-align: center;
  }
  h1 {
    font-family: 'FontLight', sans-serif;
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
