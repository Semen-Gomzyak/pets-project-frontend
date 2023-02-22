import { UserNavDiv, UserNavLink, UserNavIcon } from './UserNav.styled';
import AccountIcon from '../../images/userAndPets/account-icon.svg';

export const UserNav = () => {
  return (
    <UserNavDiv>
      <UserNavLink to="/profile">
        <UserNavIcon src={AccountIcon} alt="account" />
        Account
      </UserNavLink>
    </UserNavDiv>
  );
};
