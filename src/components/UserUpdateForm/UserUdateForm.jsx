import { useState } from 'react';

import { HiPencil } from 'react-icons/hi2';
// import { theme } from 'services/theme';
import { Form, Label, Input, Button } from './UserUpdateForm.styled';
import PropTypes from 'prop-types';

export const UserUpdateForm = ({ data, updateData }) => {
  const [userInfo, setUserInfo] = useState(data);

  const onInputChange = event => {
    const key = event.target.name;
    setUserInfo(prevState => ({ ...prevState, [key]: event.target.value }));
  };

  const onButtonClick = event => {
    const key = event.currentTarget.name;
    updateData({ [key]: userInfo[key] });
  };

  return (
    <Form>
      <div style={{ marginBottom: '4px' }}>
        <Label htmlFor="">Name: </Label>
        <Input
          type="text"
          name="name"
          value={userInfo.name}
          onChange={onInputChange}
        />
        <Button type="button" name="name" onClick={onButtonClick}>
          <HiPencil size={10} color="#F59256" />
        </Button>
      </div>
      <div style={{ marginBottom: '4px' }}>
        <Label htmlFor="">Email: </Label>
        <Input
          type="text"
          name="email"
          value={userInfo.email}
          onChange={onInputChange}
        />
        <Button type="button" name="email" onClick={onButtonClick}>
          <HiPencil size={10} color="#F59256" />
        </Button>
      </div>
      <div style={{ marginBottom: '4px' }}>
        <Label htmlFor="">Birthday: </Label>
        <Input
          type="text"
          name="birthday"
          value={userInfo.birthday}
          onChange={onInputChange}
        />
        <Button type="button" name="birthday" onClick={onButtonClick}>
          <HiPencil size={10} color="#F59256" />
        </Button>
      </div>
      <div style={{ marginBottom: '4px' }}>
        <Label htmlFor="">Phone: </Label>
        <Input
          type="text"
          name="phone"
          value={userInfo.mobilePhone}
          onChange={onInputChange}
        />
        <Button type="button" name="phone" onClick={onButtonClick}>
          <HiPencil size={10} color="#F59256" />
        </Button>
      </div>
      <div style={{ marginBottom: '4px' }}>
        <Label htmlFor="">City: </Label>
        <Input
          type="text"
          name="city"
          value={userInfo.cityRegion}
          onChange={onInputChange}
        />
        <Button type="button" name="city" onClick={onButtonClick}>
          <HiPencil size={10} color="#F59256" />
        </Button>
      </div>
    </Form>
  );
};

UserUpdateForm.propTypes = {
  userData: PropTypes.objectOf(PropTypes.string),
  updateData: PropTypes.func,
};
