import { useState, useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';
import FriendsItem from './FriendsItem';
// import { getFriends } from 'services/api/friends';

import { ListFriends } from './FriendsList.styled';

import { data } from '../../db/sponsors';

export default function FriendsList() {
  const [friends, setFriends] = useState(data);
  // const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const isFriends = Boolean(friends.length);

  // useEffect(() => {
  //   setError(null);
  //   setLoading(true);

  //   const fetchFriends = async () => {
  //     try {
  //       const data = await getFriends();
  //       setFriends(prevFriends => [...prevFriends, ...data]);
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchFriends();
  // }, []);

  return (
    <>
      {isFriends && (
        <ListFriends>
          {friends.map(friend => {
            return <FriendsItem key={friend.title} data={friend}></FriendsItem>;
          })}
        </ListFriends>
      )}
      {error && <p>Somthing went wrong, try again later.</p>}
      {loading && <Loader />}
    </>
  );
}
