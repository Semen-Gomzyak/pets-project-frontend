import { useState, useEffect } from 'react';

import { theme } from 'services/theme';
import {
  Form,
  ItemContainer,
  Label,
  Input,
  Button,
  BtnIcon,
  Pen,
  Check,
  BtnContainer,
} from './UserUpdateForm.styled';
import { UpdateUserFormSchema } from 'validations/UpdateUserFormValidation';
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';

export const UserUpdateForm = ({ data, updateData, token }) => {
  const inputNames = ['name', 'email', 'birthday', 'phone', 'city'];
  const inputTypes = ['text', 'text', 'texy', 'text', 'text'];

  const [userInfo, setUserInfo] = useState(data);
  const [penColor, setPenColor] = useState(theme.colors.accent);

  useEffect(() => {
    setUserInfo(prevState => ({
      ...prevState,
      city: prevState.city.split(',')[0],
    }));
  }, []);

  const onFormFocus = () => setPenColor(theme.colors.text.gray);
  const onFormBlur = () => setPenColor(theme.colors.accent);

  const onInputChange = event => {
    const key = event.target.name;
    setUserInfo(prevState => ({ ...prevState, [key]: event.target.value }));
  };

  const onInputBlur = event => {
    const key = event.target.name;
    // setUserInfo(prevState => ({ ...prevState, [key]: data[key] }));
  };

  const onFormSubmit = event => {
    event.preventDefault();
    const key = document.activeElement.name;
    document.querySelector(`#${key}`).focus();

    if (userInfo[key] === data[key]) return;

    UpdateUserFormSchema.validate({ [key]: userInfo[key] })
      .then(value => {
        let payload = {};
        if (Object.keys(value)[0] === 'city') {
          payload.cityRegion = Object.values(value)[0];
        } else if (Object.keys(value)[0] === 'phone') {
          payload.mobilePhone = Object.values(value)[0];
        } else {
          payload = { ...value };
        }

        updateData(payload, token);
        Notiflix.Notify.success('Updated successfuly');
      })
      .catch(error => Notiflix.Notify.failure(error.message));
  };

  return (
    <Form onFocus={onFormFocus} onBlur={onFormBlur} onSubmit={onFormSubmit}>
      {inputNames.map((inputName, index) => (
        <ItemContainer key={inputName}>
          <Label htmlFor="">
            {inputName.charAt(0).toUpperCase() + inputName.slice(1) + ': '}
          </Label>
          <Input
            type={inputTypes[index]}
            name={inputName}
            id={inputName}
            value={userInfo[inputName]}
            onChange={onInputChange}
            onBlur={onInputBlur}
          />
          <BtnContainer>
            <Button type="submit" name={inputName}></Button>
            <BtnIcon>
              {document.activeElement.name === inputName ? (
                <Check color={theme.colors.accent} />
              ) : (
                <Pen color={penColor} />
              )}
            </BtnIcon>
          </BtnContainer>
        </ItemContainer>
      ))}
    </Form>
  );
};

UserUpdateForm.propTypes = {
  userData: PropTypes.objectOf(PropTypes.string),
  updateData: PropTypes.func,
};
