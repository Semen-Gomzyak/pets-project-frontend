import { Container } from './ContainerPage.styled';

const ContainerPage = ({ children, ...allProps }) => {
  return <Container {...allProps}>{children} </Container>;
};

export default ContainerPage;
