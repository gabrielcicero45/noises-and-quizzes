import styled from "styled-components";

const StyledQuestion = styled.div`
  width: 40vw;
  margin: 8px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 16px;
  border: 1px solid #E9E9E9;
  border-top: 3px solid var(--blue);
  &:hover {
    border: 3px solid var(--green);
  }
`;

export default StyledQuestion;
