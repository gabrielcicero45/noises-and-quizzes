import styled from "styled-components";

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 56px;
  height: 32px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--theme-ui-colors-gray10);
    transition: 0.4s;
  }

  span:before {
    position: absolute;
    content: "";
    height: 24px;
    width: 24px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
  }

  input:checked + span {
    background-color: var(--theme-ui-colors-secondary);
  }

  input:focus + span {
    box-shadow: 0 0 1px var(--theme-ui-colors-secondary);
  }

  input:checked + span:before {
    transform: translateX(24px);
  }

  span {
    border-radius: 34px;
  }

  span:before {
    border-radius: 50%;
  }
`;

export default Switch;
