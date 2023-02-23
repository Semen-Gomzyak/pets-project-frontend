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

  const onSearch = searchQuery => {
    setSearchQweryTitle(searchQuery);
  };

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
