import styled from "styled-components";

export default function Box({ children }: BoxProps) {
    const Box = styled.div`
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        border-radius: 5px;
    `;

    return (<Box>
        {children}
    </Box>);
}

interface BoxProps {
    children?: any;
    isClear?: boolean;
    styles?: string;
}