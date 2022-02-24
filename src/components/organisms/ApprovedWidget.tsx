import { RootStateOrAny, useSelector } from "react-redux";
import styled, { CSSProperties } from "styled-components";
import { SessionState } from "../../store/types";
import ApprovedSlider from "../molecules/ApprovedSlider";

const StyledApprovedWidget = styled.div`
  border-bottom: 1px solid #e5e5e5;
`;
export default function ApprovedWidget({ styles }: ApprovedWidgetProps) {
  const sessionData: SessionState = useSelector(
    (state: RootStateOrAny) => state.session
  );
  return (
    <StyledApprovedWidget style={styles}>
      <p>Approved Images ({sessionData.approvedImages.length})</p>
      <ApprovedSlider />
    </StyledApprovedWidget>
  );
}

interface ApprovedWidgetProps {
  styles?: CSSProperties;
}
