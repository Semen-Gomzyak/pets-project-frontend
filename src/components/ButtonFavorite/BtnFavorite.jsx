import {
  Button,
  FavoriteIconFalse,
  FavoriteIconTrue,
} from './BtnFavorite.styled';

export const FavoriteBtn = ({ favorite, onClick }) => {
  return (
    <Button
      type="button"
      className={favorite === true ? 'active' : ' '}
      onClick={onClick}
    >
      {favorite ? (
        <FavoriteIconTrue size={24} />
      ) : (
        <FavoriteIconFalse size={24} />
      )}
    </Button>
  );
};
