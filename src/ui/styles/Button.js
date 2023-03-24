import styled, { css } from "styled-components";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px;
  padding: 12px 24px;
  border-radius: 45px;
  border: 0;
  color: var(--theme-ui-colors-primaryText);
  font-family: "Red Hat Text";
  font-weight: 500;
  max-width: 20vw;
  align-self: center;
  transition: 0.3s;

  ${(props) => {
    switch (props.type) {
      case "danger":
        return css`
          background-color: var(--theme-ui-colors-danger);
          &:hover {
            background-color: var(--background);
            border: 1px solid var(--theme-ui-colors-danger);
            color: var(--theme-ui-colors-danger);
            img {
              filter: invert(12%) sepia(100%) saturate(7498%) hue-rotate(10deg)
                brightness(96%) contrast(107%);
            }
          }
        `;
      default:
        return css`
          background-color: var(--theme-ui-colors-primary);
          &:hover {
            background-color: var(--theme-ui-colors-secondary);
            color: var(--theme-ui-colors-secondaryText);
            img {
              filter: invert(0%) sepia(1%) saturate(3%) hue-rotate(326deg)
                brightness(97%) contrast(104%);
            }
          }
        `;
    }
  }}
`;

export default Button;
