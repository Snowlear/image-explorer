import styled, { CSSProperties } from "styled-components";

export default function Box({ children, styles }: BoxProps) {
  const Box = styled.div``;

  return <Box style={styles}>{children}</Box>;
}

interface BoxProps {
  children?: any;
  styles?: CSSProperties;
}
