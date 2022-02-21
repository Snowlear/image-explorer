import React from "react";
import styled from "styled-components";

function Header() {
  const StyledHeaderText = styled.p`
    color: black;
    margin: 0px;
    font-size: 16px;
    font-weight: 600;
  `;

  const StyledHeaderBox = styled.div`
    padding: 5px;
    padding-left: 20px;
    padding-bottom: 8px;
    padding-top: 10px;
    border-bottom: 1px solid #e5e5e5;
    background-color: #eaf3fb;
  `;

  return (
    <StyledHeaderBox>
      <StyledHeaderText>Image Explorer</StyledHeaderText>
    </StyledHeaderBox>
  );
}

export default Header;
