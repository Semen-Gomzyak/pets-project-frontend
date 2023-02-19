import  ContainerPage  from 'components/Container/ContainerPage';

import { NoticesSearch } from 'components/Notices/NoticesSearch/NoticesSearch';
import { NoticesCategoryNav } from 'components/Notices/NoticeCategoryList/NoticeCategoryItem';
import { NoticesCategoryItem } from 'components/Notices/NoticeCategoryList/NoticeCategoryItem';

export const NoticesPage = () => {
  return (
    <ContainerPage>
      <h1>Find your favorite pet</h1>
      {/* <NoticesSearch />

      <NoticesCategoryNav>
        <NoticesCategoryItem />
      </NoticesCategoryNav> */}
    </ContainerPage>
  );
};
