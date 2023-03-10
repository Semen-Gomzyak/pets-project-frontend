import React, { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { refreshUser } from 'redux/Auth/operations';
import { useAuth } from 'hooks';

import { SharedLayout } from '../SharedLayout/SaredLayout';
import { Profile } from 'pages/Profile/Profile';
import { Loader } from 'components/Loader/Loader';

import { LoginForm } from 'components/LoginForm/LoginForm';

import { NotFound } from 'pages/NotFound/NotFound';

import { Routes, Route } from 'react-router-dom';

import { UserNav } from 'components/UserNav/UserNav';

import { RegisterForm } from 'components/Registration/RegisterForm';
import { PublicRoute } from 'services/PublicRoute';
import { PrivateRoute } from 'services/PrivateRoute';

import OurFriends from 'pages/OurFriendsPage/OurFriends';

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
const NoticesPage = lazy(() =>
  import('../../pages/NoticesPage/NoticesPage').then(module => ({
    ...module,
    default: module.NoticesPage,
  }))
);

const PetsPage = lazy(() => import('../../pages/PetsPage/PetsPage'));

export const App = () => {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
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

        <Route path="/register" element={<RegisterForm />} />
        <Route path="/friends" element={<OurFriends />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/notices/:route" element={<NoticesPage />}></Route>

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
      </Route>
    </Routes>
  );
};
