import styled, { CSSProperties } from "styled-components";

const StyledImage = styled.img`
  width: 100%;
`;

export default function ImageBox({
  url,
  styles,
  placeholderText,
  className,
}: ImageBoxProps) {
  return <StyledImage className={className} src={url} alt={placeholderText} style={styles} />;
}

interface ImageBoxProps {
  className?: string;
  placeholderText?: string;
  url?: any;
  styles?: CSSProperties;
}
