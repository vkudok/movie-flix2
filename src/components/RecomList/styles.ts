import styled from "styled-components";

export const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

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


export const CenterBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem auto;
`;

export const Title = styled.h4`
    font-size: 2.4rem;
    color: var(--gray-50);
    margin: 10px;
`;