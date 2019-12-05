import React from 'react'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'
import { Link } from 'react-static'
import { breakpoint } from '@aragon/ui'
import AlmostFullSection from '../General/AlmostFullSection'
const medium = css => breakpoint('medium', css)
import image from './assets/maria.png'

const BlogPost = () => (
  <AlmostFullSection backgroundColor="#639CF5" image={image}>
    <AlmostFullSectionBox>
      <h3>
        <FormattedMessage
          id="discover.blogpost.title"
          defaultMessage="Freeing the Marias of the world"
        />
      </h3>
      <p>
        <FormattedMessage
          id="discover.blogpost.content"
          defaultMessage="Aragon represents a new chapter in the history of society. Read more on why decentralized organizations can solve the world’s worst problems, with the example of Maria."
        />
      </p>
      <a href="https://blog.aragon.org/decentralized-organizations-can-solve-the-worlds-worst-problems-840db6255d12/">
        <FormattedMessage
          id="discover.blogpost.action"
          defaultMessage="Read more"
        />
      </a>
    </AlmostFullSectionBox>
  </AlmostFullSection>
)

const AlmostFullSectionBox = styled.div`
  h3 {
    font-family: 'FontRegular', sans-serif;
    font-size: 48px;
    line-height: 59px;
    letter-spacing: -0.564706px;
    color: #ffffff !important;
  }
  p {
    font-family: 'FontRegular', sans-serif;
    font-size: 21px;
    line-height: 35px;
    letter-spacing: 0.315px;
    color: #ffffff;
    opacity: 0.8;
  }
  a {
    font-family: 'FontSemiBold';
    font-size: 21px;
    line-height: 35px;
    letter-spacing: 0.315px;
    color: #ffffff;
  }
`

export default BlogPost
