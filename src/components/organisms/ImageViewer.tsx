import styled from "styled-components";
import ImageBox from "../atoms/ImageBox";
import Arrow from "../../assets/images/arrow.png";

const StyledImageViewer = styled.div<ImageViewerProps>`
  text-align: center;
  margin: auto;
  margin-bottom: 20px;
  margin-top: 20px;
  width: 80%;
  height: 500px;
  ${(props) =>
    props.isInitial &&
    `
    padding:20px;
    background-color: #ece9f9;
    border: 1px solid #d9d6ff;
    height:40%;
    width:40%;
    `}
`;

export default function ImageViewer({ isInitial }: ImageViewerProps) {
  return (
    <StyledImageViewer isInitial={isInitial}>
      <ImageBox isInitial={isInitial} url={Arrow}></ImageBox>
    </StyledImageViewer>
  );
}

interface ImageViewerProps {
  isInitial?: boolean;
}
