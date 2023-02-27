import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectOneNotice } from 'redux/Notices/NoticesSelector';

// import { getIsLoggedIn /*, selectToken*/ } from '../../../redux/Auth/selectors';

// import { getUserData } from 'services/api/user';


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

 Content,

  Box,

} from './NoticeModal.styled';
import {
  FavoriteIconFalse,
  FavoriteIconTrue,
} from '../../ButtonFavorite/BtnFavorite.styled';

import { renameAgeDate } from 'helpers/renameAge';
import { getNoticeById } from 'services/api/notices';
import { Loader } from 'components/Loader/Loader';


// export const NoticeModal = ({ data, favorite, onClickFavorite }) => {
 //  const isAuth = useSelector(getIsLoggedIn);
  // const isLoading = useSelector(selectOneNotice);

  // const { _id, category } = data;
 //  const [notice, setNotice] = useState(null);
  // const [isDataReady, setIsDataReady] = useState(false);
 //  useEffect(() => {
  //   getNoticeById(_id).then(response => {
  //     setNotice({ ...response.data, category: category });
   //    setIsDataReady(true);
  //   });
  // }, [_id, category]);

  // const favorites = useSelector(selectFavoriteNotices);
  // const [isFavorite, setFavorite] = useState(notice.favorite);
  // console.log('favorite', favorite);
  // const [isFavorited, setFavorited] = useState(isFavorite);

  // --------   add email and phone to notice ---------------------

  // const token = useSelector(selectToken);
  // const [user, setUser] = useState({});
  // useLayoutEffect(() => {
  //   getUserData(token).then(response => setUser(response.data));
  // }, [token]);

  // --------   add email and phone to notice ---------------------

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
  const [fav, setFav] = useState(favorite);
  console.log('favorite', favorite);

  const favorites = useSelector(selectFavoriteNotices);
  const notice = useSelector(selectOneNotice);
  console.log('favorites', favorites);

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
    if (fav) {
      setFav(false);
    } else {
      setFav(true);
    }
  };

  return (

/*
    <Content>
      {isDataReady ? (
        <div>
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
                  <span>{notice.email}</span>
                </MyLi>
                <MyLi>
                  <p>Phone:</p>
                <span>{notice.phone}</span>
                */

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
            <a href="tel:{notice?.phone}">
              <MyBtn active={'active'}>Contact</MyBtn>
            </a>
          }


/*
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
        </div>
      ) : (
        <Loader />
      )}
    </Content>
    */

          <MyBtn
            onClick={handleClickAddFavorite}
            className={fav === true ? 'active' : ' '}
            textBtn={fav === true ? 'Remove to' : 'Add to'}
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
      </Box>
    </>

  );
};
