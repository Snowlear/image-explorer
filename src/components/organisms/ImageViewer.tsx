import styled, { CSSProperties } from "styled-components";
import Button from "../atoms/Button";
import ImageBox from "../atoms/ImageBox";

export default function ImageViewer({ styles }: ImageViewerProps) {
    const StyledImageViewer = styled.div`
    background-color:green;
    margin: auto;
    margin-bottom:20px;
    margin-top: 20px;
    width:80%;
    `;

    return (
        <StyledImageViewer>
            <ImageBox ></ImageBox>
            <Button>Approve</Button>
            <Button>Decline</Button>
        </StyledImageViewer>
    );
}

interface ImageViewerProps {
    styles?: CSSProperties;
}