import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/Auth/authOperations';

import { SharedLayout } from '../SharedLayout/SaredLayout';
import { Profile } from '../Profile/Profile';
import { LoginForm } from 'components/LoginForm/LoginForm';

const Home = lazy(() => import('../../pages/HomePage/HomePage'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<LoginForm />} />
    </Routes>
  );
};
