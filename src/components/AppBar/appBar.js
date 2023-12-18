import { Navigation } from 'components/Navigation/navigation';
import { UserMenu } from 'components/UserMenu/userMenu';
import { AuthNav } from 'components/AuthNav/authNav';
import { useAuth } from 'redux/authorization/useAuth';
import { Header } from './appBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
