import styled from "styled-components";

export default function Button({ children, onClick, className }: ButtonProps) {
    const Button = styled.button`
    margin: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    `;

    return (<Button onClick={() => onClick()} className={className}>
        {children}
    </Button>);
}

interface StyledButtonProps{
    type? : "positive" | "negative" | "basic";
  }

  export const StyledButton = styled(Button)<StyledButtonProps>`
    display: flex;
    justify-content: center;
    border-radius: 30px;
    font-size:20px;
    width: 150px;
    ${props => props.type == "positive" && `
    border: 1px solid #0fff009e;
    background-color: #28ff002b;`}
    ${props => props.type == "negative" && `
    border: 1px solid #ff00002b;
    background-color: #ff00002b;`}
  `;

interface ButtonProps {
    children?: any;
    onClick: Function;
    className?: string;
}