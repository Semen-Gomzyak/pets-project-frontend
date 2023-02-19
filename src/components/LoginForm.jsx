import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { logIn } from 'redux/auth-operations';
import css from './LoginForm.module.css';
import { selectError } from 'redux/selectors';

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
      {error && <p className={css.error}>{error}</p>}
      <form
        className={css.form}
        onSubmit={handleSubmit(data => dispatch(logIn(data)))}
      >
        <h3 className={css.title}>Login</h3>
        <label className={css.label}>
          Email
          <input
            className={css.input}
            type="email"
            {...registerForm('email', { required: 'Enter your email' })}
          />
          {errors.email?.message && (
            <p className={css.error}>{errors.email.message}</p>
          )}
        </label>
        <label className={css.label}>
          Password
          <input
            className={css.input}
            type="password"
            {...registerForm('password', { required: 'Enter your password' })}
          />
          {errors.password?.message && (
            <p className={css.error}>{errors.password.message}</p>
          )}
        </label>
        <button className={css.button} type="submit">
          Login
        </button>
        <h5 className={css.subtext}>Don't have an account? Register</h5>
      </form>
    </>
  );
};
