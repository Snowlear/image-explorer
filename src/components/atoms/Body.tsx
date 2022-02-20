import styled, { CSSProperties } from "styled-components";

export default function Body({ children, minWidth }: BodyProps) {

    const Body = styled.div<{minWidth: string|undefined}>`
        font-family: "Roboto";
        background-color:white;
        display: block;
        overflow:hidden;
        margin-left: auto;
        margin-right: auto;
        width: ${props => (props.minWidth || "800")+"px"};
        @media screen and (max-width: 800px) {
              width: 100%;
          }
          @media screen and (min-width: 800px) {
            margin-top: 10px;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            border-radius: 5px;
        }
        `;

    return (<Body minWidth={minWidth}>
        {children}
    </Body>);
}

interface BodyProps {
    children?: any;
    minWidth?: string;
}