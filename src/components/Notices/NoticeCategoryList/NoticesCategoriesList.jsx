import { Loader } from 'components/Loader/Loader';
import { ButtonFriend } from 'components/OurFriends/FriendsList.styled';
import { useEffect, useState } from 'react';
import { fetchAllNotices } from 'redux/Notices/NoticesOperations';
import { NoticeCategoryItem } from './NoticeCategoryItem';
import { ListNotices } from './NoticesCategoriesList.styled';

export const NoticesCategoriesList = ({ data, route }) => {
  console.log('data in List', data);

  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [disable, setDisable] = useState(true);

  const isNotices = Boolean(notices.length);

  useEffect(() => {
    setError(null);
    setLoading(true);

    const fetchNotices = async () => {
      try {
        const limit = 6;
        const category = route;
        const result = await fetchAllNotices(category, page, limit);
        const data = result.data.notices;

        setNotices(prevState => [...prevState, ...data]);
        //
        notices.length === result.data.total
          ? setDisable(true)
          : setDisable(false);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchNotices();
  }, [page]);

  function loadMore() {
    setPage(prevPage => prevPage + 1);
  }

  return (
    <>
      <ListNotices>
        {data.map(item => (
          <NoticeCategoryItem key={item._id} data={item} route={route} />
        ))}
      </ListNotices>
      {isNotices && (
        <ButtonFriend onClick={loadMore} disabled={disable}>
          Load more
        </ButtonFriend>
      )}
      {error && <p>Something went wrong, try again later.</p>}
      {loading && <Loader />}
    </>
  );
};
