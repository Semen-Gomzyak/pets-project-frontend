import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import {
  fetchAllNotices,
  fetchNoticesByCategoryAndTitle,
} from '../../redux/Notices/NoticesOperations';
import {
  selectNotices,
  selectError,
  selectNoticesIsLoading,
} from '../../redux/Notices/NoticesSelector';
import { getIsLoggedIn } from '../../redux/Auth/selectors';
import { clearNotices } from '../../redux/Notices/NoticesSlice';

import { NoticesSearch } from 'components/Notices/NoticesSearch/NoticesSearch';
import { NoticesCategoryNav } from 'components/Notices/NoticesCategoriesNav/NoticesCategoryNav';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import ContainerPage from 'components/Container/ContainerPage';
import { NoticesCategoriesList } from 'components/Notices/NoticeCategoryList/NoticesCategoriesList';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';

// import AddNoticeForm from 'components/AddNoticeForm/AddNoticeForm';
import { NoticeModal } from 'components/Notices/NoticeModal/NoticeModal';
import { MenuWrap } from './NoticesPage.styled';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

import { AddPetBtn } from 'components/ButtonAddPet/AddPetBtn';

export const NoticesPage = () => {
  const { route } = useParams();

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };
  const [searchQweryTitle, setSearchQweryTitle] = useState('');

  const dispatch = useDispatch();

  const notices = useSelector(selectNotices);
  const isLoading = useSelector(selectNoticesIsLoading);
  const error = useSelector(selectError);
  const isAuth = useSelector(getIsLoggedIn);

  // console.log('notices-->', notices);
  // console.log('route in Page', route);

  useEffect(() => {
    if (searchQweryTitle.length >= 2) {
      dispatch(
        fetchNoticesByCategoryAndTitle({
          category: route,
          title: searchQweryTitle,
        })
      );
    } else {
      dispatch(fetchAllNotices({ category: route }));
    }
    return () => dispatch(clearNotices([]));
  }, [dispatch, route, searchQweryTitle]);

  const onSearch = searchQuery => {
    setSearchQweryTitle(searchQuery);
  };

  //      return (
  //     <ContainerPage>
  //       <SectionTitle text={'Find your favorite pet'} />
  //       <NoticesSearch onSearch={onSearch} />
  //       <NoticesCategoryNav />
  //       {showModal && (
  //         <Modal closeModal={toggleModal}>
  //           <div><AddNoticeForm/></div>
  //         </Modal>
  //       )}
  //       {isLoading && !error && <Loader />}
  //       {notices?.length > 0 ? (
  //         <NoticesCategoriesList data={notices} route={route} />
  //       ) : (
  //         <p
  //           style={{
  //             padding: '15px 25px',
  //             fontSize: 20,
  //             textAlign: 'center',
  //           }}
  //         >
  //           Notices not found
  //         </p>
  //       )}
  //     </ContainerPage>
  //   );
  // };

  const onOpenModal = () => {
    if (!isAuth) {
      setShowModal(false);
      toast.error(
        `You must be authorized to use this functionality - to add notice!.`
      );
    } else {
      setShowModal(true);
    }
  };

  // const searchQuery = query.toLowerCase();
  const handleSearch = event => {
    setSearchQweryTitle(event.target.value);
  };

  // const searchNotice = async query => {
  //   console.log(query);
  //   const searchQuery = query.toLowerCase();
  //   setSearchQweryTitle(searchQuery);
  //   const foundNotices = notices.filter(items =>
  //     items.title.toLowerCase().includes(searchQuery)
  //   );
  //   // sortNoticesByDate(foundNotices); //2020-02-22T22:00:00.000Z
  // };
  /*
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
      <NoticesSearch
        type="text"
        placeholder="Search"
        value={searchQweryTitle}
        onChange={handleSearch}
      />
      <MenuWrap>
        <NoticesCategoryNav />
        <AddPetBtn onClick={onOpenModal} text={'Add pet'} />
        {showModal && (
          <Modal closeModal={toggleModal}>
            <NoticeModal />
          </Modal>
        )}
      </MenuWrap>
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
      {showModal && isAuth && (
        <Modal closeModal={toggleModal}>
          <div>
            <NoticeModal />
          </div>
        </Modal>
      )}
      {showModal &&
        !isAuth &&
        toast.error(
          `You must be authorized to use this functionality - to add notice!.`
        )}
    </ContainerPage>
  );
};
