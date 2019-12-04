import React from 'react'
import styled from 'styled-components'
import Section from '../General/Section'
import product from './assets/product.png'
import { breakpoint, BreakPoint } from '@aragon/ui'
const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)

const Product = () => (
  <ProductSection>
    <Container>
      <img src={product} />
    </Container>
  </ProductSection>
)
const ProductSection = styled(Section)`
  background-color: transparent;
  padding: 0;
  position: relative;
  padding-top: 50px;
  ${medium('padding-top: 150px;')}
  .container {
    max-width: 100%;
    margin auto;
    width: 100%;
  }
`

const Container = styled.div`
  text-align: center;
  img {
    margin: auto;
    max-width: 100%;
  }
`

export default Product
