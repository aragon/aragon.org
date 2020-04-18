import fs from 'fs-extra';
import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import {ServerStyleSheet} from 'styled-components';
import React from 'react';

const REACT_STATIC_PATHS = {
  src: 'src',
  dist: 'dist',
  devDist: 'dist',
  public: 'public',
};

const ARAGON_UI_ASSETS = path.dirname(require.resolve('@aragon/ui'));

export default {
  siteRoot: process.env.SITE_ROOT || '',
  getSiteData: () => ({
    title: 'Aragon',
  }),
  getRoutes: () => {
    let locales = ['', 'es', 'en'];
    let routes = [
      {
        path: '/aragon-court',
        component: 'src/pages/Court',
        getData: () => ({title: ''}),
      },
      {
        path: '/discover',
        component: 'src/pages/Discover',
        getData: () => ({title: ''}),
      },
      {
        path: '/project',
        component: 'src/pages/Project',
        getData: () => ({title: ''}),
      },
      {
        path: '/project/governance',
        component: 'src/pages/Governance',
        getData: () => ({title: ''}),
      },
      {
        path: '/project/grants',
        component: 'src/pages/Grants',
        getData: () => ({title: ''}),
      },
      {
        path: '/project/contribute',
        component: 'src/pages/Contribute',
        getData: () => ({title: ''}),
      },
      {
        path: '/project/roadmap',
        component: 'src/pages/Roadmap',
        getData: () => ({title: ''}),
      },
      {
        path: '/network',
        component: 'src/pages/Network',
        getData: () => ({title: ''}),
      },
      {
        path: '/bella',
        component: 'src/pages/Bella',
        getData: () => ({title: ''}),
      },
      {
        path: '/camino',
        component: 'src/pages/Camino',
        getData: () => ({title: ''}),
      },
      {
        path: '/powered-by',
        component: 'src/pages/PoweredByAragon',
        getData: () => ({title: ''}),
      },
      {
        path: '/agent',
        component: 'src/pages/Frame',
        getData: () => ({title: ''}),
      },
    ];

    var localizedRoutes = locales
      .map(locale => ({
        path: `/${locale}`,
        component: 'src/pages/Home',
        children: routes,
      }))
      .concat([
        {
          is404: true,
          component: 'src/pages/NotFound',
        },
      ]);

    return localizedRoutes;
  },
  paths: REACT_STATIC_PATHS,
  webpack: (conf, {defaultLoaders}) => {
    conf.resolve = Object.assign({}, conf.resolve || {}, {
      // Needed when @aragon/ui is linked (development)
      modules: ((conf.resolve && conf.resolve.modules) || []).concat([
        path.join(__dirname, 'node_modules'),
        path.join(__dirname, REACT_STATIC_PATHS.dist),
      ]),
    });

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
    ]);

    const fileLoader = defaultLoaders.fileLoader;
    fileLoader.query.name = 'static/[hash:8]-[name].[ext]';
    conf.module.rules = [
      {
        oneOf: [defaultLoaders.jsLoader, defaultLoaders.cssLoader, fileLoader],
      },
    ];
    conf.plugins.push(new ExtractTextPlugin('app.css'));

    return conf;
  },
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet();
    const html = render(sheet.collectStyles(<Comp />));
    meta.styleTags = sheet.getStyleElement();
    return html;
  },
  Document: class CustomHtml extends React.Component {
    analyticsCode() {
      if (process.env.NODE_ENV !== 'production') return '';
      return `
        var Countly = Countly || {};
        Countly.q = Countly.q || [];
        //provide countly initialization parameters
        Countly.app_key = 'd9f9d1913dbff98e5e24c6ed91fd84a765693d0c';
        Countly.url = 'https://analytics.aragon.org/';
        Countly.inactivity_time = 10;
        Countly.q.push(['track_sessions']);
        Countly.q.push(['track_pageview']);
        Countly.q.push(['track_clicks']);
        Countly.q.push(['track_errors']);
        (function() {
          var cly = document.createElement('script'); cly.type = 'text/javascript';
          cly.async = true;
          cly.src = 'https://analytics.aragon.org/sdk/web/countly.min.js';
          cly.onload = function(){Countly.init()};
          var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(cly, s);
        })();
      `;
    }
    render() {
      const {
        Html,
        Head,
        Body,
        siteData: {title: siteTitle},
        children,
        renderMeta,
        routeInfo: {allProps: {title} = {}} = {},
      } = this.props;
      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <title>{title || siteTitle}</title>
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
            <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
              integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
              crossOrigin="anonymous"
            />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@aragonproject" />
            <meta name="twitter:creator" content="@aragonproject" />
            <meta
              name="twitter:description"
              content="Build unstoppable organizations on Ethereum"
            />
            <meta name="twitter:title" content="Aragon" />
            <meta
              name="twitter:image"
              content="https://raw.githubusercontent.com/aragon/website/master/public/twitter-card-icon.png"
            />

            <meta property="og:title" content="Aragon" />
            <meta
              property="og:description"
              content="Build unstoppable organizations on Ethereum"
            />
            <meta property="og:url" content="https://aragon.org/" />
            <meta property="og:site_name" content="Aragon" />
            <meta
              property="og:image"
              content="https://raw.githubusercontent.com/aragon/website/master/public/twitter-card-icon.png"
            />
            <meta
              property="og:image:secure_url"
              content="https://raw.githubusercontent.com/aragon/website/master/public/twitter-card-icon.png"
            />
            <meta property="og:image:width" content="300" />
            <meta property="og:image:height" content="300" />
            <meta
              name="description"
              content="Build unstoppable organizations on Ethereum"
            />
            {renderMeta.styleTags}
          </Head>
          <Body>
            {children}
            <script dangerouslySetInnerHTML={{__html: this.analyticsCode()}} />
          </Body>
        </Html>
      );
    }
  },
};
