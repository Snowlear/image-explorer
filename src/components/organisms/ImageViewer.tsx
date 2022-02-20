import styled, { CSSProperties } from "styled-components";
import ImageBox from "../atoms/ImageBox";
import Plus from '../../assets/images/plus.png';

export default function ImageViewer({ isInitial }: ImageViewerProps) {
    const StyledImageViewer = styled.div<ImageViewerProps>`
    text-align: center;
    margin: auto;
    margin-bottom:20px;
    margin-top: 20px;
    width:80%;
    height:400px;
    ${props => props.isInitial && `
    width:40%;
    `}
    `;

    return (
        <StyledImageViewer isInitial={isInitial}>
            <ImageBox url={Plus} ></ImageBox>
        </StyledImageViewer>
    );
}

interface ImageViewerProps {
    isInitial?: boolean;
}