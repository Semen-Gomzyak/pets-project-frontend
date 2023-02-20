import { UserNavDiv, UserNavLink, UserNavIcon } from './UserNav.styled';
// import AccountIcon from '';

export const UserNav = () => {
  return (
    <UserNavDiv>
      <UserNavLink to="/user">
        <UserNavIcon src="/" alt="account" />
        Account
      </UserNavLink>
    </UserNavDiv>
  );
};
