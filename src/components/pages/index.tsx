import React from "react";
import styled from "styled-components";
import Body from "../atoms/Body";
import Wrapper from "../atoms/Wrapper";
import Header from "../molecules/Header";
import ApprovedWidget from "../organisms/ApprovedWidget";
import ImageViewer from "../organisms/ImageViewer";

function Index() {
  
  return (
    <div>
      <Body>
        <Header />
        <Wrapper>
          <ApprovedWidget />
          <ImageViewer isInitial={true} />
        </Wrapper>
      </Body>
    </div>
  );
}

export default Index;
