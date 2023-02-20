import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { SharedLayout } from '../SharedLayout/SaredLayout';
import { Profile } from '../Profile/Profile';
import { NoticesPage } from 'pages/NoticesPage/NoticesPage';
import { HomePage } from 'pages/HomePage/HomePage';
import { UserNav } from 'components/UserNav/UserNav';
// import { NoticeCategoryItem } from 'components/Notices/NoticeCategoryList/NoticeCategoryItem';
import { PublicRoute } from 'services/PublicRoute';
import { PrivateRoute } from 'services/PrivateRoute';

// const Home = lazy(() => import('../../pages/HomePage/HomePage')).then(
//   module => ({ ...module, default: module.Home })
// );

// const Home = lazy(() => import('../../pages/HomePage/HomePage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <PublicRoute>
              <HomePage />
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

      <Route path="notices" element={<NoticesPage />}>

      </Route>
    </Routes>
  );
};
