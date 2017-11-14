import React from 'react'
import { Router } from 'react-static'
import Routes from 'react-static-routes'
import { BaseStyles, Header, PreFooter, Footer } from '@aragon/ui'

const menuItems = [
  ['/core', 'Core'],
  ['/network', 'Network'],
  ['/foundation', 'Foundation'],
  ['/about', 'About'],
  ['/faq', 'FAQs'],
]

export default () => (
  <div>
    <BaseStyles />
    <Header menuItems={menuItems} />
    <Router>
      <div>
        <Routes />
      </div>
    </Router>
    <PreFooter />
    <Footer />
  </div>
)
