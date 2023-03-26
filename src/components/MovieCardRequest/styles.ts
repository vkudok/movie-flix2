import styled from "styled-components";

export const Card =  styled.div`
  height: 48rem;
  width: 28.2rem;

  padding: 0.8rem;
  border-radius: 12px;
  background-color: var(--black-65);
  backdrop-filter: blur(80px);

  img {
    height: 40rem;
    width: 26.6rem;
    border-radius: 8px;
  }

  > div {
    margin: 0.8rem 0;
  }

  @media (min-width: 768px) {
    height: 48rem;
    width: 26.6rem;

    img {
      height: 40rem;
      width: 25rem;
      border-radius: 8px;
    }
  }
`;


export const Title =  styled.span`
  font-size: 1.6rem;
  line-height: 2.4rem;
  letter-spacing: 2%;
  font-weight: 500;
  color: var(--gray-50);
  &:hover {
    color: var(--primary);
  }
`;

export const Vote =  styled.span`
  font-size: 1.6rem;
  line-height: 2.4rem;
  letter-spacing: 2%;
  font-weight: 500;
  display: block;
  color: gray;
`;
