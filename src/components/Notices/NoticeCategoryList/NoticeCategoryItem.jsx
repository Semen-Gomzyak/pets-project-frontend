// import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../../redux/Auth/selectors';

import { FavoriteBtn } from 'components/ButtonFavorite/BtnFavorite';

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
import { Button } from 'components/Button/Button';

export const NoticeCategoryItem = ({ data, route }) => {
  // console.log('notices in Item', data);
  const { _id, title, category, name, birthdate, breed, location, imgURL } =
    data;

  const isAuth = useSelector(getIsLoggedIn);

  // const favorites = useSelector(selectFavoriteNotices);
  //
  const onChangeFavorite = () => {
    if (isAuth) {
      alert('favorit change');
    }
  };

  return (
    <ListItem>
      <ImgWrap>
        <Category>{category}</Category>
        <Img src={imgURL} alt={name} />

        <FavoriteBtn favorite={true} onClick={onChangeFavorite} />
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
            <Text>
              {birthdate
                ?.split('-')
                .reverse()
                .join('/')
                .split('T23:00:00.000Z')}
            </Text>
          </LiInfo>
        </ListInfo>

        <ThumbBtn>
          <Button onClick={console.log('openModal')} />

          <Button onClick={console.log('delete')} />
        </ThumbBtn>
      </Wrap>
    </ListItem>
  );
};
