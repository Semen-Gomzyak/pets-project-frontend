import ContainerPage from 'components/Container/ContainerPage';
import { useEffect, useState } from 'react';

import { getNoticesByCategory } from '../../services/getNoticesByCategory';
import { NoticesSearch } from 'components/Notices/NoticesSearch/NoticesSearch';
import { NoticesCategoryNav } from 'components/Notices/NoticesCategoriesNav/NoticesCategoryNav';
import { NoticesCategoryItem } from 'components/Notices/NoticeCategoryList/NoticeCategoryItem';

export const NoticesPage = () => {
  const [notices, setNotices] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      try {
        const result = await getNoticesByCategory({});
        setNotices(result);
        if (result.length === 0) {
          throw new Error();
        }
        // sortNewsByDate(result);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, []);

  console.log(notices);


  return (
    <ContainerPage>
      <h1>Find your favorite pet</h1>
      <NoticesSearch />
      <NoticesCategoryNav>
        <NoticesCategoryItem notices={notices} />
      </NoticesCategoryNav>
    </ContainerPage>
  );
};
