import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import clouds from '../assets/clouds.jpg';

const Styles = styled.div`
  .jumbo {
    background: url(${clouds}) no-repeat fixed bottom;
    background-size: cover;
    color: #ccc;
    height: 200px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #124;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <container>
        <h1>Nice to meet you!</h1>
      </container>
    </Jumbo>
  </Styles>
)