import styled from 'styled-components';

export const BtnMenuOpen = styled.button`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 2em;
  cursor: pointer;
  margin-left: auto;
  background: transparent;

  @media (min-width: 768px) {
    margin-left: 25px;
  }

  svg {
    fill: black;

    :hover {
      fill: ${p => p.theme.colors.accent};
    }
  }
`;
