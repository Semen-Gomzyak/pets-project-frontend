import {
  StyledButton,
  Title,
  Container,
  BtnContainer,
} from './ConfirmLogout.styled';

export const ConfirmLogout = ({ cancel, accept }) => {
  return (
    <Container>
      <Title>Are you shure you want to leave the profile?</Title>
      <BtnContainer>
        <StyledButton type="button" onClick={cancel}>
          No
        </StyledButton>
        <StyledButton type="button" onClick={accept}>
          Yes
        </StyledButton>
      </BtnContainer>
    </Container>
  );
};
