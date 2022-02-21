import React from "react";
import Body from "../atoms/Body";
import Wrapper from "../atoms/Wrapper";
import ButtonOverlay from "../molecules/ButtonOverlay";
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
          <ButtonOverlay />
        </Wrapper>
      </Body>
    </div>
  );
}

export default Index;
