import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  getNotices,
  // getNoticesByCategory,
} from '../../services/getNoticesByCategory';
import { NoticesSearch } from 'components/Notices/NoticesSearch/NoticesSearch';
import { NoticesCategoryNav } from 'components/Notices/NoticesCategoriesNav/NoticesCategoryNav';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import ContainerPage from 'components/Container/ContainerPage';
import { useEffect, useState } from 'react';
import { NoticesCategoriesList } from 'components/Notices/NoticeCategoryList/NoticesCategoriesList';

export const NoticesPage = () => {
  const [notices, setNotices] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const { route } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetch() {
      try {
        // const result = await getNoticesByCategory({});
        const result = await getNotices({});
        setNotices(result);
        if (result.length === 0) {
          throw new Error();
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, [dispatch, route]);

  console.log(notices);

  return (
    <ContainerPage>
      <SectionTitle text={'Find your favorite pet'} />
      <NoticesSearch />
      <NoticesCategoryNav></NoticesCategoryNav>
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
