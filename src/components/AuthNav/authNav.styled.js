import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavLinkItem = styled.div`
  display: flex;
  justify-content: left;
  gap: 40px;
  margin-bottom: 40px;
  margin-top: 40px;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: lightskyblue;
  font-size: 20px;

  &:hover {
    color: pink;
  }
`;
