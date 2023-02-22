import { ErrorMessage, Field, Form, Formik } from "formik";
import { RegisterFormSchema } from "validations/RegisterFormValidation";

export const FirstRegisterForm = ({data, onSubmit, onClick}) => {
    const initialValues = {
        email: data.email || '',
        password: data.password || '',
        confirmPassword: data.confirmPassword || '',
    }
    const handleSubmit = (values) => {
        console.log(values);
        onSubmit(values)
    }


    return (
      <Formik
        initialValues={initialValues}
        validationSchema={RegisterFormSchema}
        onSubmit={handleSubmit}
      >
        {props => (
          <Form autoComplete="off" onSubmit={props.handleSubmit}>
            <Field
              type="email"
              name="email"
              placeholder="Email"
              value={props.values.email}
              onChange={props.handleChange}
            />
            <Field
              type="password"
              name="password"
              placeholder="Password"
              value={props.values.password}
              onChange={props.handleChange}
            />
            <Field
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={props.values.confirmPassword}
              onChange={props.handleChange}
            />
            <button
              type="submit"
              disabled={!onClick ? false : true}
              // onClick={onClick}
            >
              Next
            </button>
          </Form>
        )}
      </Formik>
    );
}

