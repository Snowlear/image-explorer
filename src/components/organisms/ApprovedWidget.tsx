import styled, { CSSProperties } from "styled-components";
import ApprovedSlider from "../molecules/ApprovedSlider";

export default function ApprovedWidget({ styles }: ApprovedWidgetProps) {
  const StyledApprovedWidget = styled.div`
    border-bottom: 1px solid #e5e5e5;
  `;

  return (
    <StyledApprovedWidget style={styles}>
      <p>Approved Images (0)</p>
      <ApprovedSlider />
    </StyledApprovedWidget>
  );
}

interface ApprovedWidgetProps {
  styles?: CSSProperties;
}
