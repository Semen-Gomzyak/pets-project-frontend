/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';
import { FriendsItem } from './FriendsItem';
import { getFriends } from 'services/api/friends';

import { ListFriends, ButtonFriend } from './FriendsList.styled';

export default function FriendsList() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [disable, setDisable] = useState(true);

  const isFriends = Boolean(friends.length);

  useEffect(() => {
    setError(null);
    setLoading(true);

    const fetchFriends = async () => {
      try {
        const limit = 6;
        const result = await getFriends(page, limit);
        const data = result.data.data;

        setFriends(prevFriends => [...prevFriends, ...data]);
        //
        friends.length === result.data.total
          ? setDisable(true)
          : setDisable(false);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchFriends();
  }, [page]);

  function loadMore() {
    setPage(prevPage => prevPage + 1);
  }

  return (
    <>
      {isFriends && (
        <ListFriends>
          {friends.map(friend => {
            return <FriendsItem key={friend._id} data={friend}></FriendsItem>;
          })}
        </ListFriends>
      )}
      {isFriends && (
        <ButtonFriend onClick={loadMore} disabled={disable}>
          Load more
        </ButtonFriend>
      )}
      {error && <p>Something went wrong, try again later.</p>}
      {loading && <Loader />}
    </>
  );
}
