import React from "react";
import styled from "styled-components";
import { ReactComponent as Tick } from "../../assets/images/tick.svg";
import { ReactComponent as Plus } from "../../assets/images/plus.svg";
import ImageBox from "../atoms/ImageBox";

const StyledImageCard = styled.div<ImageCardProps>`
  position: relative;
  height: 100px;
  width: 150px;
  border-radius: 5px;
  background-color: #ece9f9;
  border: 1px solid #d9d6ff;
  margin: 2px;
  font-size: 16px;
  display: inline-block;
  text-align: center;
  ${(props) => props.isPlus && "float: left;"}
`;

const StyledImageApproveOverlay = styled.div`
  position: absolute;
  top: 0px;
  background-color: #0088ff2b;
  width: 100%;
  height: 100%;
`;

const StyledTick = styled(Tick)`
  margin: 5px;
  height: 30px;
  width: 30px;
  position: absolute;
  right: 0px;
  border-radius: 20px;
  background-color: #ffffff;
`;

const StyledPlus = styled(Plus)`
  color: green;
  height: 50px;
  width: 50px;
  position: absolute;
  top: 50%;
  bottom: 50%;
  transform: translate(-50%, -50%);
`;

function ImageCard({ isPlus = false }: ImageCardProps) {
  return (
    <StyledImageCard isPlus={isPlus}>
      {isPlus ? (
        <React.Fragment>
          <StyledPlus />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <ImageBox></ImageBox>
          <StyledImageApproveOverlay>
            <StyledTick />
          </StyledImageApproveOverlay>
        </React.Fragment>
      )}
    </StyledImageCard>
  );
}

export default ImageCard;

interface ImageCardProps {
  isPlus?: boolean;
}
