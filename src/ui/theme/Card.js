import styled from "styled-components";

export const Card = styled.div`
  margin: 8px;
  min-width: 40vw;
  border-radius: 8px;
  display: grid;
  grid-template-areas:
    "id id action action"
    "content content content content"
    "confirm confirm cancel cancel";
  padding: 16px;
  border: 1px solid #e9e9e9;
  border-top: 3px solid var(--blue);
  transition: 0.7s;
  &:hover {
    border: 3px solid var(--green);
  }
  #question-id {
    color: var(--grey);
    grid-area: id;
  }
  #question-confirm {
    grid-area: confirm;
    grid-column: 2 / span 1;
    justify-self: end;
  }
  #question-cancel {
    grid-area: cancel;
    grid-column: 3 / span 1;
    justify-self: start;
  }
`;

export const CardContent = styled.div`
  grid-area: content;
  margin: 16px;
`;
