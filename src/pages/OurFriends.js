import ContainerPage from 'components/Container/ContainerPage';
import FriendsList from 'components/OurFriends/FriendsList';
import PageTitle from 'components/PageTitle/PageTitle';

export default function OurFriends() {
  return (
    <ContainerPage>
      <PageTitle title="Our friends" />
      <FriendsList />
    </ContainerPage>
  );
}
