import { Navigation } from 'components/Navigation/navigation';
import { UserMenu } from 'components/UserMenu/userMenu';
import { AuthNav } from 'components/AuthNav/authNav';
import { useAuth } from 'redux/authorization/useAuth';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
