import styled from "styled-components";
import ImageBox from "../atoms/ImageBox";
import Arrow from "../../assets/images/arrow.png";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { SessionState } from "../../store/types";
import { setLoading } from "../../store/actions/session";

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

export default function ImageViewer() {
  const dispatch = useDispatch();
  const sessionData: SessionState = useSelector(
    (state: RootStateOrAny) => state.session
  );
  return (
    <StyledImageViewer isInitial={sessionData.sessionState === "initial"}>
      <ImageBox onLoad={() => {
      console.log("hihi");
        dispatch(setLoading(false));
        }} isInitial={sessionData.sessionState === "initial"} url={sessionData.sessionState === "initial" ? Arrow : sessionData.currentReviewPhoto.regular}></ImageBox>
    </StyledImageViewer>
  );
}

interface ImageViewerProps {
  isInitial?: boolean;
}