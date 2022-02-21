import React from "react";
import styled from "styled-components";
import { ColouredStyledButton } from "../atoms/Button";
import ImageBox from "../atoms/ImageBox";
import Tick from "../../assets/images/tick.png";
import Cancel from "../../assets/images/cancel.png";
import { getRandomImage } from "../../services/unsplashService";

const StyledButtonOverlay = styled.div`
  display: flex;
  justify-content: center;
`;

function ButtonOverlay() {
  return (
    <StyledButtonOverlay>
      <ColouredStyledButton type={"positive"} onClick={() => alert("")}>
        <ImageBox
          styles={{ width: "30px", display: "flex", justifyContent: "center" }}
          url={Tick}
        ></ImageBox>
      </ColouredStyledButton>
      <ColouredStyledButton type={"negative"} onClick={() => getRandomImage()}>
        <ImageBox
          styles={{ width: "30px", display: "flex", justifyContent: "center" }}
          url={Cancel}
        ></ImageBox>
      </ColouredStyledButton>
    </StyledButtonOverlay>
  );
}

export default ButtonOverlay;
