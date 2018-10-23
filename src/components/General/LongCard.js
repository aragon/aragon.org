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
      textAlign,
      children,
    } = this.props
    return (
      <LongCard className={textAlign} background={require(`../${background}`)}>
        <div className={textAlign + "-box"}>
          {title && <h1>{title}</h1>}
          {content && <h1>{content}</h1>}
        </div>
      </LongCard>
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
  padding: 30px 60px;
  display: flex;
  align-items: center;
  &.center {
    justify-content: center;
    p, h1 {
      tex-align: center;
    }
  }
  &.left {
    justify-content: flex-start;
  }
  &.right {
    justify-content: flex-end;
  }

  p {
    font-family: 'GraphikRegular', sans-serif;
    font-size: 16px;
    line-height: 1.75;
    letter-spacing: 0.1px;
    text-align: left;
    color: #7f8198;
  }
  h1 {
    font-family: 'GraphikLight', sans-serif;
    font-size: 46px;
    font-weight: 300;
    line-height: 1.35;
    text-align: left;
    color: #2d4051;
    margin: 15px 0 0 0;
  }
  .left-box {
    width: 50%;
  }
  .right-box {
    width: 50%;
    margin-left: 50%;
  }
  .center-box {
    width: 80%;
    margin: auto;
  }
`

export default Card
