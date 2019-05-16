import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { Spring, animated } from "react-spring";
import { Text, SafeLink } from "@aragon/ui";
import logo from "./assets/logo.svg";
import close from "./assets/close.svg";
import { Link } from 'react-static'

class SidePanel extends React.PureComponent {
  componentDidMount() {
    document.addEventListener("keydown", this.handleEscape, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleEscape, false);
  }
  handleClose = () => {
    if (!this.props.blocking) {
      this.props.onClose();
    }
  };
  handleEscape = event => {
    if (event.keyCode === 27 && this.props.opened) {
      this.handleClose();
    }
  };
  handleTransitionRest = () => {
    this.props.onTransitionEnd(this.props.opened);
  };

  render() {
    const { opened, children } = this.props;
    return (
      <Spring
        config={{ tension: 50, friction: 10 }}
        to={{ progress: Number(!opened), overlay: Number(opened) }}
        onRest={this.handleTransitionRest}
        native
      >
        {({ progress, overlay }) => (
          <Main opened={opened}>
            <Overlay
              style={{
                opacity: overlay,
                pointerEvents: opened ? "auto" : "none"
              }}
              onClick={this.handleClose}
            />
            <Panel
              style={{
                transform: progress.interpolate(
                  t => `translate3d(${-t * 290}px, 0, 0)`
                )
              }}
            >
              <PanelHeader>
                <h1>
                  <Link to="/">
                    <LogoImg src={logo} />
                  </Link>
                </h1>
                <PanelCloseButton type="button" onClick={this.handleClose}>
                  <img src={close} />
                </PanelCloseButton>
              </PanelHeader>
              <PanelScrollView>
                <PanelContent>{children}</PanelContent>
              </PanelScrollView>
            </Panel>
          </Main>
        )}
      </Spring>
    );
  }
}

SidePanel.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  opened: PropTypes.bool,
  blocking: PropTypes.bool,
  onClose: PropTypes.func,
  onTransitionEnd: PropTypes.func
};

SidePanel.defaultProps = {
  opened: true,
  blocking: false,
  onClose: () => {},
  onTransitionEnd: () => {}
};

const Main = styled.div`
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: ${({ opened }) => (opened ? "auto" : "none")};
`;

const Overlay = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(68, 81, 89, 0.65);
`;

const Panel = styled(animated.aside)`
  position: absolute;
  background: #1c1c23;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 100vh;
  padding-left: 10px;
  box-shadow: -2px 0 36px rgba(0, 0, 0, 0.2);
`;

const PanelHeader = styled.header`
  position: relative;
  padding-top: 15px;
  padding-left: 26px;
  padding-right: 20px;
  padding-bottom: 15px;
  flex-shrink: 0;
`;

const PanelScrollView = styled.div`
  overflow-y: auto;
  height: 100%;
`;

const PanelContent = styled.div`
  padding: 0 26px 26px;
  a {
    padding: 15px 0;
    font-size: 20px;
  }
`;

const PanelCloseButton = styled.button`
  img {
    width: 12px;
  }
  ${PanelHeader} & {
    position: absolute;
    color: white;
    padding: 20px;
    top: 0;
    right: 0;
    cursor: pointer;
    background: none;
    border: 0;
    outline: 0;
    &::-moz-focus-inner {
      border: 0;
    }
  }
`;

const LogoImg = styled.img`
  margin: 0 0 20px 0!important;
  width: 50px;
`;

export default SidePanel;
