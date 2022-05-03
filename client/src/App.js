import Views from "./Views";
import React from "react";
import './App.css';
import styled from 'styled-components';
import Image from './assets/logo.png'
function App() {
  return (
    <Container>
      <div id="container" className="container">
        <div id="title" className="title" />

        <Views />
      </div >
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('/assets/background.jpg');
  background-size: cover;
`;
export default App;
