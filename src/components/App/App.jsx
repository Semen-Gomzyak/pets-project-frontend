import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { SharedLayout } from '../SharedLayout/SaredLayout';
import { Profile } from '../Profile/Profile';
import { HomePage } from 'pages/HomePage/HomePage';
import Register from 'pages/RegisterPage/RegisterPage';

// const Home = lazy(() => import('../../pages/HomePage/HomePage'));
// const RegisterPage = lazy(() => import('../../pages/RegisterPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/register' element={<Register />} />
      </Route>
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};
