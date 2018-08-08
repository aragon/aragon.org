import React from 'react'
import { Link, SiteData, RouteData, Head } from 'react-static'
import Routes from 'react-static-routes'
import styled from 'styled-components'
import { AragonApp, Button } from '@aragon/ui'
import { Header, PreFooter, Footer } from '@aragon/web'

import iconTwitter from './assets/twitter.svg'
import iconMedium from './assets/medium.svg'
import iconRocket from './assets/rocket.svg'
import iconGH from './assets/github.svg'
import iconGhost from './assets/ghost.svg'

const headerMenu = [
  ['/core', 'Users'],
  ['https://hack.aragon.org', 'Developers'],
  ['/network', 'Network'],
  ['/foundation', 'Foundation'],
  ['/about', 'About'],
  ['/contribute', 'Contribute'],
  ['https://wiki.aragon.org', 'Wiki'],
  ['https://blog.aragon.one', 'Blog'],
]

const footerMenus = [
  [
    ['Users', '/core'],
    ['Developers', 'https://hack.aragon.org/'],
    ['Network', '/network'],
    ['Contribute', '/contribute'],
  ],
  [
    ['Wiki', 'https://wiki.aragon.org'],
    ['Blog', 'https://blog.aragon.one/'],
    ['Privacy Policy', 'https://wiki.aragon.org/documentation/legal/Privacy_policy/'],
    ['Terms of Use', 'https://wiki.aragon.org/documentation/legal/Terms_of_use_websites/'],
  ],
  [
    ['*Try Aragon 0.5', 'https://app.aragon.one/'],
    ['Contact Us', 'mailto:contact@aragon.one'],
    ['Media/Press Inquiries', 'mailto:media@aragon.one'],
    ['Press Kit', 'https://wiki.aragon.one/press/press-kit/'],
  ],
  [
    ['GitHub ', 'https://github.com/aragon', iconGH],
    ['Twitter', 'https://twitter.com/AragonProject', iconTwitter],
    ['Blog', 'https://blog.aragon.org/', iconGhost],
    ['Aragon Chat', 'https://aragon.chat/', iconRocket],
  ],
]

const renderMenuItemLink = ({ url, children }) =>
  url.startsWith('/') ? (
    <Link to={url}>{children}</Link>
  ) : (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )

const Content = styled.div`
  min-height: 200px;
`

const EmailFormWrapper = styled.div`
  .email-field {
    display: flex;
    width: 100%;
  }
  input[type='email'] {
    flex-shrink: 1;
    width: 100%;
    min-width: 0;
    margin-right: 15px;
    padding: 10px 15px;
    border-radius: 3px;
    border: 0;
    background: #fff;
  }
  .button {
    flex-shrink: 0;
  }
`

class Page extends React.Component {
  renderEmailForm() {
    return (
      <EmailFormWrapper>
        <form
          action="https://one.us15.list-manage.com/subscribe/post?u=a590aa3843a54b079d48e6e18&amp;id=e81a44c4bd"
          method="post"
          name="mc-embedded-subscribe-form"
          target="_blank"
          noValidate
        >
          <h1 className="title">Aragon Newsletter</h1>
          <p className="desc">
            <label htmlFor="mce-EMAIL">
              Follow the progress of Aragon by subscribing to our monthly
              newsletter
            </label>
          </p>
          <div className="email-field">
            <input
              type="email"
              name="EMAIL"
              placeholder="Enter your email"
              className="required email"
              id="mce-EMAIL"
            />
            <div
              style={{ position: 'absolute', left: '-5000px' }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_a590aa3843a54b079d48e6e18_e81a44c4bd"
                tabIndex="-1"
                value=""
              />
            </div>
            <Button
              type="submit"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
              mode="strong"
            >
              Subscribe
            </Button>
          </div>
        </form>
      </EmailFormWrapper>
    )
  }

  render() {
    const { children, path } = this.props
    const headerItems = headerMenu.map(item => [...item, item[0] === path])
    return (
      <SiteData
        render={({ title: siteTitle }) => (
          <RouteData
            render={({ title }) => (
              <AragonApp publicUrl="/aragon-ui/">
                <Head>
                  <title>{title || siteTitle}</title>
                </Head>
                <Header
                  menuItems={headerItems}
                  renderMenuItemLink={renderMenuItemLink}
                />
                <Content>{children}</Content>
                <PreFooter emailForm={this.renderEmailForm()} />
                <Footer menus={footerMenus} />
              </AragonApp>
            )}
          />
        )}
      />
    )
  }
}

export default Page
