import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { fetchAllNotices } from '../../redux/Notices/NoticesOperations';
import {
  selectNotices,
  selectError,
  selectNoticesIsLoading,
} from '../../redux/Notices/NoticesSelector';
import { clearNotices } from '../../redux/Notices/NoticesSlice';

import { NoticesSearch } from 'components/Notices/NoticesSearch/NoticesSearch';
import { NoticesCategoryNav } from 'components/Notices/NoticesCategoriesNav/NoticesCategoryNav';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import ContainerPage from 'components/Container/ContainerPage';

import { NoticesCategoriesList } from 'components/Notices/NoticeCategoryList/NoticesCategoriesList';
import { Loader } from 'components/Loader/Loader';

export const NoticesPage = () => {
  const { route } = useParams();

  const [searchQweryTitle, setSearchQweryTitle] = useState('');

  const dispatch = useDispatch();
  const notices = useSelector(selectNotices);
  const isLoading = useSelector(selectNoticesIsLoading);
  const error = useSelector(selectError);

  // console.log('notices-->', notices);
  // console.log('route in Page', route);

  useEffect(() => {
    if (searchQweryTitle !== '') {
      dispatch(fetchAllNotices({ category: route, qwery: searchQweryTitle }));
    } else {
      dispatch(fetchAllNotices({ category: route }));
    }
    return () => dispatch(clearNotices([]));
  }, [dispatch, route, searchQweryTitle]);

  // const searchQuery = query.toLowerCase();
  const onSearch = searchQuery => {
    setSearchQweryTitle(searchQuery);
  };
  /*
  const searchNotice = async query => {
    const searchQuery = query.toLowerCase();
    setSearchQweryTitle(searchQuery);
    const foundNotices = notices.filter(items =>
      items.title.toLowerCase().includes(searchQuery)
    );
    sortNoticesByDate(foundNotices); //2020-02-22T22:00:00.000Z
  };

  const sortNoticesByDate = array => {
    const addDateForSort = array.map(notices => {
      return { ...notices, dateForSort: Date.parse(new Date(notices.date)) };
    });

    const sortedNoticesByDate = addDateForSort.sort(
      (a, b) => b.dateForSort - a.dateForSort
    );

    return sortedNoticesByDate;
    // setNews(sortedNoticesByDate);
    // setIsLoading(false);
  };
  */

  return (
    <ContainerPage>
      <SectionTitle text={'Find your favorite pet'} />
      <NoticesSearch onSearch={onSearch} />
      <NoticesCategoryNav />
      {isLoading && !error && <Loader />}
      {notices?.length > 0 ? (
        <NoticesCategoriesList data={notices} route={route} />
      ) : (
        <p
          style={{
            padding: '15px 25px',
            fontSize: 20,
            textAlign: 'center',
          }}
        >
          Notices not found
        </p>
      )}
    </ContainerPage>
  );
};
