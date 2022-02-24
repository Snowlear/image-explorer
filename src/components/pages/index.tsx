import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import styled from "styled-components";
import { SessionState } from "../../store/types";
import Body from "../atoms/Body";
import TextArea from "../atoms/TextArea";
import Wrapper from "../atoms/Wrapper";
import ButtonOverlay from "../molecules/ButtonOverlay";
import Header from "../molecules/Header";
import ApprovedWidget from "../organisms/ApprovedWidget";
import ImageViewer from "../organisms/ImageViewer";
import { ReactComponent as Plus } from "../../assets/images/plus.svg";
import LoadingOverlay from "../molecules/LoadingOverlay";

const StyledTextArea = styled(TextArea)`
  text-align: center;
  border-top: 1px solid #e5e5e5;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const StyledPlus = styled(Plus)`
  color: green;
  height: 15px;
  width: 15px;
`;

export default function Index() {
  const sessionData: SessionState = useSelector(
    (state: RootStateOrAny) => state.session
  );
  return (
    <div>
      <Body>
        <Header />
        <Wrapper>
          <ApprovedWidget />
          <ImageViewer/>
          {sessionData && sessionData.sessionState !== "initial" ? (
            <ButtonOverlay />
          ) : (
            <StyledTextArea>
                Click on the <StyledPlus /> in order to get image
                recommendations.
            </StyledTextArea>
          )}
        </Wrapper>
      </Body>
      <LoadingOverlay isLoading={sessionData.isLoading}/>
    </div>
  );
}
