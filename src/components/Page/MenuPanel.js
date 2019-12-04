import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-static'
import { Button, SafeLink } from '@aragon/ui'
import SidePanel from './SidePanel'
import menu from './assets/menu.svg'
import menuBlack from './assets/menu-black.svg'

class Panel extends React.Component {
  static propTypes = {
    items: PropTypes.array,
  }

  state = {
    opened: false,
  }
  render() {
    const { items, color } = this.props
    const { opened } = this.state
    return (
      <Pannel className="flex-images">
        <Button mode="text" onClick={() => this.setState({ opened: true })}>
          <img src={color == 'black' ? menuBlack : menu} />
        </Button>
        <SidePanel
          title=""
          opened={opened}
          onClose={() => this.setState({ opened: false })}
        >
          <Container>
            {items.map((item, i) =>
              item[0].startsWith('/') ? (
                <Link to={item[0]} key={i}>
                  {item[1]}
                </Link>
              ) : (
                <SafeLink href={item[0]} key={i}>
                  {item[1]}
                </SafeLink>
              )
            )}
          </Container>
        </SidePanel>
      </Pannel>
    )
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  a {
    padding: 10px 0;
    text-decoration: none;
    color: white;
  }
  a:hover {
    color: #4a80e4;
  }
`

const Pannel = styled.div`
  button {
    padding: 0;
    margin: 0 !important;
  }
  img {
    top: 3px;
    position: relative;
  }
  button img,
  div img {
    padding: 0;
    margin: 0;
  }
`
export default Panel
