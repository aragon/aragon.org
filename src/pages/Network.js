import React from 'react';
import {Page} from '../components';
import Hero from '../components/Network/Hero';
import About from '../components/Network/About';
import Community from '../components/Network/Community';
import NetworkeContent from '../components/Network/NetworkContent';

const Network = () => (
  <Page path="/network" color="black">
    <Hero />
    <About />
    <Community />
    <NetworkeContent />
  </Page>
);

export default Network;
