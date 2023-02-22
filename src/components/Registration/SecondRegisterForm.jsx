import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/Auth/authOperations';
import { SecondRegisterFormSchema } from 'validations/SecondRegisterValidation';

export const SecondRegisterForm = ({ data, onClick }) => {
  const initialValues = {
    name: '',
    city: '',
    phone: '',
  };

  const dispatch = useDispatch();

  const handleSubmit = values => {
    //   e.preventDefault();
    //   const form = e.currentTarget;
    console.log({
      email: data.email,
      password: data.password,
      name: values.name,
      city: values.city,
      phone: values.phone,
    });
    //   dispatch(
    //     register({
    //       email: data.email,
    //       password: data.password,
    //       name: form.elements.name.value,
    //       city: form.elements.city.value,
    //       phone: form.elements.phone.value,
    //     })
    //   );
    //   form.reset();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SecondRegisterFormSchema}
      onSubmit={handleSubmit}
    >
      {props => (
        <Form autoComplete="off" onSubmit={props.handleSubmit}>
          <Field
            type="text"
            name="name"
            placeholder="Name"
            value={props.values.name}
            onChange={props.handleChange}
          />
          <Field
            type="text"
            name="city"
            placeholder="City, region"
            value={props.values.city}
            onChange={props.handleChange}
          />
          <Field
            type="text"
            name="phone"
            placeholder="Mobile phone"
            value={props.values.phone}
            onChange={props.handleChange}
          />
          <button type="submit">Register</button>
          <button type="button" onClick={() => onClick()}>
            Back
          </button>
        </Form>
      )}
    </Formik>
  );
};

// import { useState } from 'react';
// import { SecondRegisterFormSchema } from 'validations/SecondRegisterValidation';
// // import { useLocation } from "react-router-dom";

// export const SecondRegisterForm = ({ handleBack }) => {
//   const [name, setName] = useState('');
//   const [city, setCity] = useState('');
//   const [phone, setPhone] = useState('');

//   const handleChange = e => {
//     const { name, value } = e.target;
//     switch (name) {
//       case 'name':
//         setName(value);
//         break;
//       case 'city':
//         setCity(value);
//         break;
//       case 'phone':
//         setPhone(value);
//         break;
//       default:
//         break;
//     }
//   };

//   // const location = useLocation();
//   // const backLinkHref = location.state?.from

//   return (
//     <>
//       <input
//         type="text"
//         name="name"
//         placeholder="Name"
//         value={name}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="city"
//         placeholder="City, region"
//         value={city}
//         onChange={handleChange}
//       />
//       <input
//         type="number"
//         name="phone"
//         placeholder="Mobile phone"
//         value={phone}
//         onChange={handleChange}
//       />
//       <button type="submit">Register</button>
//       <button type="button" onClick={handleBack}>
//         Back
//       </button>
//     </>
//   );
// };
