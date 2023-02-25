import { useState } from 'react';
import {
  AvatarContainer,
  UserAvatar,
  ChangeAvatarForm,
  AvatarInput,
  AvatarButton,
  EditAvatarText,
  Plug,
} from './Avatar.styled';
import { HiCamera } from 'react-icons/hi2';
import { HiPlus } from 'react-icons/hi2';
import PropTypes from 'prop-types';

export const Avatar = ({ avatarURL, changeAvatar }) => {
  const [avatarUrl, setAvatarUrl] = useState(avatarURL);

  const onAvatarInputChange = async event => {
    const avatar = event.currentTarget.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(avatar);
    reader.onload = event => setAvatarUrl(event.target.result);
    changeAvatar(avatar, avatarUrl);
  };

  return (
    <AvatarContainer>
      <UserAvatar>
        {avatarUrl ? (
          <img src={avatarUrl} alt="avatar" />
        ) : (
          <Plug>
            <HiPlus size={47} color="#11111150" />
          </Plug>
        )}
      </UserAvatar>
      <ChangeAvatarForm>
        <AvatarButton htmlFor="upload-avatar">
          <HiCamera size={20} color={'#F59256'} />
        </AvatarButton>
        <AvatarInput
          type="file"
          id="upload-avatar"
          onChange={onAvatarInputChange}
        />
        <EditAvatarText>Edit photo</EditAvatarText>
      </ChangeAvatarForm>
    </AvatarContainer>
  );
};

Avatar.propTypes = {
  //   avatarURL: PropTypes.string(),
  changeAvatar: PropTypes.func,
};
