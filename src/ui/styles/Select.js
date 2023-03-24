import styled from "styled-components";

const Select = styled.select`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 4px 8px 4px 16px;
  background: #FFF;
  border: 1px solid var(--theme-ui-colors-primary);
  border-radius: 4px;
  &:active {
    outline: 1px solid var(--theme-ui-colors-secondary);
  }
`;

export default Select;
