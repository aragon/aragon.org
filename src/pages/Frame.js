import React from 'react';
import styled from 'styled-components';
import {Page} from '../components';
import Hero from '../components/Frame/Hero';
import Product from '../components/Frame/Product';
import About from '../components/Frame/About';
import Download from '../components/Frame/Download';

class Frame extends React.Component {
  render() {
    return (
      <Page path="/frame">
        <Hero />
        <Product />
        <About />
        <Download />
      </Page>
    );
  }
}

export default Frame;
