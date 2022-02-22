import { useSelector } from "react-redux";
import styled, { CSSProperties } from "styled-components";
import { useHorizontalScroll } from "../../helpers/horizontalScrollSupport";
import ImageCard from "./ImageCard";
import { useDispatch } from "react-redux";
import { setSessionReview } from "../../store/actions/session";
import { getRandomImage, UnsplashResponse } from "../../services/unsplashService";

const StyledApprovedSlider = styled.div`
  white-space: nowrap;
  overflow-x: hidden;
  overflow-y: hidden;
  margin-bottom: 10px;
`;

export default function ApprovedSlider({ styles }: ApprovedSliderProps) {
  const scrollRef = useHorizontalScroll();
  const state = useSelector((state) => state);
  console.log("slider");
  console.log(state);
  const dispatch = useDispatch();
  const setReview = async () => {
    const randomImage:UnsplashResponse = await getRandomImage();
    if(randomImage.isError){
      alert("Error occured when image was retrieveing. Please try again later.");
    } else {
      dispatch(setSessionReview(randomImage.result));
    }
  };

  return (
    <StyledApprovedSlider ref={scrollRef} style={styles}>
      <ImageCard onClick={() => setReview()} isPlus={true}></ImageCard>
      <ImageCard></ImageCard>
    </StyledApprovedSlider>
  );
}

interface ApprovedSliderProps {
  styles?: CSSProperties;
}
