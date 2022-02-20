import styled, { CSSProperties } from "styled-components";

export default function Button({ children, styles }: ButtonProps) {
    const Button = styled.button`
    `;

    return (<Button style={styles}>
        {children}
    </Button>);
}

interface ButtonProps {
    children?: any;
    styles?: CSSProperties;
}