import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { fetchAllNotices } from '../../redux/Notices/NoticesOperations';
import {
  selectNotices,
  selectError,
  selectIsLoading,
} from '../../redux/Notices/NoticesSelector';

import { NoticesSearch } from 'components/Notices/NoticesSearch/NoticesSearch';
import { NoticesCategoryNav } from 'components/Notices/NoticesCategoriesNav/NoticesCategoryNav';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import ContainerPage from 'components/Container/ContainerPage';

import { NoticesCategoriesList } from 'components/Notices/NoticeCategoryList/NoticesCategoriesList';
import { Loader } from 'components/Loader/Loader';

export const NoticesPage = () => {
  const { route } = useParams();

  const dispatch = useDispatch();
  const notices = useSelector(selectNotices);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  console.log('notices-->', notices);

  useEffect(() => {
    dispatch(fetchAllNotices({ category: 'sell' }));
  }, [dispatch, route]);

  return (
    <ContainerPage>
      <SectionTitle text={'Find your favorite pet'} />
      <NoticesSearch />
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
