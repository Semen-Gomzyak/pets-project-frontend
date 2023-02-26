import Popup from 'reactjs-popup';
import styled from 'styled-components';

export const PopupConfirm = styled(Popup)`
  &-content {
    background: ${p => p.theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding: 12px;
    border: 1px solid ${p => p.theme.colors.accent};
    border-radius: 8px;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.33;
  }
`;
