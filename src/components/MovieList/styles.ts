import styled from "styled-components";

export const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem auto;

  li {
    list-style-type: none;
    margin: 2.4rem;
  }

  @media (max-width: 1024px) {
    display: grid;
    grid-template-column: repeat(4, auto);
    gap: 2rem;
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;


export const NavigationButton = styled.button<{ disabled: boolean }>`
  width: 15rem;
  height: 3.6rem;
  border: 0;
  border-radius: 8px;
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