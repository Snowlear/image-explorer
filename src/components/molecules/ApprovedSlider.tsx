import { RootStateOrAny, useSelector } from "react-redux";
import styled, { CSSProperties } from "styled-components";
import { useHorizontalScroll } from "../../helpers/horizontalScrollSupport";
import ImageCard from "./ImageCard";
import { useDispatch } from "react-redux";
import { setReviewSession } from "../../helpers/dataHandle";
import { SessionState } from "../../store/types";

const StyledApprovedSlider = styled.div`
  white-space: nowrap;
  overflow-x: hidden;
  overflow-y: hidden;
  margin-bottom: 10px;
`;

export default function ApprovedSlider({ styles }: ApprovedSliderProps) {
  const scrollRef = useHorizontalScroll();
  const dispatch = useDispatch();
  const sessionData: SessionState = useSelector(
    (state: RootStateOrAny) => state.session
  );
  return (
    <StyledApprovedSlider ref={scrollRef} style={styles}>
      <ImageCard
        onClick={() => setReviewSession(dispatch, sessionData)}
        isPlus={true}
      ></ImageCard>
      {sessionData.approvedImages.map((imageData, idx) => {
        return (
          <ImageCard key={"image_" + idx} imgUrl={imageData.thumb}></ImageCard>
        );
      })}
    </StyledApprovedSlider>
  );
}

interface ApprovedSliderProps {
  styles?: CSSProperties;
}
