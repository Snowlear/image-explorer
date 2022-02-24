import React, { useState } from "react";
import styled from "styled-components";
import { ColouredStyledButton } from "../atoms/Button";
import ImageBox from "../atoms/ImageBox";
import Tick from "../../assets/images/tick.png";
import Cancel from "../../assets/images/cancel.png";
import { setApprovedImage } from "../../store/actions/session";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { SessionState } from "../../store/types";
import { setReviewSession } from "../../helpers/dataHandle";

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
  const state = useSelector((state: RootStateOrAny) => state);
  const dispatch = useDispatch();
  return (
    <StyledButtonOverlay>
      <ColouredStyledButton
        type={"positive"}
        onClick={async () => {
          dispatch(setApprovedImage(state));
          await setReviewSession(dispatch, state.session);
        }}
      >
        <StyledImageBox url={Tick}></StyledImageBox>
      </ColouredStyledButton>
      <ColouredStyledButton
        type={"negative"}
        onClick={async () => {
          await setReviewSession(dispatch, state.session);
        }}
      >
        <StyledImageBox url={Cancel}></StyledImageBox>
      </ColouredStyledButton>
    </StyledButtonOverlay>
  );
}

export default ButtonOverlay;
