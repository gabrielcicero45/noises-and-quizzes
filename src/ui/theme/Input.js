import styled from "styled-components";

const Input = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 4px 8px 4px 16px;
  background: var(--white);
  border: 1px solid var(--black);
  border-radius: 4px;
  &:focus {
    border: 0;
    outline: 1px solid var(--green);
  }
`;

export default Input;
