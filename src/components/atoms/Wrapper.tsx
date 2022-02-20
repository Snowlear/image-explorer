import styled from "styled-components";

export default function Wrapper({ children }: WrapperProps) {
    const Wrapper = styled.div`
  padding-left:20px;
  padding-right: 20px;
  font-size: 15px;
  `;

    return (<Wrapper>
        {children}
    </Wrapper>);
}

interface WrapperProps {
    children?: any;
}