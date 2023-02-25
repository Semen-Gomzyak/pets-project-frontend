import styled from 'styled-components';
import { Button } from 'components/Button/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  margin-bottom: 30px;
  text-align: center;
`;

export const BtnContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const StyledButton = styled(Button)`
  width: 90px;
  justify-content: center;

  :hover {
    cursor: pointer;
    background-color: ${p => p.theme.colors.accent};
  }
`;
