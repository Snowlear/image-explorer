import styled, { CSSProperties } from "styled-components";
import { useHorizontalScroll } from "../../helpers/horizontalScrollSupport";
import ImageCard from "./ImageCard";

export default function ApprovedSlider({ styles }: ApprovedSliderProps) {
    const StyledApprovedSlider = styled.div`
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    margin-bottom: 10px;
    `;

    const scrollRef = useHorizontalScroll();

    return (<StyledApprovedSlider ref={scrollRef} style={styles}>
        <ImageCard></ImageCard>
        <ImageCard></ImageCard>
        <ImageCard></ImageCard>
        <ImageCard></ImageCard>
        <ImageCard></ImageCard>
        <ImageCard></ImageCard>
        <ImageCard></ImageCard>
        <ImageCard></ImageCard>
        <ImageCard></ImageCard>
        <ImageCard></ImageCard>
    </StyledApprovedSlider>);
}

interface ApprovedSliderProps {
    styles?: CSSProperties;
}