// import { NoticeCategoryItem } from './NoticeCategoryItem';
import { ListNotices } from './NoticesCategoriesList.styled';

export const NoticesCategoriesList = ({ data, route }) => {
  console.log('notices', data);
  return (
    <>
      <ListNotices>
        {/* {data.map(item => (
          <NoticeCategoryItem key={item._id} data={item} route={route} />
        ))} */}
      </ListNotices>
    </>
  );
};
