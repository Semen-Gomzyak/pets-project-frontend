import { CiHeart } from 'react-icons/ci';
import { Button } from './BtnFavorite.styled';

export const FavoriteBtn = ({ favorite, onClick }) => {
  return (
    <Button
      type="button"
      ClassName={favorite === true ? 'active' : ' '}
      onClick={onClick}
    >
      <span>
        <CiHeart />
      </span>
    </Button>
  );
};
