import styled from "styled-components";

const Select = styled.select`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 4px 8px 4px 16px;
  background: var(--white);
  border: 1px solid var(--black);
  border-radius: 4px;
  &:active {
    outline: 2px solid var(--green);
  }
`;

export default Select;
