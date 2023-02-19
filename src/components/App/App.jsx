import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from '../SharedLayout/SaredLayout';
import { Profile } from '../Profile/Profile';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {/* <div id="modal-root"></div> */}
    </>
  );
};
