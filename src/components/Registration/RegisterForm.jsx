import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/Auth/authOperations';
import { FirstRegisterForm } from './FirstRegisterForm';
// import { FirstRegisterForm } from './FirstRegisterForm';
import { SecondRegisterForm } from './SecondRegisterForm';

export const RegisterForm = () => {
  //     const [email, setEmail] = useState('');
  //     const [password, setPassword] = useState('');
  //     const [confirm_password, setConfirm_password] = useState('');
  // const [showNext, setShowNext] = useState(false);

  // const showNextModal = () => {
  //     if (email && password && confirm_password) {
  //         setShowNext(true);
  //     }
  // }

  //     const handleChange = e => {
  //       const { name, value } = e.target;
  //       switch (name) {
  //         case 'email':
  //           setEmail(value);
  //           break;
  //         case 'password':
  //           setPassword(value);
  //           break;
  //         case 'confirm_password':
  //           setConfirm_password(value);
  //           break;
  //         default:
  //           break;
  //       }
  //     };

  //   const dispatch = useDispatch();

    // const handleSubmit = e => {
    //   e.preventDefault();
    //   const form = e.currentTarget;

    //   dispatch(
    //     register({
    //       email: form.elements.email.value,
    //       password: form.elements.password.value,
    //       name: form.elements.name.value,
    //       city: form.elements.city.value,
    //       phone: form.elements.phone.value,
    //     })
    //   );
    //   form.reset();
    // };

  const [firstData, setFirstData] = useState({});
//   const [secondData, setSecondData] = useState({});
  const [showNext, setShowNext] = useState(false);

  // const showNextModal = () => {
  //   if (firstData.email && firstData.password === firstData.confirm_password) {
  //     setShowNext(true);
  //   }
  // };

  const onSubmit = values => {
    if (values.email !== '' && values.password === values.confirmPassword) {
      setShowNext(true);
      setFirstData(values);
    }
  };

//   const secondFormData = values => {
//     setSecondData(values);
//   };

  const handleBack = () => {
    setShowNext(false);
  };

  return (
    <div>
      <h2>Registration</h2>
      <>
        {!showNext ? (
          <FirstRegisterForm
            onSubmit={onSubmit}
            data={firstData}
            onClick={showNext}
          />
        ) : (
          <SecondRegisterForm
            // onSubmit={secondFormData}
            data={firstData}
            onClick={handleBack}
          />
        )}
      </>
    </div>
  );
};
