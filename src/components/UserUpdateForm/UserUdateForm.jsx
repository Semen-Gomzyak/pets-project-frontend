import { useState, useEffect } from 'react';

import { HiPencil } from 'react-icons/hi2';
import { BsCheckLg } from 'react-icons/bs';
import { theme } from 'services/theme';
import {
  Form,
  ItemContainer,
  Label,
  Input,
  Button,
  BtnIcon,
  BtnContainer,
} from './UserUpdateForm.styled';
import PropTypes from 'prop-types';

export const UserUpdateForm = ({ data, updateData }) => {
  const inputNames = ['name', 'email', 'birthday', 'phone', 'city'];

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

  const onFormSubmit = event => {
    event.preventDefault();
    const key = document.activeElement.name;
    document.querySelector(`#${key}`).focus();

    // console.log(key);

    if (userInfo[key] === data[key]) return;
    updateData({ [key]: userInfo[key] });
  };

  return (
    <Form onFocus={onFormFocus} onBlur={onFormBlur} onSubmit={onFormSubmit}>
      {inputNames.map(inputName => (
        <ItemContainer key={inputName}>
          <Label htmlFor="">
            {inputName.charAt(0).toUpperCase() + inputName.slice(1) + ': '}
          </Label>
          <Input
            type="text"
            name={inputName}
            id={inputName}
            value={userInfo[inputName]}
            onChange={onInputChange}
          />
          <BtnContainer>
            <Button type="submit" name={inputName}></Button>
            <BtnIcon>
              {document.activeElement.name === inputName ? (
                <BsCheckLg size={10} color={theme.colors.accent} />
              ) : (
                <HiPencil size={10} color={penColor} />
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
