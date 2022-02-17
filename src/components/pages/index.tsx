import React from 'react';
import styled from 'styled-components';
import Box from '../atoms/Box';

function Index() {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;

  return (
    <div>
      <header>
        <Title>
          Image App will be here.
        </Title>
        <Box>
          <p>Hello</p>
        </Box>
      </header>
    </div>
  );
}

export default Index;
