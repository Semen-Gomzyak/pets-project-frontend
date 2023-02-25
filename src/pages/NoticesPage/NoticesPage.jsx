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

import {
  getIsLoggedIn,
  selectFavoriteNotices,
  getUserById,
} from '../../redux/Auth/selectors';
import {
  getFavoriteNotices,
} from '../../redux/Auth/operations';
import { clearNotices } from '../../redux/Notices/NoticesSlice';

import { NoticesSearch } from 'components/Notices/NoticesSearch/NoticesSearch';
import { NoticesCategoryNav } from 'components/Notices/NoticesCategoriesNav/NoticesCategoryNav';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import ContainerPage from 'components/Container/ContainerPage';
import { NoticesCategoriesList } from 'components/Notices/NoticeCategoryList/NoticesCategoriesList';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import { getFavoriteNoticesByUser } from 'services/getFaforites';

// import { NoticeModal } from 'components/Notices/NoticeModal/NoticeModal';

// import AddNoticeForm from 'components/AddNoticeForm/AddNoticeForm';

// import AddNoticeForm from 'components/AddNoticeForm/AddNoticeForm';
import { NoticeModal } from 'components/Notices/NoticeModal/NoticeModal';
import { MenuWrap } from './NoticesPage.styled';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

import { AddPetBtn } from 'components/ButtonAddPet/AddPetBtn';

export const NoticesPage = () => {
  const { route } = useParams();
  const currentUser = useSelector(getUserById);

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };
  const [searchQweryTitle, setSearchQweryTitle] = useState('');
  const [noticeFavorite, setNoticeFavorite] = useState([]);
  const dispatch = useDispatch();

  const notices = useSelector(selectNotices);
  const isLoading = useSelector(selectNoticesIsLoading);
  const error = useSelector(selectError);
  const isAuth = useSelector(getIsLoggedIn);

    const favorites = useSelector(selectFavoriteNotices);


  useEffect(() => {
    if (searchQweryTitle.length >= 2) {
      if (route === 'favorite') {

      }
      dispatch(
        fetchNoticesByCategoryAndTitle({
          category: route,
          title: searchQweryTitle,
        })
      );
    } else {
      if (route === 'favorite') {

      } else {
        dispatch(fetchAllNotices({ category: route }));
      }
    }
    return () => dispatch(clearNotices([]));
  }, [dispatch, route, searchQweryTitle, currentUser, noticeFavorite]);

    useEffect(() => {
      isAuth && dispatch(getFavoriteNotices({ userId: currentUser }));
    }, []);

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

  const handleSearch = event => {
    setSearchQweryTitle(event.target.value);
  };

  console.log('noticeFavorite.', noticeFavorite);

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
        {showModal && <Modal closeModal={toggleModal}>AddNoticeModal</Modal>}
      </MenuWrap>
      {isLoading && !error && <Loader />}
      {console.log('noticeFavorite====>', noticeFavorite)}
      {route === 'favorite' && noticeFavorite?.length > 0 ? (
        <NoticesCategoriesList data={noticeFavorite} route={route} />
      ) : notices?.length > 0 ? (
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
