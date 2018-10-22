import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-static'
import { Button, SidePanel, SafeLink } from '@aragon/ui'
import menu from './assets/menu.svg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  a {
    padding: 10px 30px;
    text-decoration: none;
  }
`;

class Panel extends React.Component {
  state = {
    opened: false,
  };
  render() {
    const { items } = this.props;
    const { opened } = this.state;
    return (
      <div>
        <Button mode="text" onClick={() => this.setState({ opened: true })}>
          <img src={menu} />
        </Button>
        <SidePanel title="" opened={opened} onClose={() => this.setState({ opened: false })}>
          <Container>
          <Link to="/">Home</Link>
          {items.map((item, i) => (
            item[0].startsWith('/') ? (
              <Link to={item[0]} key={i}>{item[1]}</Link>
            ) : (
              <SafeLink href={item[0]} key={i} target="_blank">
                {item[1]}
              </SafeLink>
            )
          ))}
          </Container>
        </SidePanel>
      </div>
    )
  }
}

Panel.propTypes = {
  items: PropTypes.array,
}

export default Panel