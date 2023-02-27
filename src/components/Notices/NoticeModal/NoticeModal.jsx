import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectOneNotice } from 'redux/Notices/NoticesSelector';
import {
  getIsLoggedIn,
  selectFavoriteNotices,
} from '../../../redux/Auth/selectors';
import { toast } from 'react-toastify';
import defaultImage from '../../../images/userAndPets/Rectangle 58.png';

import {
  Category,
  Img,
  Header,
  PictureData,
  MyLi,
  Comments,
  MyBtn,
  ImageContainer,
  BtnContainer,
  Box,
  FavoriteIconFalse,
  FavoriteIconTrue,
  LinkTel,
} from './NoticeModal.styled';

import { renameAgeDate } from 'helpers/renameAge';

import { fetchOneNotice } from 'redux/Notices/NoticesOperations';

export const NoticeModal = ({
  id,
  data,
  category,
  favorite,
  onClickFavorite,
}) => {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsLoggedIn);

  const favorites = useSelector(selectFavoriteNotices);
  const fav = favorites.includes(id);
  const notice = useSelector(selectOneNotice);

  useEffect(() => {
    dispatch(fetchOneNotice({ noticeId: id }));
  }, [id, dispatch]);

  const handleClickAddFavorite = () => {
    if (!isAuth) {
      return toast.error(`You must be authorized to use this functionality!.`);
    }
    if (favorite) {
      return toast.warn('Notice already added to favorite');
    }
    onClickFavorite();
  };

  return (
    <>
      <Box>
        <ImageContainer>
          <PictureData>
            <Img
              src={notice.avatarURL ? notice.avatarURL : defaultImage}
              alt={notice.title}
            ></Img>
            <Category>{category}</Category>
          </PictureData>
          <div>
            <Header>Cute dog looking for a home</Header>
            <ul>
              <MyLi>
                <p>Name:</p>
                <span>{notice.name}</span>
              </MyLi>
              <MyLi>
                <p>Birthday:</p>
                <span>
                  {notice.birthdate ? renameAgeDate(notice.birthdate) : ''}
                </span>
              </MyLi>
              <MyLi>
                <p>Breed:</p>
                <span>{notice.breed}</span>
              </MyLi>
              <MyLi>
                <p>Place:</p>
                <span>{notice.location}</span>
              </MyLi>
              <MyLi>
                <p>The sex:</p>
                <span>{notice?.theSex}</span>
              </MyLi>
              <MyLi>
                <p>Email:</p>
                <span>{notice?.email}</span>
              </MyLi>
              <MyLi>
                <p>Phone:</p>
                <span>{notice?.phone}</span>
              </MyLi>

              {notice.category === 'sell' && (
                <MyLi>
                  <p>Sell:</p>
                  <span>{notice?.price}$</span>
                </MyLi>
              )}
            </ul>
          </div>
        </ImageContainer>

        <Comments>
          Comments: <span>{notice.comments}</span>
        </Comments>

        <BtnContainer>
          {
            <MyBtn active={'active'} className={'contact'}>
              <LinkTel href="tel:{notice?.phone}">Contact</LinkTel>
            </MyBtn>
          }

          <MyBtn
            onClick={handleClickAddFavorite}
            className={fav === true ? 'active' : ' '}
          >
            {!fav ? (
              <div>
                <span>Add to</span>
                <FavoriteIconFalse size={14} />{' '}
              </div>
            ) : (
              <div>
                <span>Remove to</span>
                <FavoriteIconTrue size={14} />{' '}
              </div>
            )}
          </MyBtn>
        </BtnContainer>
      </Box>
    </>
  );
};
