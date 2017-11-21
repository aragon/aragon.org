import fs from 'fs-extra'
import path from 'path'
import chalk from 'chalk'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import { ServerStyleSheet } from 'styled-components'
import React from 'react'

const REACT_STATIC_PATHS = {
  src: 'src',
  dist: 'dist',
  devDist: 'dist',
  public: 'public',
}

const ARAGON_UI_ASSETS = path.dirname(require.resolve('@aragon/ui'))

export default {
  getSiteProps: () => ({
    title: 'Aragon',
  }),
  getRoutes: () => [
    { path: '/', component: 'src/pages/Home' },
    { path: '/core', component: 'src/pages/Core' },
    { path: '/network', component: 'src/pages/Network' },
    { path: '/foundation', component: 'src/pages/Foundation' },
    { path: '/about', component: 'src/pages/About' },
    { path: '/join', component: 'src/pages/Join' },
    { is404: true, component: 'src/pages/NotFound' },
  ],
  paths: REACT_STATIC_PATHS,
  webpack: conf => {
    conf.resolve = Object.assign({}, conf.resolve || {}, {
      // Needed when @aragon/ui is linked (development)
      modules: (conf.modules || []).concat([
        path.join(__dirname, 'node_modules'),
        path.join(__dirname, REACT_STATIC_PATHS.dist),
      ]),
    })

    // Copy the Aragon UI assets to dist/aragon-ui. CopyWebpackPlugin is aware
    // of webpack-dev-server so there is no need to add this directory to the
    // devServer configuration.
    conf.plugins = (conf.plugins || []).concat([
      new CopyWebpackPlugin([
        {
          from: path.join(ARAGON_UI_ASSETS),
          to: path.resolve(
            path.join(__dirname, REACT_STATIC_PATHS.dist, 'aragon-ui')
          ),
        },
      ]),
    ])

    return conf
  },
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()
    return html
  },
  Document: class CustomHtml extends React.Component {
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props
      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  },
}
