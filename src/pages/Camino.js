import React from 'react';
import styled from 'styled-components';
import {Page} from '../components';
import Section from '../components/General/Section';


import Parallax from '../components/Camino/Parallax';
import TryCamino from '../components/Camino/TryCamino';
import Features from '../components/Camino/Features';
import Templates from '../components/Camino/Templates';
import MoreFeatures from '../components/Camino/MoreFeatures';
import GovernanceMakeover from '../components/Camino/GovernanceMakeover';
import DarkMode from '../components/Camino/DarkMode';

import Zoom from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';
import { BreakPoint } from '@aragon/ui'
import { Link } from 'react-static'

class Camino extends React.Component {
  render() {
    return (
      <Page path="/bella">
        <Parallax />
        <TryCamino />
        <Features />
        <Templates />
        <MoreFeatures />
        <GovernanceMakeover />
        <DarkMode />
      </Page>
    );
  }
}


export default Camino;
