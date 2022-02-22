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

const StyledImageBox = styled(ImageBox)`
width: 30px;
 display: flex;
  justifyContent: center;
`;

function ButtonOverlay() {
  return (
    <StyledButtonOverlay>
      <ColouredStyledButton type={"positive"} onClick={() => alert("")}>
        <StyledImageBox
          url={Tick}
        ></StyledImageBox>
      </ColouredStyledButton>
      <ColouredStyledButton type={"negative"} onClick={() => getRandomImage()}>
        <StyledImageBox
          url={Cancel}
        ></StyledImageBox>
      </ColouredStyledButton>
    </StyledButtonOverlay>
  );
}

export default ButtonOverlay;
