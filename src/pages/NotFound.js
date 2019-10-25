import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Page/Navbar';
import Footer from '../components/Page/Footer';
import notFound from '../components/General/assets/not-found.svg';
import { Link } from 'react-static'

class NotFoundComponent extends React.Component {
  render() {
    const items = [
      ['/discover', 'Discover'],
      ['https://hack.aragon.org/', 'Developers'],
      ['/project', 'Project'],
      ['/network', 'Network'],
    ];
    return (
      <div>
        <Navbar menuItems={items} path={' '} color='black' />
        <Container>
          <img src={notFound}/>
          <h1>Not found</h1>
          <p>Sorry, the page you are looking for isn't here!</p>
          <Link className="principal-button centered" to="/">Go home</Link>
        </Container>
        <Footer />
      </div>
    );
  }
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  display: flex;
  align-items: center;
  padding-top: 64px;
  justify-content: center;
  flex-direction: column;
  min-height: 700px;
  img {
    margin: 30px 15px;
    max-width: 100%;
  }
  h1 {
    font-family: 'FontBold';
    font-weight: bold;
    font-size: 68px;
    line-height: 82px;
    text-align: center;
    letter-spacing: -1.8px;
    color: #212b36;
    margin-bottom: 9px;
    max-width: 100%;
  }
  p {
    font-size: 22px;
    line-height: 35px;
    margin-bottom: 40px;
    text-align: center;
  }
  .principal-button {
    background: linear-gradient(186.69deg, #32fff5 -103.98%, #01bfe3 80.13%);
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.150249);
    border-radius: 6px;
    font-size: 16px;
    line-height: 1;
    color: #ffffff;
    font-family: 'FontMedium';
    padding: 14px 28px;
    cursor: pointer;
    transition: all 0.25s ease-in-out;
    margin: 0 10px;
    text-decoration: none;
  }

  .principal-button:hover {
    opacity: 0.95;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.150249);
  }
`;

export default NotFoundComponent;
