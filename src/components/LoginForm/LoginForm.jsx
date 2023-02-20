import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { login } from 'redux/Auth/authOperations';
import { selectError } from 'redux/Auth/authSelectors';
import {
  Form,
  Input,
  Button,
  LoginTitle,
  Error,
  Text,
  Link,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const {
    register: registerForm,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const error = useSelector(selectError);

  return (
    <>
      {error && <Error>{error}</Error>}
      <Form onSubmit={handleSubmit(data => dispatch(login(data)))}>
        <LoginTitle>Login</LoginTitle>

        <Input
          placeholder="Email"
          type="email"
          {...registerForm('email', { required: 'Please, enter your Email' })}
        />
        {errors.email?.message && <Error>{errors.email.message}</Error>}
        <Input
          placeholder="Password"
          type="password"
          {...registerForm('password', {
            required: 'Please, enter your Password',
            minLength: { value: 6, message: 'Min Length 6' },
          })}
        />
        {errors.password?.message && <Error>{errors.password.message}</Error>}

        <Button type="submit">Login</Button>
        <Text>
          Don't have an account?
          <Link href="">Register</Link>
        </Text>
      </Form>
    </>
  );
};
