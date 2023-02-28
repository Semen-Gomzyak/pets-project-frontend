import {
  Input,
  Label,
  IconSearch,
} from './NoticesSearch.styled';

export const NoticesSearch = ({ onSearch, ...allProps }) => {
  return (
    <Label>
      <Input onChange={onSearch} {...allProps} /> <IconSearch />
    </Label>
  );
};
