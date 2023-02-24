import { Btn } from './BtnNotice.styled';

export const NoticeBtn = ({ text, onClick }) => {
  return (
    <Btn type="button" onClick={onClick}>
      <span>{text}</span>
    </Btn>
  );
};
