import { UserNavDiv, UserNavLink, UserNavIcon } from './UserNav.styled';
import accountIcon from '../../images/userAndPets/accountIcon.svg';

export const UserNav = () => {
  return (
    <UserNavDiv>
      <UserNavLink to="/user">
        <UserNavIcon src={accountIcon} alt="account" />
        Account
      </UserNavLink>
    </UserNavDiv>
  );
};
