import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/Auth/authOperations';

import { SharedLayout } from '../SharedLayout/SaredLayout';
import { Profile } from '../Profile/Profile';

import OurFriends from 'pages/OurFriends';

import { LoginForm } from 'components/LoginForm/LoginForm';


// import { HomePage } from 'pages/HomePage/HomePage';
import Register from 'pages/RegisterPage/RegisterPage';

import { NoticesPage } from 'pages/NoticesPage/NoticesPage';

import { UserNav } from 'components/UserNav/UserNav';
// import { NoticeCategoryItem } from 'components/Notices/NoticeCategoryList/NoticeCategoryItem';
import { PublicRoute } from 'services/PublicRoute';
import { PrivateRoute } from 'services/PrivateRoute';

const Home = lazy(() =>
  import('../../pages/HomePage/HomePage').then(module => ({
    ...module,
    default: module.HomePage,
  }))
);

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/register" element={<Register />} />

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
        <Route path="/friends" element={<OurFriends />} />
      </Route>

      <Route path="/profile" element={<Profile />} />

      <Route path="/login" element={<LoginForm />} />


      <Route path="notices" element={<NoticesPage />}></Route>

    </Routes>
  );
};
