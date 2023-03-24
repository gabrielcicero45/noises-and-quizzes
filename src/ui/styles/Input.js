import styled from "styled-components";

const Input = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:center;
  gap: 8px;
  padding: 4px 8px 4px 16px;
  border: 1px solid var(--theme-ui-colors-primary);
  border-radius: 4px;
  &:focus {
    border: 0;
    outline: 1px solid var(--theme-ui-colors-secondary);
  }
`;

export default Input;
