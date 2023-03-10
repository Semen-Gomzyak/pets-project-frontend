import { PopupConfirm } from './ConfirmPopup.styled';

export function –°onfirmPopup({ trigger, children }) {
  return (
    <PopupConfirm trigger={trigger} position="top center" nested>
      {children}
    </PopupConfirm>
  );
}
