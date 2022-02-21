import React from "react";
import styled from "styled-components";
import { StyledButton } from "../atoms/Button";
import ImageBox from "../atoms/ImageBox";
import Tick from "../../assets/images/tick.png";
import Cancel from "../../assets/images/cancel.png";
import { getRandomImage } from "../../services/unsplashService";

function ButtonOverlay() {
  const ButtonOverlay = styled.div`
    display: flex;
    justify-content: center;
  `;

  return (
    <ButtonOverlay>
      <StyledButton type={"positive"} onClick={() => alert("")}>
        <ImageBox
          styles={{ width: "30px", display: "flex", justifyContent: "center" }}
          url={Tick}
        ></ImageBox>
      </StyledButton>
      <StyledButton type={"negative"} onClick={() => getRandomImage()}>
        <ImageBox
          styles={{ width: "30px", display: "flex", justifyContent: "center" }}
          url={Cancel}
        ></ImageBox>
      </StyledButton>
    </ButtonOverlay>
  );
}

export default ButtonOverlay;
