import React, { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { SharedLayout } from 'components/SharedLayout/SaredLayout';
import { Profile } from 'pages/Profile/Profile';
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
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="/friends" element={<FriendsList />} />
      </Route>

      <Route path="/profile" element={<Profile />} />

      <Route path="notices" element={<NoticesPage />}></Route>
    </Routes>
  );
};
