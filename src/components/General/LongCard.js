import React from 'react'
import Section from '../General/Section'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { breakpoint } from '@aragon/ui'
const medium = css => breakpoint('medium', css);
import { Link } from 'react-static'

class Card extends React.Component {
  render() {
    const {
      title,
      content,
      image,
      background,
      gradient,
      colorWhite,
      textAlign,
      linkTo,
      children,
    } = this.props
    return (
      <Container colorWhite={colorWhite}>
      {(linkTo && linkTo.startsWith('/')) ? (
      <LongCard className={textAlign} colorWhite={colorWhite} image={image || false} background={background ? require(`../${background}`) : ''} gradient={gradient ? gradient : ''}>
        {image && textAlign == 'right' && <ImageContainer><img src={require(`../${image}`)}/></ImageContainer>}
        <div className={textAlign + "-box"}>
          {title && <h1>{title}</h1>}
          {content && <h1>{content}</h1>}
          {children}
        </div>
        {image && textAlign == 'left' && <ImageContainer><img src={require(`../${image}`)}/></ImageContainer>}
      </LongCard>
      ) : (
        <LongCard  target="_blank" className={textAlign} colorWhite={colorWhite} image={image || false} background={background ? require(`../${background}`) : ''} gradient={gradient ? gradient : ''}>
        {image && textAlign == 'right' && <ImageContainer><img src={require(`../${image}`)}/></ImageContainer>}
        <div className={textAlign + "-box"}>
          {title && <h1>{title}</h1>}
          {content && <h1>{content}</h1>}
          {children}
        </div>
        {image && textAlign == 'left' && <ImageContainer><img src={require(`../${image}`)}/></ImageContainer>}
      </LongCard>
      )}
      </Container>
    )
  }
}

const Container = styled.a`
  grid-column-start: 1;
  ${medium('grid-column-end: 3;')};
  grid-column-end: 2;
  
  .center {
    justify-content: center;
    p, h1 {
      text-align: center;
    }
  }
  .left {
    justify-content: flex-start;
  }
  .right {
    justify-content: center;
    ${medium('justify-content: flex-end')};;
  }

  p {
    font-family: 'FontRegular', sans-serif;
    font-size: 16px;
    line-height: 1.75;
    letter-spacing: 0.1px;
    text-align: left;
    color: ${props => props.colorWhite ? "#b4b5cc" : "#7f8198"};

  }
  h1 {
    font-family: 'FontLight', sans-serif;
    font-size:30px;
    ${medium('font-size: 46px;')};
    font-weight: 300;
    line-height: 1.35;
    text-align: left;
    color: ${props => props.colorWhite ? "white" : "#2d4051"};
    margin: 15px 0 0 0;
  }
  .left-box {
    width: 100%;
    ${medium('width: 50%')};
  }
  .right-box {
    width: 100%;
    ${medium('width: 50%')};
    margin-left: 0;
    margin-left: ${props => props.image ? medium('30px') : medium('50%')}

  }
  .center-box {
    width: 80%;
    margin: auto;
  }
`
const LongCard = styled.div`
  border-radius: 12px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.07);
  background-color: #f9fafc;
  ${props => props.background && 'background-image: url(' + props.background + ');'}
  ${props => props.gradient && 'background-image:' + props.gradient + ';'}
  background-size: cover;
  background-position: center;
  padding: 30px;
  ${medium('padding: 30px 60px;')};
  display: flex;
  align-items: center;
  flex-direction: column;
  ${medium('flex-direction: row;')};
  height: 100%;
`

const LongCardLink = styled(Link)`
  border-radius: 12px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.07);
  background-color: #f9fafc;
  ${props => props.background && 'background-image: url(' + props.background + ');'}
  ${props => props.gradient && 'background-image:' + props.gradient + ';'}
  background-size: cover;
  background-position: center;
  padding: 30px;
  ${medium('padding: 30px 60px;')};
  display: flex;
  align-items: center;
  flex-direction: column;
  ${medium('flex-direction: row;')};
  height: 100%;
`

const ImageContainer = styled.div`
  width: 100%;
  ${medium('width: 50%;')};
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 100%;
    width: 430px;
    height: auto;
    ${medium('height: 430px;')};
    margin: 15px 0;
  }
`

export default Card
