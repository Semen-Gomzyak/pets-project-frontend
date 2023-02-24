import { Formik, Form, Field, ErrorMessage } from 'formik';
import { NoticeSchema } from 'validations/NoticeFormValidation';

const FirstPart = ({ data, next, closeModal }) => {
  const handleSubmit = values => {
    next(values);
  };

  return (
    <Formik
      validationSchema={NoticeSchema}
      initialValues={data}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
              amet, consectetur
            </p>
            <div>
              <label>
                <Field type="radio" name="category" value="lost/found" />
                <div>lost/found</div>
              </label>
              <label>
                <Field type="radio" name="category" value="in good hands" />
                <div>in good hands</div>
              </label>
              <label>
                <Field type="radio" name="category" value="sell" />
                <div>sell</div>
              </label>
            </div>
            <div>
              <label>
                Title of ad<span>&#42;</span>
                <Field id="title" name="title" placeholder="Type name pet " />
                <ErrorMessage name="title" />
              </label>
            </div>
            <div>
              <label>
                Name pet
                <Field id="name" name="name" placeholder="Type name" />
                <ErrorMessage name="name" />
              </label>
            </div>
            <div>
              <label>
                Date of birth
                <Field
                  id="birthday"
                  name="birthday"
                  type="date"
                  placeholder="Date of birthday"
                />
                <ErrorMessage name="Type date of birth" />
              </label>
            </div>
            <div>
              <label>
                Breed
                <Field id="breed" name="breed" placeholder="Type of breed" />
                <ErrorMessage name="Type breed" />
              </label>
            </div>
          </div>
          <div>
            <button type="button" onClick={closeModal}>
              Cancel
            </button>
            <button type="button">Next</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FirstPart;