import { useState, useEffect } from 'react';
import { UpdateUserFormSchema } from 'validations/UpdateUserFormValidation';

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

import Notiflix from 'notiflix';
import PropTypes from 'prop-types';
import { theme } from 'services/theme';

export const UserUpdateForm = ({ data, updateData }) => {
  const inputNames = ['name', 'email', 'birthday', 'phone', 'city'];
  const dataNames = ['name', 'email', 'birthday', 'mobilePhone', 'cityRegion'];

  const [userData, setUserData] = useState(data);
  const [penColor, setPenColor] = useState(theme.colors.accent);

  useEffect(() => {
    setUserData(prevState => ({
      ...prevState,
      cityRegion: prevState.cityRegion.split(',')[0],
    }));
  }, []);

  const onFormFocus = () => setPenColor(theme.colors.text.gray);
  const onFormBlur = () => setPenColor(theme.colors.accent);

  const onInputChange = event => {
    const key = event.target.name;
    setUserData(prevState => ({ ...prevState, [key]: event.target.value }));
  };

  const onFormSubmit = event => {
    event.preventDefault();
    const key = document.activeElement.name;
    document.querySelector(`#${key}`).focus();

    // if (userData[key] === data[key]) return;

    UpdateUserFormSchema.validate({ [key]: userData[key] })
      .then(value => {
        // let payload = {};
        // if (Object.keys(value)[0] === 'city') {
        //   payload.cityRegion = Object.values(value)[0];
        // } else if (Object.keys(value)[0] === 'phone') {
        //   payload.mobilePhone = Object.values(value)[0];
        // } else {
        //   payload = { ...value };
        // }

        // updateData(payload, token);
        updateData(value);
        Notiflix.Notify.success('Updated successfuly');
      })
      .catch(error => Notiflix.Notify.failure(error.message));
  };

  return (
    <Form onFocus={onFormFocus} onBlur={onFormBlur} onSubmit={onFormSubmit}>
      {dataNames.map((dataName, index) => (
        <ItemContainer key={dataName}>
          <Label>
            {inputNames[index].charAt(0).toUpperCase() +
              inputNames[index].slice(1) +
              ': '}
          </Label>
          <Input
            type="text"
            name={dataName}
            id={dataName}
            value={userData[dataName]}
            onChange={onInputChange}
          />
          <BtnContainer>
            <Button type="submit" name={dataName}></Button>
            <BtnIcon>
              {document.activeElement.name === dataName ? (
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
