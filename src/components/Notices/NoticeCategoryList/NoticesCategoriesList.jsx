// import { useSelector } from 'react-redux';
// import { selectNotices } from 'redux/Notices/NoticesSelector';
import { NoticeCategoryItem } from './NoticeCategoryItem';
import { ListNotices } from './NoticesCategoriesList.styled';

export const NoticesCategoriesList = ({ data, route }) => {
  console.log('notices in List', data);
  console.log('route in List', route);
  // const notices = useSelector(selectNotices);
  // console.log('notices in List', notices);

  return (
    <>
      <ListNotices>
        {data.map(item => (
          <NoticeCategoryItem key={item._id} data={item} route={route} />
        ))}
      </ListNotices>
    </>
  );
};
