import { useDispatch } from 'react-redux';
import { register } from 'redux/authorization/operationsAuth';
import { Form, Label, Input, Button } from './registerForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <Input type="text" name="name" />
      </Label>
      <Label>
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" />
      </Label>
      <Button type="submit">Register</Button>
    </Form>
  );
};
