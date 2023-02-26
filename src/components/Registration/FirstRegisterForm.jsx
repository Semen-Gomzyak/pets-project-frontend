import { useFormik } from 'formik';
// import * as Yup from 'yup';

import { RegisterFormSchema } from 'validations/RegisterFormValidation';
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

export const FirstRegisterForm = ({ data, onSubmit }) => {
  //    useFormik
  const formik = useFormik({
    initialValues: {
      email: data.email.trim() || '',
      password: data.password.trim() || '',
      confirmPassword: '',
    },
    validationSchema: RegisterFormSchema,
    handleSubmit: values => {
      if (values.password === values.confirmPassword) {
        onSubmit(values);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <InfoForm autoComplete="off">
        <RegisterTitle>Registration</RegisterTitle>
        <InputsList>
          <Input
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Email"
          />
          {formik.touched.email && formik.errors.email && (
            <Error>{formik.errors.email}</Error>
          )}

          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="Password"
          />
          {formik.touched.password && formik.errors.password && (
            <Error>{formik.errors.password}</Error>
          )}

          <Input
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            autoComplete="password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            placeholder="Confirm Password"
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <Error>{formik.errors.confirmPassword}</Error>
          )}
        </InputsList>
      </InfoForm>

      <ButtonContainer>
        <Button type="submit">Next</Button>
      </ButtonContainer>
      <Text>
        Already have an account?
        <Link href="/login">Login</Link>
      </Text>
    </form>
  );
};










// ==================================

// import { Formik } from "formik";
// import { RegisterFormSchema } from "validations/RegisterFormValidation";
// import { Button, Error, InfoForm, Input, InputsList, Link, RegisterTitle, Text, ButtonContainer } from "./RegisterForm.styled";

// export const FirstRegisterForm = ({data, onSubmit, onClick}) => {
//     const initialValues = {
//         email: data.email || '',
//         password: data.password || '',
//         confirmPassword: data.confirmPassword || '',
//     }
//     const handleSubmit = (values) => {
//         console.log(values);
//         onSubmit(values)
//     }


//     return (
//       <Formik
//         initialValues={initialValues}
//         validationSchema={RegisterFormSchema}
//         onSubmit={handleSubmit}
//       >
//         {props => (
//           <InfoForm autoComplete="off" onSubmit={props.handleSubmit}>
//             <RegisterTitle>Registration</RegisterTitle>
//             <InputsList>
//               <Error name="email" component="div" />
//               <Input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={props.values.email}
//                 onChange={props.handleChange}
//               />
//               <Error name="password" component="div" />
//               <Input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 value={props.values.password}
//                 onChange={props.handleChange}
//               />
//               <Error name="confirmPassword" component="div" />
//               <Input
//                 type="password"
//                 name="confirmPassword"
//                 placeholder="Confirm Password"
//                 value={props.values.confirmPassword}
//                 onChange={props.handleChange}
//               />
//             </InputsList>
//             <ButtonContainer>
//             <Button type="submit" disabled={!onClick ? false : true}>
//               Next
//             </Button>
//           </ButtonContainer>
//             <Text>
//               Already have an account?
//               <Link href="/login">Login</Link>
//             </Text>
//           </InfoForm>
//         )}
//       </Formik>
//     );
// }

