import styled, { css } from "styled-components";

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 8px;
  padding: 12px 32px;
  border-radius: 45px;
  border: 0;
  color: var(--white);
  &:hover {
    transition: 0.5s;
  }
  ${(props) => {
    switch (props.type) {
      case "danger":
        return css`
          background-color: var(--danger);
          &:hover {
            background-color: var(--white);
            border: 1px solid var(--danger);
            color: var(--danger);
          }
        `;
        case "action":
          return css`
           background-color: var(--blue);
          &:hover {
            background-color: var(--white);
            border: 1px solid var(--blue);
            color: var(--blue);
          }
          `
      default:
        return css`
          background-color: var(--black);
          &:hover {
            background-color: var(--green);
            color: var(--black);
          }
        `;
    }
  }}
`;

export default Button;
