import styled from "styled-components";

export const Card = styled.div`
  margin: 8px;
  border-radius: 8px;
  display: grid;
  grid-template-areas:
    "id id action action"
    "content content content content"
    "confirm confirm confirm confirm";
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
    justify-self:center;
  }
`;

export const CardContent = styled.div`
  grid-area: content;
  margin: 16px;
`;
