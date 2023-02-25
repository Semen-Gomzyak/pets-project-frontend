import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getIsLoggedIn, getUserById } from '../../../redux/Auth/selectors';
import { Modal } from 'components/Modal/Modal';
import { NoticeModal } from 'components/Notices/NoticeModal/NoticeModal';
import { FavoriteBtn } from 'components/ButtonFavorite/BtnFavorite';
// import { changeFavoritesNotices } from '../../../redux/Notices/NoticesSlice';
import { selectFavoriteNotices } from '../../../redux/Auth/selectors';

import {
  updateFavoriteNotice,
} from '../../../redux/Auth/operations';

import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import notAvailable from 'images/services/notAvailable.png';
import {
  ListItem,
  ImgWrap,
  Category,
  Title,
  Img,
  ListInfo,
  LiInfo,
  Lable,
  Text,
  Wrap,
  ThumbBtn,
} from './NoticeCategoryItem.styled';

import { NoticeBtn } from 'components/ButtonNotice/BtnNotice';
import { removeNotice } from 'redux/Notices/NoticesOperations';
import defaultImage from '../../../images/services/notAvailable.png';
import { renameAgeDate } from 'helpers/renameAge';

export const NoticeCategoryItem = ({ data, route }) => {

  const {
    _id,
    title,
    category,
    name,
    birthdate,
    breed,
    location,
    avatarURL,
    owner,
    price,
  } = data;

  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const isAuth = useSelector(getIsLoggedIn);

  const currentUser = useSelector(getUserById);
  const favorites = useSelector(selectFavoriteNotices);

  function isIdInData(data) {
    return isAuth && data.some(item => item._id === _id);
  }

  const isGetFavorites = isIdInData(favorites);

  const isFavorite = favorites.includes(_id) || isGetFavorites;
  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  const onChangeFavorite = async () => {
    if (isAuth) {
      const response = await dispatch(
        updateFavoriteNotice({
          userId: currentUser,
          noticeId: _id,
        })
      );

      if (response.payload.status === 200) {
        toast.success('Added to favorites!');
      }
      if (route === 'favorite') {
        
      }

    } else {
      toast.error(`You must be authorized to use this functionality!.`);

      return;
    }
  };

  const deletePet = () => {
    alert('You really want to delete this Notice ?');
    alert(`You really want to delete this Notice ?${_id}`);
    dispatch(removeNotice({ noticeId: _id }));
    toast.success('Notice is deleted.');
  };

  const getTitleCategory = category => {
    let result = 'sell';
    switch (category) {
      case 'lost_found':
        result = 'lost/found';
        break;
      case 'in_good_hands':
        result = 'in good hands';
        break;
      case 'favorite':
        result = 'favorite ads';
        break;
      case 'own':
        result = 'my ads';
        break;
      default:
        break;
    }
    return result;
  };

  const onOpenModal = () => {
    setShowModal(true);
  };

  return (
    <ListItem>
      <ImgWrap>
        <Category>{getTitleCategory(category)}</Category>

        {avatarURL ? (
          <Img src={avatarURL} alt={name} />
        ) : (
          <Img src={notAvailable} alt="not found" />
        )}


        {isFavorite && (
          <FavoriteBtn
            favorite={isFavorite}
            // favorite={favorite}
            onClick={onChangeFavorite}
          />
        )}
        <FavoriteBtn
          favorite={isFavorite}
          // favorite={favorite}
          onClick={onChangeFavorite}
        />
      </ImgWrap>
      <Wrap>
        <Title>{title}</Title>
        <ListInfo>
          <LiInfo key={`${_id}+breed`}>
            <Lable>Breed:</Lable>
            <Text>{breed}</Text>
          </LiInfo>
          <LiInfo key={`${_id}+place`}>
            <Lable>Place:</Lable>
            <Text>{location}</Text>
          </LiInfo>
          <LiInfo key={`${_id}+age`}>
            <Lable>Age:</Lable>
            <Text>{birthdate ? renameAgeDate(birthdate) : ' '}</Text>
          </LiInfo>
          {price ? (
            <LiInfo key={`${_id}+price`}>
              <Lable>Price:</Lable>
              <Text>{price}$</Text>
            </LiInfo>
          ) : (
            ''
          )}
        </ListInfo>

        <ThumbBtn>
          <NoticeBtn onClick={onOpenModal} text={'Learn More'} />
          {showModal && (
            <Modal
              closeModal={toggleModal}
              children={
                <NoticeModal
                  notice={data}
                  isFavorite={isFavorite}
                  onClickFavorite={onChangeFavorite}
                />
              }
            ></Modal>
          )}
          {isAuth && currentUser === owner && (
            <NoticeBtn text={'Delete'} onClick={deletePet} />
          )}
        </ThumbBtn>
      </Wrap>
    </ListItem>
  );
};
