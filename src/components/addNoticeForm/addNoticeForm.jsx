// import { useDispatch } from 'react-redux';
// import * as operations from 'redux/notices/operations';

// export const addNoticeForm = () => {

//     const dispatch = useDispatch();

//     const handleSubmit = e => {

//         e.preventDefault();
//         const form = e.currentTarget;

//         dispatch(
//             operations.addNotice({
//                 name: form.elements.name.value,
//                 ,
//             })
//         );

        
//     };

//     return (

//         <FormPhone autoComplete="off" onSubmit={handleSubmit}>
//             <Label htmlFor="name">
//                 Name
//                 <Input
//                     type="text"
//                     name="name"
//                     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                     required
//                 />
//             </Label>
//             <Label htmlFor="number">
//                 Number
//                 <Input
//                     type="tel"
//                     name="number"
//                     pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                     title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                     required
//                 />
//             </Label>
//             <Button type="submit">Add contact</Button>
//         </FormPhone>
//     );
// };

// import {  Formik, ErrorMessage } from 'formik';
// import * as yup from 'yup';
// import { Button , Input, Label, FormPhone} from './PhonebookForm.styled';

// const schema = yup.object().shape({
//   name: yup.string().required(),
// });

// const initialValues = {
//   name: '',
//   number: '',
// };

// export const PhonebookForm = ({ addContact }) => {
//   const handleSubmit = (values, { resetForm }) => {
//     addContact(values.name, values.number);

//     return resetForm();
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       onSubmit={handleSubmit}
//       validationSchema={schema}
//     >
//       <FormPhone autoComplete="off">
//         <Label htmlFor="name">
//           Name
//           <Input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//           <ErrorMessage name="name" />
//         </Label>
//         <Label htmlFor="number">
//           Number
//           <Input
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//           <ErrorMessage name="number" />
//         </Label>
//         <Button type="submit">Add contact</Button>
//       </FormPhone>
//     </Formik>
//   );
// };