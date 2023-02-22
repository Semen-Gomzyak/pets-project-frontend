// import ContainerPage from 'components/Container/ContainerPage';
import FriendsList from 'components/OurFriends/FriendsList';
import PageTitle from 'components/PageTitle/PageTitle';

import { OurFriendsPage } from './OurFriends.styled';

export default function OurFriends() {
  return (
    <OurFriendsPage>
      <PageTitle title="Our friends" />
      <FriendsList />
    </OurFriendsPage>
  );
}
