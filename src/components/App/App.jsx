import React, { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { refreshUser } from 'redux/Auth/authOperations';

import { SharedLayout } from '../SharedLayout/SaredLayout';
import { Profile } from 'pages/Profile/Profile';

import OurFriends from 'pages/OurFriends';

import { LoginForm } from 'components/LoginForm/LoginForm';

import Register from 'pages/RegisterPage/RegisterPage';
import { NotFound } from 'pages/NotFound/NotFound';

import { Routes, Route } from 'react-router-dom';

import { NoticesPage } from 'pages/NoticesPage/NoticesPage';

import { UserNav } from 'components/UserNav/UserNav';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
// import { NoticeCategoryItem } from 'components/Notices/NoticeCategoryList/NoticeCategoryItem';
import { PublicRoute } from 'services/PublicRoute';
import { PrivateRoute } from 'services/PrivateRoute';
import FriendsList from 'components/OurFriends/FriendsList';

const Home = lazy(() =>
  import('../../pages/HomePage/HomePage').then(module => ({
    ...module,
    default: module.HomePage,
  }))
);
const NewsPage = lazy(() =>
  import('../../pages/NewsPage/NewsPage').then(module => ({
    ...module,
    default: module.NewsPage,
  }))
);

const PetsPage = lazy(() => import('../../pages/PetsPage/PetsPage'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        {/* <Route path="/register" element={<Register />} /> */}

        <Route
          index
          element={
            <PublicRoute>
              <Home />
            </PublicRoute>
          }
        />
        <Route
          path="user"
          element={
            <PrivateRoute>
              <UserNav />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/friends" element={<FriendsList />} />
      </Route>

      <Route path="/profile" element={<Profile />} />

      <Route path="/notices" element={<NoticesPage />}></Route>
      <Route
        path="/pets"
        element={<PrivateRoute component={PetsPage} redirectTo={'/login'} />}
      />
      <Route
        path="news"
        element={
          <PublicRoute>
            <NewsPage />
          </PublicRoute>
        }
      ></Route>
      <Route path="*" element={<NotFound />}></Route>

      <Route path="/friends" element={<OurFriends />} />
    </Routes>
  );
};
