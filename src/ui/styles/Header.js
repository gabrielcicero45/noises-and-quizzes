import styled from "styled-components";
export const HeaderText = styled.span`
  margin: 16px;
  color: var(--theme-ui-colors-primaryText);
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Red Hat Display";
  font-weight: 900;
  text-align: center;
  height: 64px;
  padding-left: 32px;
  padding-right: 32px;
  background: var(--theme-ui-colors-primary);
  grid-column: span 2;
`;

