import { useState } from 'react';
// import { useSelector } from 'react-redux';
import { useMedia } from 'react-use';
import { getIsLoggedIn } from 'redux/Auth/selectors';
import { Nav } from 'components/Nav/Nav';
// import { AuthNav } from 'components/AuthNav/AuthNav';
// import { UserNav } from 'components/UserNav/UserNav';
import { OpenBtn } from 'components/ButtonNav/OpenBtn';
import { ButtonNav } from 'components/ButtonNav/ButtonNav';

export const Navigation = () => {
  const [isButtonNavOpen, setIsButtonNavOpen] = useState(false);
  const isAuth = useSelector(getIsLoggedIn);

  const isDesktop = useMedia('(min-width: 1280px)');
  // const isMobile = useMedia('(max-width: 767px)');

  const open = () => {
    setIsButtonNavOpen(true);
  };

  const close = evt => {
    if (
      evt.target.nodeName === 'A' ||
      evt.currentTarget.nodeName === 'BUTTON'
    ) {
      setIsButtonNavOpen(false);
    }
  };

  return (
    <>
      {isDesktop && <Nav />}
      {/* {!isMobile && isAuth && <UserNav />}
      {!isMobile && !isAuth && <AuthNav />} */}
      {!isDesktop && <OpenBtn onClick={open} />}
      {isButtonNavOpen && !isDesktop && <ButtonNav close={close} />}
    </>
  );
};
