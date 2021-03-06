import styled, { CSSProperties } from "styled-components";
import ImageBox from "../atoms/ImageBox";
import LoadingGif from "../../assets/images/loading-buffering.gif";

const StyledLoadingOverlay = styled.div<ApprovedSliderProps>`
position: fixed;
left: 0;
top: 0;
height: 100%;
width: 100%;
  background-color: #00000082;
  color: white;
  ${(props) => (props.isLoading ? "display: flex;" : "display: none;")}
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledImageBox = styled(ImageBox)`
  width: 100px;
  height: 100px;
`;

export default function LoadingOverlay({
  styles,
  isLoading,
}: ApprovedSliderProps) {
  return (
    <StyledLoadingOverlay isLoading={isLoading} style={styles}>
      <StyledImageBox url={LoadingGif} />
      <p>Please wait...</p>
    </StyledLoadingOverlay>
  );
}

interface ApprovedSliderProps {
  styles?: CSSProperties;
  isLoading: boolean;
}
