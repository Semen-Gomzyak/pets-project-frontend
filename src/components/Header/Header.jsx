import { Logo } from 'components/Logo/Logo';
import { Navigation } from 'components/Navigation/Navigation';
import { Container } from 'services/Container';
import { HeaderDiv } from './Header.styled';

export const Header = () => {
  return (
    <>
      <Container>
        <HeaderDiv>
          <Logo />
          <Navigation />
        </HeaderDiv>
      </Container>
    </>
  );
};
