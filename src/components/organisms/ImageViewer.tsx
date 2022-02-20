import styled, { CSSProperties } from "styled-components";

export default function ImageViewer({ styles }: ImageViewerProps) {
    const StyledImageViewer = styled.div`
    `;

    return (<StyledImageViewer style={styles}>
        
    </StyledImageViewer>);
}

interface ImageViewerProps {
    styles?: CSSProperties;
}