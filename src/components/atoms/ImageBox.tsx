import styled, { CSSProperties } from "styled-components";

const StyledImage = styled.img`
  height: 100%;
    width: 100%;
    object-fit: contain;
`;

export default function ImageBox({
  url,
  styles,
  placeholderText,
  className,
  isInitial,
  onLoad,
}: ImageBoxProps) {
  return (
    <StyledImage
      onLoad={() =>onLoad && onLoad()}
      className={className}
      src={url}
      alt={placeholderText}
      style={styles}
    />
  );
}

interface ImageBoxProps {
  isInitial?: boolean;
  className?: string;
  placeholderText?: string;
  url?: any;
  styles?: CSSProperties;
  onLoad?: Function;
}
