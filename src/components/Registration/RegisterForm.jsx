import { useDispatch } from 'react-redux';
import { register } from 'redux/Auth/authOperations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        email: form.elements.email.value,
        password: form.elements.password.value,
        name: form.elements.name.value,
        city: form.elements.city.value,
        phone: form.elements.phone.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email"></input>
      </form>
    </div>
  );
};
