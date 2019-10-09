import React from 'react';
import {Page} from '../components';
import Section from '../components/General/Section';

import Hero from '../components/Fundraising/Hero';
import About from '../components/Fundraising/About';
import Crowfunding from '../components/Fundraising/Crowfunding';
import Divider from '../components/Fundraising/Divider';
import SustainCommunity from '../components/Fundraising/SustainCommunity';
import Fundraise from '../components/Fundraising/Fundraise';
import Card from '../components/Fundraising/Card';
import Discover from '../components/Fundraising/Discover';

class Fundraising extends React.Component {
  render() {
    return (
      <Page path="/fundraising">
        <Hero />
        <About />
        <Crowfunding />
        <Divider />
        <SustainCommunity />
        <Fundraise />
        <Card />
        <Discover />
      </Page>
    );
  }
}


export default Fundraising;
