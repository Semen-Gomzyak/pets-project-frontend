import { Formik, Form, Field, ErrorMessage } from 'formik';
import { NoticeSchema } from 'validations/NoticeFormValidation';

const SecondPart = ({ data, next, back }) => {
  const handleSubmit = values => {
    next(values);
  };
  
  return (
    <Formik
      validationSchema={NoticeSchema}
      initialValues={data}
      onSubmit={handleSubmit}
    >
      {props => (
        <Form>
          <div>
            <div>
              <p>
                The sex
                <span>&#42;</span>:
              </p>
              <ul>
                <li>
                  <Field
                    id="maleSex"
                    name="sex"
                    type="radio"
                    value="male"
                    checked={props.values.sex === 'male'}
                  />
                  <label htmlFor="maleSex">
                     Male
                    <ErrorMessage name="sex"/>
                  </label>
                </li>
                <li>
                  <Field
                    id="femaleSex"
                    name="sex"
                    type="radio"
                    value="female"
                    checked={props.values.sex === 'female'}
                  />
                  <label htmlFor="femaleSex">
                    Female
                  </label>
                </li>
              </ul>
            </div>
            <div>
              <label htmlFor="location">
                Location<span>&#42;</span>:
                <Field
                  id="location"
                  name="location"
                  type="text"
                  placeholder="Location"
                />
                <ErrorMessage name="location"/>
              </label>
            </div>
            {props.values.category === 'sell' && (
              <div>
                <label htmlFor="pricePet">
                  Price<span>&#42;</span>:
                  <Field
                    id="pricePet"
                    name="price"
                    type="text"
                    placeholder="Price"
                  />
                  <ErrorMessage name="price"/>
                </label>
              </div>
            )}
            <div>
              <p>Load the pet's image:</p>
              {/* ????????????????? */}
            </div>
            <div>
              <label htmlFor="comments">Comments</label>
              <Field type="text" name="comments" placeholder="Comments"/>
              <ErrorMessage name="comments"/>
            </div>
          </div>
          <div>
            <button
              type="button"
              onClick={() => {
                back(props.values);
              }}
            >
              Back
            </button>
            <button type="submit">Done</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SecondPart;
