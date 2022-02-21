import styled, { CSSProperties } from "styled-components";

const StyledImage = styled.img`
  width: 100%;
`;

export default function ImageBox({
  url,
  styles,
  placeholderText,
}: ImageBoxProps) {
  return <StyledImage src={url} alt={placeholderText} style={styles} />;
}

interface ImageBoxProps {
  placeholderText?: string;
  url?: any;
  styles?: CSSProperties;
}
