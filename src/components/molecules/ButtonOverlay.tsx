import React from "react";
import styled from "styled-components";
import { ColouredStyledButton } from "../atoms/Button";
import ImageBox from "../atoms/ImageBox";
import Tick from "../../assets/images/tick.png";
import Cancel from "../../assets/images/cancel.png";
import { getRandomImage } from "../../services/unsplashService";

const StyledButtonOverlay = styled.div`
  border-top: 1px solid #e5e5e5;
  display: flex;
  justify-content: center;
`;

const StyledImageBox = styled(ImageBox)`
  width: 30px;
  display: flex;
  justifycontent: center;
`;

function ButtonOverlay() {
  return (
    <StyledButtonOverlay>
      <ColouredStyledButton type={"positive"} onClick={() => alert("yis")}>
        <StyledImageBox url={Tick}></StyledImageBox>
      </ColouredStyledButton>
      <ColouredStyledButton type={"negative"} onClick={() => alert("no")}>
        <StyledImageBox url={Cancel}></StyledImageBox>
      </ColouredStyledButton>
    </StyledButtonOverlay>
  );
}

export default ButtonOverlay;
