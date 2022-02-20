import React from 'react';
import styled from 'styled-components';

function ImageCard() {
    const StyledImageCard = styled.div`
    color: blue;
    height: 100px;
    width: 150px;
    border-radius: 5px;
    background-color: #ece9f9;
    border: 1px solid #d9d6ff;
    margin: 2px;
    font-size: 16px;
    font-weight: 600;
    display: inline-block;
        `;


  return (
            <StyledImageCard>Image Explorer</StyledImageCard>
  );
}

export default ImageCard;
