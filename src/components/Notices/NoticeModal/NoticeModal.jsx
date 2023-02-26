import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectOneNotice } from 'redux/Notices/NoticesSelector';
import { getIsLoggedIn } from '../../../redux/Auth/selectors';
import { toast } from 'react-toastify';
import defaultImage from '../../../images/userAndPets/Rectangle 58.png';

import {
  Category,
  Header,
  PictureData,
  MyLi,
  Comments,
  MyBtn,
  ImageContainer,
  BtnContainer,
} from './NoticeModal.styled';
import {
  FavoriteIconFalse,
  FavoriteIconTrue,
} from '../../ButtonFavorite/BtnFavorite.styled';

import { renameAgeDate } from 'helpers/renameAge';

import { fetchOneNotice } from 'redux/Notices/NoticesOperations';

export const NoticeModal = ({ id, data, favorite, onClickFavorite }) => {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsLoggedIn);
  //const favorites = useSelector(selectFavoriteNotices);
  const notice = useSelector(selectOneNotice);

  console.log('selectOneNotice start', notice);
  console.log('notice. ID', id);
  useEffect(() => {
    dispatch(fetchOneNotice({ noticeId: id }));
  }, [id, dispatch]);

  console.log('selectOneNotice finish', notice);

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
    <div>
      <>
        <ImageContainer>
          <PictureData>
            <img
              src={notice.avatarURL ? notice.avatarURL : defaultImage}
              alt={notice.title}
            ></img>
            <Category>{notice.category}</Category>
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
                <span>{notice.theSex}</span>
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
                  <span>{notice.price}$</span>
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
            <a href="tel:{notice?.owner?.phone}">
              <MyBtn active={'active'}>Contact</MyBtn>
            </a>
          }

          <MyBtn
            onClick={handleClickAddFavorite}
            className={favorite === true ? 'active' : ' '}
            textBtn={favorite === true ? 'Remove to' : 'Add to'}
          >
            {!favorite ? (
              <span>
                Add to
                <FavoriteIconFalse size={16} />{' '}
              </span>
            ) : (
              <span>
                Remove to
                <FavoriteIconTrue size={16} />{' '}
              </span>
            )}
          </MyBtn>
        </BtnContainer>
      </>
    </div>
  );
};
