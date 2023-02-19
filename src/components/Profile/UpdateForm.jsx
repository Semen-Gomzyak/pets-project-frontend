import { HiPencil } from 'react-icons/hi2';
// import { theme } from 'services/theme';
import { Form, Label, Input, Button } from './UpdateForm.styled';
import PropTypes from 'prop-types';

export const UpdateForm = ({ name, label, value, onInputChange, onSubmit }) => {
  return (
    <Form data-name={name} onSubmit={onSubmit}>
      <Label htmlFor=""> {label} </Label>
      <Input type="text" name={name} value={value} onChange={onInputChange} />
      <Button type="submit">
        <HiPencil size={10} color="#F59256" />
      </Button>
    </Form>
  );
};

UpdateForm.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onInputChange: PropTypes.func,
  onSubmit: PropTypes.func,
};
