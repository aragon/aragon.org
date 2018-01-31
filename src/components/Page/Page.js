import React from 'react'
import { Router, Link, getRouteProps } from 'react-static'
import Routes from 'react-static-routes'
import { styled } from '@aragon/ui'
import { AragonApp, Header, PreFooter, Footer, Button } from '@aragon/ui'

const menuItems = [
  ['/core', 'Core'],
  ['/os', 'aragonOS'],
  ['/network', 'Network'],
  ['/foundation', 'Foundation'],
  ['/about', 'About'],
  ['/join', 'Join us'],
  ['https://wiki.aragon.one', 'Wiki'],
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
    const items = menuItems.map(item => [...item, item[0] === path])
    return (
      <AragonApp publicUrl="/aragon-ui/">
        <Header menuItems={items} renderMenuItemLink={renderMenuItemLink} />
        <Content>{children}</Content>
        <PreFooter emailForm={this.renderEmailForm()} />
        <Footer />
      </AragonApp>
    )
  }
}

export default Page
