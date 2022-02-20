import React from 'react';
import styled from 'styled-components';
import { getRandomImage } from '../../services/unsplashService';
import Body from '../atoms/Body';
import { StyledButton } from '../atoms/Button';
import ImageBox from '../atoms/ImageBox';
import Wrapper from '../atoms/Wrapper';
import Header from '../molecules/Header';
import ApprovedWidget from '../organisms/ApprovedWidget';
import ImageViewer from '../organisms/ImageViewer';
import Tick from '../../assets/images/tick.png';
import Cancel from '../../assets/images/cancel.png';

function Index() {

  const ButtonOverlay = styled.div`
    display: flex;
    justify-content: center;
  `;
  
  return (
    <div>
        <Body>
          <Header/>
          <Wrapper>
            <ApprovedWidget/>
            <ImageViewer isInitial={true}/>
            <ButtonOverlay>
              <StyledButton type={"positive"} onClick={() => alert("")}>
                <ImageBox styles={{width:"30px", display: "flex", justifyContent:"center"}} url={Tick}></ImageBox>
                </StyledButton>
              <StyledButton type={"negative"} onClick={() => getRandomImage()}>
                <ImageBox styles={{width:"30px", display: "flex", justifyContent:"center"}} url={Cancel}></ImageBox>
              </StyledButton>
            </ButtonOverlay>
          </Wrapper>
        </Body>
    </div>
  );
}

export default Index;
