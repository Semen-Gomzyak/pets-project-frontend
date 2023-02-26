import { PopupConfirm } from './ConfirmPopup.styled';

export function СonfirmPopup({ trigger, children }) {
  return (
    <PopupConfirm trigger={trigger} position="top center" nested>
      {children}
    </PopupConfirm>
  );
}
