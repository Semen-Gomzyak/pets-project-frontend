import { HiPencil } from 'react-icons/hi2';
import { Form, Label, Input, Button } from './UpdateForm.styled';

export const UpdateForm = props => {
  return (
    <Form data-field-name={props.name} onSubmit={props.onSubmit}>
      <Label htmlFor=""> {props.label} </Label>
      <Input
        type="text"
        name={props.name}
        value={props.value}
        onChange={props.onInputChange}
      />
      <Button type="submit">
        <HiPencil size={10} color={'#F59256'} />
      </Button>
    </Form>
  );
};
