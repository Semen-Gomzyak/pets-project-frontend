import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/Auth/operations';
import { SecondRegisterFormSchema } from 'validations/SecondRegisterValidation';
import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer, toast } from 'react-toastify';
import {
  Button,
  Error,
  InfoForm,
  Input,
  InputsList,
  Link,
  RegisterTitle,
  Text,
  ButtonContainer,
} from './RegisterForm.styled';

export const SecondRegisterForm = ({ data, firstStep, back }) => {
  const { email, password } = firstStep;
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: data.name || '',
      city: data.city || '',
      phone: data.phone || '',
    },
    validationSchema: SecondRegisterFormSchema,

    handleSubmit: async values => {
      dispatch(
        register({
          email,
          password,
          name: values.name.trim(),
          cityRegion: values.city.trim(),
          mobilePhone: values.phone,
        })
      );
    },
  });

  const requestData = {
    name: formik.values.name,
    cityRegion: formik.values.cityRegion,
    mobilePhone: formik.values.mobilePhone,
  };


  // if (response.payload.status === 201) {
  //   toast.success('success registration');
  //   const loginResponse = await dispatch(
  //     login({ email: data.email, password: data.password }),
  //   );

  //   if (response.payload.status === 409) {
  //     toast.error(`${data.email} is use please login`);
  //     navigate('/login', { replace: true })
  //   }

  //   if (loginResponse.payload.status === 200) {
  //     navigate('/profile', { replace: true });
  //   } else {
  //     toast.error('Something went wrong with login');
  //   }
  // } else {
  //    toast.error(`Something went wrong with registration, please try again`);
  // }

  // resetForm();

  return (
    <form onSubmit={formik.handleSubmit}>
      <InfoForm autoComplete="off">
        <RegisterTitle>Registration</RegisterTitle>
        <InputsList>
          <Input
            id="name"
            name="name"
            placeholder="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.touched.name && formik.errors.name && (
            <Error>{formik.errors.name}</Error>
          )}
          <Input
            id="cityRegion"
            name="cityRegion"
            placeholder="City, region"
            value={formik.values.cityRegion}
            onChange={formik.handleChange}
          />
          {formik.touched.cityRegion && formik.errors.cityRegion && (
            <Error>{formik.errors.cityRegion}</Error>
          )}
          <Input
            id="mobilePhone"
            name="mobilePhone"
            type="phone"
            autoComplete="phone"
            placeholder="Phone"
            value={formik.values.mobilePhone}
            onChange={formik.handleChange}
          />{' '}
          {formik.touched.mobilePhone && formik.errors.mobilePhone && (
            <Error>{formik.errors.mobilePhone}</Error>
          )}
        </InputsList>

        <ButtonContainer>
          <Button type="submit">Register</Button>
          <Button type="button" onClick={() => back(requestData)}>
            Back
          </Button>
        </ButtonContainer>
        <Text>
          Already have an account?
          <Link href="/login">Login</Link>
        </Text>
      </InfoForm>
    </form>
  );
};















// =================================================



// import { Formik } from 'formik';
// import { useDispatch } from 'react-redux';
// import { register, login } from 'redux/Auth/operations';
// import { SecondRegisterFormSchema } from 'validations/SecondRegisterValidation';
// import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer, toast } from 'react-toastify';
// import {
//   Button,
//   Error,
//   InfoForm,
//   Input,
//   InputsList,
//   Link,
//   RegisterTitle,
//   Text,
//   ButtonContainer,
// } from './RegisterForm.styled';
// import {  useNavigate } from 'react-router';
// import { useState } from 'react';


// export const SecondRegisterForm = ({ data, secondData, onClick }) => {
//   // const [name, setName] = useState('');
//   // const [cityRegion, setCityRegion] = useState('');
//   // const [mobilePhone, setMobilePhone] = useState('');

//   // switch (name) {
//   //   case name:
//   //     setName(Formik.values.name)
//   //     break;
  
//   //   default:
//   //     break;
//   // }

//   const navigate = useNavigate();
//   const initialValues = {
//     name: secondData.name || '',
//     cityRegion: secondData.cityRegion || '',
//     mobilePhone: secondData.mobilePhone || '',
//   };

//   const dispatch = useDispatch();

//   const handleSubmit = async (values, { resetForm }) => {
//     const response = await dispatch(
//       register({
//         email: data.email,
//         password: data.password,
//         name: values.name,
//         cityRegion: values.cityRegion,
//         mobilePhone: values.mobilePhone,
//       })
//     );


//     if (response.payload.status === 201) {
//       toast.success('success registration');
//       const loginResponse = await dispatch(
//         login({ email: data.email, password: data.password }),
//       );

//       if (response.payload.status === 409) {
//         toast.error(`${data.email} is use please login`);
//         navigate('/login', { replace: true })
//       }

//       if (loginResponse.payload.status === 200) {
//         navigate('/profile', { replace: true });
//       } else {
//         toast.error('Something went wrong with login');
//       }
//     } else {
//        toast.error(`Something went wrong with registration, please try again`);
//     }

//     resetForm();
//   };

//   const dataForInputs = values => {
//     return {
      
//     }
//   }

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={SecondRegisterFormSchema}
//       onSubmit={handleSubmit}
//       onClick={dataForInputs}
//     >
//       {props => (
//         <InfoForm autoComplete="off" onSubmit={props.handleSubmit}>
//           <RegisterTitle>Registration</RegisterTitle>
//           <InputsList>
//             <Error name="name" component="div" />
//             <Input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={props.values.name}
//               onChange={props.handleChange}
//             />
//             <Error name="cityRegion" component="div" />
//             <Input
//               type="text"
//               name="cityRegion"
//               placeholder="City, region"
//               value={props.values.cityRegion}
//               onChange={props.handleChange}
//             />
//             <Error name="mobilePhone" component="div" />
//             <Input
//               type="text"
//               name="mobilePhone"
//               placeholder="Mobile phone"
//               value={props.values.mobilePhone}
//               onChange={props.handleChange}
//             />
//           </InputsList>
//           <ButtonContainer>
//             <Button type="submit">Register</Button>
//             <Button
//               type="submit"
//               onClick={() => onClick(dataForInputs)}
//             >
//               Back
//             </Button>
//           </ButtonContainer>
//           <Text>
//             Already have an account?
//             <Link href="/login">Login</Link>
//           </Text>
//         </InfoForm>
//       )}
//     </Formik>
//   );
// };
