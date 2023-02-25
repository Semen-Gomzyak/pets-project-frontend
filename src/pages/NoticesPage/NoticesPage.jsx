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
  // selectNoticesOwner,
} from '../../redux/Notices/NoticesSelector';

import {
  getIsLoggedIn,
  selectFavoriteNotices,
  getUserById,
} from '../../redux/Auth/selectors';
import { getFavoriteNotices } from '../../redux/Auth/operations';
import { clearNotices } from '../../redux/Notices/NoticesSlice';

import { NoticesSearch } from 'components/Notices/NoticesSearch/NoticesSearch';
import { NoticesCategoryNav } from 'components/Notices/NoticesCategoriesNav/NoticesCategoryNav';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import ContainerPage from 'components/Container/ContainerPage';
import { NoticesCategoriesList } from 'components/Notices/NoticeCategoryList/NoticesCategoriesList';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';

// import AddNoticeForm from 'components/AddNoticeForm/AddNoticeForm';
// import { NoticeModal } from 'components/Notices/NoticeModal/NoticeModal';
import { MenuWrap } from './NoticesPage.styled';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

import { AddPetBtn } from 'components/ButtonAddPet/AddPetBtn';
import { getAllNoticesForOwners } from 'services/getFaforites';

export const NoticesPage = () => {
  const { route } = useParams();
  const currentUser = useSelector(getUserById);

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
  const debounceDelay = 2000;

  let timeoutId;

  const favorites = useSelector(selectFavoriteNotices);
  const noticeFavorite = favorites;

  useEffect(() => {
    if (searchQweryTitle.length >= 2) {
      if (isAuth && route === 'favorite') {
        alert('написати функцію по пошуку');
        //dispatch(getFavoriteNotices({ userId: currentUser }));
      }
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
  }, [dispatch, route, searchQweryTitle, isAuth, currentUser]);

  useEffect(() => {
    isAuth && dispatch(getFavoriteNotices({ userId: currentUser }));
    //&&dispatch(getOwnerNotices({ userId: currentUser }));
  }, [isAuth, dispatch, currentUser]);

  const onSearch = searchQuery => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(handleChanges(searchQuery), debounceDelay);
  };

  const handleChanges = searchQuery => {
    setSearchQweryTitle(searchQuery);
  };

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

  const [ownerNotices, setOwnerNotices] = useState([]);
  useEffect(() => {
    async function fetch() {
      try {
        const ownerNotice = await getAllNoticesForOwners();

        // const array = res.filter(item => item.owner._id === currentUser);
        // console.log('owner--->', array);
        setOwnerNotices(ownerNotice);
        return ownerNotice;
      } catch (error) {
        console.log(error.message);
      }
    }
    fetch();
  }, []);

  return (
    <ContainerPage>
      <SectionTitle text={'Find your favorite pet'} />
      <NoticesSearch
        type="text"
        placeholder="Search"
        value={searchQweryTitle}
        onChange={handleSearch}
        id="inputSearch"
      />
      <MenuWrap>
        <NoticesCategoryNav />
        <AddPetBtn onClick={onOpenModal} text={'Add pet'} />
        {showModal && <Modal closeModal={toggleModal}>AddNoticeModal</Modal>}
      </MenuWrap>
      {isLoading && !error && <Loader />}

      {route === 'own' && ownerNotices?.length > 0 ? (
        <NoticesCategoriesList data={ownerNotices} route={route} />
      ) : route === 'favorite' && noticeFavorite?.length > 0 ? (
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
