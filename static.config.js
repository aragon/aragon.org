import fs from 'fs-extra'
import path from 'path'
import chalk from 'chalk'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import { styledServerStyleSheet as ServerStyleSheet } from '@aragon/ui'
import React from 'react'

const REACT_STATIC_PATHS = {
  src: 'src',
  dist: 'dist',
  devDist: 'dist',
  public: 'public',
}

const ARAGON_UI_ASSETS = path.dirname(require.resolve('@aragon/ui'))

export default {
  siteRoot: process.env.SITE_ROOT || '',
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
      modules: ((conf.resolve && conf.resolve.modules) || []).concat([
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
          from: ARAGON_UI_ASSETS,
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
      const { Html, Head, Body, siteProps, children, renderMeta } = this.props
      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <title>{siteProps.title}</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="apple-touch-icon-precomposed" href="/favicon-152.png" />
            <meta name="msapplication-TileColor" content="#FFFFFF" />
            <meta name="msapplication-TileImage" content="/favicon-144.png" />
            <link rel="icon" href="/favicon-32.png" sizes="32x32" />
            <link rel="icon" href="/favicon-57.png" sizes="57x57" />
            <link rel="icon" href="/favicon-72.png" sizes="72x72" />
            <link rel="icon" href="/favicon-96.png" sizes="96x96" />
            <link rel="icon" href="/favicon-120.png" sizes="120x120" />
            <link rel="icon" href="/favicon-128.png" sizes="128x128" />
            <link rel="icon" href="/favicon-144.png" sizes="144x144" />
            <link rel="icon" href="/favicon-152.png" sizes="152x152" />
            <link rel="icon" href="/favicon-195.png" sizes="195x195" />
            <link rel="icon" href="/favicon-228.png" sizes="228x228" />

            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  },
}
