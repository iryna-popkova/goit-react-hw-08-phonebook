import { useDispatch } from 'react-redux';
import { logOut } from 'redux/authorization/operationsAuth';
import { useAuth } from 'redux/authorization/useAuth';
import { Container, Text, Button } from './userMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Container>
      <Text>Welcome, {user.name}</Text>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Container>
  );
};
