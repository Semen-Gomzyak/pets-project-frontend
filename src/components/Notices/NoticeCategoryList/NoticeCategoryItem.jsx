import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getIsLoggedIn, getUserById } from '../../../redux/Auth/selectors';
import { Modal } from 'components/Modal/Modal';
import { NoticeModal } from 'components/Notices/NoticeModal/NoticeModal';
import { FavoriteBtn } from 'components/ButtonFavorite/BtnFavorite';
import { changeFavoritesNotices } from '../../../redux/Notices/NoticesSlice';
import { selectFavoriteNotices } from '../../../redux/Auth/selectors';

import {
  getFavoriteNotices,
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

import { WarningMessage } from 'components/WarningMessage/WarningMessage';
import { getAge } from 'helpers/dataFormat';

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

    price,
  } = data;

  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const isAuth = useSelector(getIsLoggedIn);
  const [isShownConfirmationDelete, setIsShownConfirmationDelete] =
    useState(false);

  const currentUser = useSelector(getUserById);
  console.log(currentUser);
  const favorites = useSelector(selectFavoriteNotices);

  function isIdInData(data) {
    return isAuth && data !== undefined && data.some(item => item._id === _id);
  }

  const isGetFavorites = isIdInData(favorites);

  // console.log('favorites,', favorites);
  const isFavorite =
    (favorites !== undefined && favorites.includes(_id)) || isGetFavorites;
  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  const onChangeFavorite = async () => {
    if (isAuth) {
      dispatch(
        updateFavoriteNotice({
          userId: currentUser,
          noticeId: _id,
        })
      );

      if (route === 'favorite') {
        dispatch(changeFavoritesNotices(_id));
      }
    } else {
      toast.error(`You must be authorized to use this functionality!.`);
      return;
    }
  };

  useEffect(() => {
    if (isAuth) {
      dispatch(getFavoriteNotices({ userId: currentUser }));
    }
  }, [isAuth, dispatch, currentUser]);

  const closeConfirmationDelete = () => {
    setIsShownConfirmationDelete(!isShownConfirmationDelete);
  };
  const deleteNotice = () => {
    dispatch(removeNotice(data._id));

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
  const getOwner = route => {
    if (route === 'own') {
      return data.owner._id;
    } else {
      return data.owner ? data.owner : 1;
    }
  };
  return (
    <ListItem>
      <ImgWrap>
        <Category>{getTitleCategory(category)}</Category>

        {avatarURL ? (
          <Img
            src={avatarURL ? avatarURL : defaultImage}
            alt={name ? name : 'Avatar'}
          />
        ) : (
          <Img src={notAvailable} alt="not found" />
        )}

        {isFavorite && (
          <FavoriteBtn favorite={isFavorite} onClick={onChangeFavorite} />
        )}
        <FavoriteBtn
          favorite={isFavorite}
          // favorite={favorite}
          onClick={onChangeFavorite}
        />
      </ImgWrap>
      <Wrap>
        <Title>{title ? title : ''}</Title>
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
            {/* <Text>{birthdate ? renameAgeDate(birthdate) : ' '}</Text> */}
            <Text>{birthdate ? getAge(birthdate) : ' '}</Text>
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
                  id={data._id}
                  category={route}
                  notice={data}
                  isFavorite={isFavorite}
                  onClickFavorite={onChangeFavorite}
                />
              }
            ></Modal>
          )}
          {isAuth && currentUser === getOwner(route) && (
            <NoticeBtn text={'Delete'} onClick={closeConfirmationDelete} />
          )}
        </ThumbBtn>
      </Wrap>
      {isShownConfirmationDelete && (
        <WarningMessage
          onClose={closeConfirmationDelete}
          type="approve"
          text={'CONFIRMATION_DELETE'}
          approveFunk={deleteNotice}
          id={data._id}
        />
      )}
    </ListItem>
  );
};
