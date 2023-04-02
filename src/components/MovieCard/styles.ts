import styled from "styled-components";

export const Card =  styled.div`
  height: 48rem;
  width: 28.2rem;
  display: flex;
  flex-direction: column;
  padding: 0.8rem;
  border-radius: 12px;
  background-color: var(--black-65);
  backdrop-filter: blur(80px);
  transition: .3s ease-out;
  img {
    height: 40rem;
    width: 26.6rem;
    border-radius: 8px;
  }

  > div {
    margin: 0.8rem 0;
  }
  
  &:hover {
    span {
        color: var(--gray-400);
    }
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;


export const Title =  styled.span`
  font-size: 1.8rem;
  line-height: 2.4rem;
  letter-spacing: 2%;
  font-weight: 500;
  text-align: center;
  margin: 5px;
  transition: .3s ease-out;
  color: var(--gray-50);
`;
