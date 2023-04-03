import styled from "styled-components";

export const NavigationButton = styled.button<{ disabled: boolean }>`
  width: 15rem;
  height: 3.6rem;
  border: 0;
  border-radius: 4px;
  background-color: var(--primary);
  font-family: "Poppins", sans-serif;
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 500;
  color: var(--white);
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  &:hover {
    filter: brightness(0.8);
  }
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
`;