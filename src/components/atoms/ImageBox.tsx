import { CSSProperties } from "styled-components";

export default function ImageBox({ url, styles, placeholderText }: ImageBoxProps) {
    return (<img src={url} alt={placeholderText} style={styles}/>);
}

interface ImageBoxProps {
    placeholderText? : string;
    url?: any;
    styles?: CSSProperties;
}