import ContainerPage from 'components/Container/ContainerPage';

export const NotFound = () => {
  return (
    <ContainerPage>
      <div style={{ textAlign: 'center', marginTop: '60px' }}>
        <b style={{ fontSize: 64 }}>404</b>
        <p style={{ fontSize: 30, marginTop: '30px' }}>
          Sorry, we couldn't find that page :(
        </p>
      </div>
    </ContainerPage>
  );
};
