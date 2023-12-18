import { NavLinkItem, Link } from './authNav.styled';

export const AuthNav = () => {
  return (
    <NavLinkItem>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </NavLinkItem>
  );
};
