import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { Header } from '../Header/Header';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Outlet />
      </Suspense>
      <ToastContainer autoClose={2000} theme="colored" />
    </>
  );
};
