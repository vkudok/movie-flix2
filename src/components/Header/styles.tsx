import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const Link = styled(NavLink)`
  font-size: 1.6rem;
  line-height: 2.4rem;
  letter-spacing: 2%;
  font-weight: 500;
  color: var(--gray-50);
  &:hover {
    color: var(--primary);
  }
`;