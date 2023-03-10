import {
  AvatarContainer,
  UserAvatar,
  ChangeAvatarForm,
  AvatarInput,
  BtnContainer,
  AvatarButton,
  EditAvatarText,
  Plug,
} from './Avatar.styled';
import { HiCamera } from 'react-icons/hi2';
import { HiPlus } from 'react-icons/hi2';
import PropTypes from 'prop-types';
import { theme } from 'services/theme';
import { Loader } from 'components/Loader/Loader';

export const Avatar = ({ avatarURL, changeAvatar, isLoading }) => {
  const onAvatarInputChange = async event => {
    const avatar = event.currentTarget.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(avatar);

    changeAvatar(avatar);
  };

  return (
    <AvatarContainer>
      <div
        style={{
          width: '233px',
          height: '233px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {isLoading ? (
          <Loader />
        ) : (
          <UserAvatar>
            {avatarURL ? (
              <img src={avatarURL} alt="avatar" />
            ) : (
              <Plug>
                <HiPlus size={47} color="#11111150" />
              </Plug>
            )}
          </UserAvatar>
        )}
      </div>

      <ChangeAvatarForm>
        <BtnContainer htmlFor="upload-avatar">
          <AvatarButton>
            <HiCamera size={20} color={theme.colors.accent} />
          </AvatarButton>
          <EditAvatarText>Edit photo</EditAvatarText>
        </BtnContainer>
        <AvatarInput
          type="file"
          id="upload-avatar"
          onChange={onAvatarInputChange}
        />
      </ChangeAvatarForm>
    </AvatarContainer>
  );
};

Avatar.propTypes = {
  changeAvatar: PropTypes.func,
};
