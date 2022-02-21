import styled, { CSSProperties } from "styled-components";

export default function ImageBox({
  url,
  styles,
  placeholderText,
}: ImageBoxProps) {
  const Image = styled.img`
    width: 100%;
  `;

  return <Image src={url} alt={placeholderText} style={styles} />;
}

interface ImageBoxProps {
  placeholderText?: string;
  url?: any;
  styles?: CSSProperties;
}
