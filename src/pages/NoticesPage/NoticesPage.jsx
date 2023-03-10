import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import {
  fetchAllNotices,
  addNotice,
} from '../../redux/Notices/NoticesOperations';
import {
  selectNotices,
  selectNoticesIsLoading,
} from '../../redux/Notices/NoticesSelector';

import {
  getIsLoggedIn,
  selectFavoriteNotices,
  getUserById,
} from '../../redux/Auth/selectors';
import { getFavoriteNotices } from '../../redux/Auth/operations';
import { selectToken } from 'redux/Auth/selectors';
import {
  clearNotices,
  changeFavoritesNotices,
} from '../../redux/Notices/NoticesSlice';
import { NoticesSearch } from 'components/Notices/NoticesSearch/NoticesSearch';
import { NoticesCategoryNav } from 'components/Notices/NoticesCategoriesNav/NoticesCategoryNav';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import ContainerPage from 'components/Container/ContainerPage';
import { NoticesCategoriesList } from 'components/Notices/NoticeCategoryList/NoticesCategoriesList';
import { Modal } from 'components/Modal/Modal';
import { NoticeForm } from 'components/Notices/NoticeForm/NoticeForm';
import { MenuWrap } from './NoticesPage.styled';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

import { AddPetBtn } from 'components/ButtonAddPet/AddPetBtn';
import { getAllNoticesForOwners } from 'services/getFaforites';
import { getNoticeByCategoryAndTitle } from 'services/api/notices';

export const NoticesPage = () => {
  const { route } = useParams();
  let currentUser = useSelector(getUserById);

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };
  const [searchQweryTitle, setSearchQweryTitle] = useState('');
  const [searchNotices, setSearchNotices] = useState({});
  const dispatch = useDispatch();

  const notices = useSelector(selectNotices);
  const isLoading = useSelector(selectNoticesIsLoading);
  const isAuth = useSelector(getIsLoggedIn);
  const token = useSelector(selectToken);

  const noticeFavorite = useSelector(selectFavoriteNotices);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchQweryTitle.length >= 1) {
          const response = await getNoticeByCategoryAndTitle({
            category: route,
            title: searchQweryTitle,
          });

          setSearchNotices(response);
        }

        if (
          (isAuth && currentUser !== null) ||
          (isAuth && currentUser !== null && searchQweryTitle.length === 0)
        ) {
          dispatch(fetchAllNotices({ category: route }));
          dispatch(changeFavoritesNotices({ userId: currentUser }));
        } else {
          dispatch(fetchAllNotices({ category: route }));
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    return () => dispatch(clearNotices([]));
  }, [dispatch, route, searchQweryTitle, isAuth, currentUser]);

  useEffect(() => {
    if (isAuth && currentUser !== null) {
      dispatch(getFavoriteNotices({ userId: currentUser }));
    }
  }, [isAuth, dispatch, currentUser]);

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

  const addNewNotice = async newPet => {
    toggleModal();
    const response = await dispatch(addNotice({ newNotice: newPet, token }));
  response
    ? toast.success('Notice success added')
    : toast.error('Something went wrong, please try again');
  return  dispatch(fetchAllNotices({ category: route }));
  };

  const [ownerNotices, setOwnerNotices] = useState([]);
  useEffect(() => {
    async function fetch() {
      try {
        const ownerNotice = await getAllNoticesForOwners();

        setOwnerNotices(ownerNotice);
        return ownerNotice;
      } catch (error) {
        toast.error('Something went wrong, please try again');
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
        {showModal &&  (
          <Modal closeModal={toggleModal}>
            <NoticeForm addNewNotice={addNewNotice} />
          </Modal>
        )}
      </MenuWrap>

      {route === 'own' && ownerNotices?.length > 0 && !isLoading ? (
        <NoticesCategoriesList data={ownerNotices} route={route} />
      ) : route === 'favorite' && noticeFavorite?.length > 0 && !isLoading ? (
        <NoticesCategoriesList data={noticeFavorite} route={route} />
      ) : searchQweryTitle.length >= 1 && searchNotices?.length > 0 ? (
        <NoticesCategoriesList data={searchNotices} route={route} />
      ) : searchQweryTitle.length === 0 && notices?.length > 0 ? (
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
