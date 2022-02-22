import { useSelector } from "react-redux";
import styled, { CSSProperties } from "styled-components";
import { useHorizontalScroll } from "../../helpers/horizontalScrollSupport";
import ImageCard from "./ImageCard";

const StyledApprovedSlider = styled.div`
  white-space: nowrap;
  overflow-x: hidden;
  overflow-y: hidden;
  margin-bottom: 10px;
`;

export default function ApprovedSlider({ styles }: ApprovedSliderProps) {
  const scrollRef = useHorizontalScroll();
  const state = useSelector((state) => state);
  return (
    <StyledApprovedSlider ref={scrollRef} style={styles}>
      <ImageCard isPlus={true}></ImageCard>
      <ImageCard></ImageCard>
    </StyledApprovedSlider>
  );
}

interface ApprovedSliderProps {
  styles?: CSSProperties;
}
