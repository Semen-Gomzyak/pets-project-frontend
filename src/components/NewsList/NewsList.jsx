// import { useState, useEffect } from 'react';
import {  ButtonFriend } from '../OurFriends/FriendsList.styled'
// import { Loader } from 'components/Loader/Loader';


import {
  List,
  ListItem,
  Title,
  Description,
  Info,
  Date,
  Link,
} from './NewsList.styled';

export const NewsList = ({ news, loadMore, error, disable }) => {
  const isNews = Boolean(news.length);

  return (
    <>
      <List>
        {news.map(({ _id, title, description, date, url }) => (
          <ListItem key={_id}>
            <div>
              <Title>
                {title?.length < 50 ? title : title?.slice(0, 50) + '...'}
              </Title>
              <Description>{description?.slice(0, 350) + '...'}</Description>
              <Info>
                <Date>
                  {date?.split('-').reverse().join('/').split('T00:00:00.000Z')}
                </Date>

                <Link
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  Read more
                </Link>
              </Info>
            </div>
          </ListItem>
        ))}
      </List>
      {isNews && (
        <ButtonFriend onClick={loadMore} disabled={disable}>
          Load more
        </ButtonFriend>
      )}
      {error && <p>Something went wrong, try again later.</p>}
      {/* {loading && <Loader />} */}
    </>
  );
};
