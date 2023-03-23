import styled, { css } from "styled-components";

export const AlertText = styled.span`
  font-family: "Red Hat Text";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 175%;
  display: flex;
  align-self: center;
  color: var(--black);
`;

export const Alert = styled.div`
  position: absolute;
  top: 15vh;
  right: 1vw;
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 24px 32px 24px 24px;
  gap: 24px;
  border-radius: 8px;

  ${(props) => {
    switch (props.type) {
      case "warning":
        return css`
          border: 2px solid var(--danger);
          img {
            height: 32px;
            width: 32px;
            align-self: center;
            filter: invert(12%) sepia(100%) saturate(7498%) hue-rotate(10deg)
              brightness(96%) contrast(107%);
          }
        `;
      default:
        return css`
          border: 2px solid var(--black);
          img {
            height: 32px;
            width: 32px;
            align-self: center;
            filter: invert(0%) sepia(1%) saturate(3%) hue-rotate(326deg)
              brightness(97%) contrast(104%);
          }
        `;
    }
  }}
`;
