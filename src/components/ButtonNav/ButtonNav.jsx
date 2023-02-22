import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { useMedia } from 'react-use';

// import { selectIsAuth } from 'redux/Auth/authSelectors';
// import { UserNav } from 'components/UserNav/UserNav';
// import { AuthNav } from 'components/AuthNav/AuthNav';
import { Logo } from 'components/Logo/Logo';
import { Nav } from 'components/Nav/Nav';
import { CloseBtn } from 'components/ButtonNav/CloseBtn';
import { ButtonNavMenu, LogoMenu, UserMenu } from './ButtonNav.styled';
import { Container } from 'services/Container';

export const ButtonNav = ({ close }) => {
  // const isAuth = useSelector(selectIsAuth);
  // const isMobile = useMedia('(max-width: 767px)');
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  });

  return (
    <ButtonNavMenu onClick={close}>
      <Container>
        <LogoMenu>
          <Logo />
          <CloseBtn onClick={close} />
        </LogoMenu>
        <UserMenu>
          {/* {isMobile && isAuth && <UserNav />}
          {isMobile && !isAuth && <AuthNav />} */}
        </UserMenu>
        <Nav />
      </Container>
    </ButtonNavMenu>
  );
};
