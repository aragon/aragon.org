import React from 'react';
import styled from 'styled-components';
import {Page} from '../components';
import Hero from '../components/Home/Hero';
import Product from '../components/Home/Product';
import About from '../components/Home/About';
import UseCases from '../components/Home/UseCases';
import Organizations from '../components/Home/Organizations';
import Section from '../components/General/Section';
import video from '../components/Home/home-assets/home-video.mp4';
import {Link} from 'react-static';

import {breakpoint, BreakPoint, Button} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

class Home extends React.Component {
  render() {
    return (
      <Page path="/">
        <Hero />
        <Product />
        <About />
        <UseCases />
        <Organizations/>
      </Page>
    );
  }
}

export default Home;
