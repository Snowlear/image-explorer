import React from 'react';
import styled from 'styled-components';
import './App.css';

function App() {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;

  return (
    <div className="App">
      <header className="App-header">
        <Title>
          Image App will be here.
        </Title>
      </header>
    </div>
  );
}

export default App;
