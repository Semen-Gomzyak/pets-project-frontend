import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { SharedLayout } from '../SharedLayout/SaredLayout';
import { Profile } from '../Profile/Profile';

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
      </Route>

      <Route path="/profile" element={<Profile />} />

      <Route path="notices" element={<NoticesPage />}></Route>
    </Routes>
  );
};
